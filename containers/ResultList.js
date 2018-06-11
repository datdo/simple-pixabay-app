import React from 'react';
import { connect } from 'react-redux';

import ImageList from '../components/ImageList';

import { fetchData, clickImage } from '../actions';

const mapStateToProps = state => {
    let storedData = state.data.map(imgdata => ({
        key: imgdata.id.toString(),
        url: imgdata.previewURL,
        width: imgdata.previewWidth,
        height: imgdata.previewHeight
    }));
    return {
        data: storedData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadNext: fetchData,
        onClickImage: id => {
            dispatch(clickImage(id))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageList);
