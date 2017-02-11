import React, { Component } from 'react';
import {Layout, Upload, Icon, message, Row, Col, Button} from 'antd';

const {Content} = Layout;
const {Dragger} = Upload;

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Layout className="layout">
        <Content style={{padding: 15}}>
            <Dragger className="uploader">
              <p className="ant-upload-drag-icon">
                <Icon type="file-text"/>
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
            </Dragger>
        </Content>
      </Layout>
    );
  }
}

export default App;
