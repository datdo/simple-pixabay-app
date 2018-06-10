import React from 'react';
import { connect } from 'react-redux';

import ImageList from '../components/ImageList';

import { fetchData } from '../actions';

const mapStateToProps = state => {
    let storedData = state.data.map(imgdata => ({ key: imgdata.id, ...imgdata }));
    return {
        data: storedData
    };
};

const mapDispatchToProps = {
    loadNext: fetchData
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageList);
