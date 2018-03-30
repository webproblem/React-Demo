import React, { Component } from 'react';
import { version } from 'antd';

class Version extends Component {
    render() {
        return (
            <div>Current antd version: {version}</div>
        )
    }
}

export default Version;
