// @flow
import React, { Component } from 'react';
import {Layout, Upload, Icon, message, Row, Col, Button} from 'antd';
import Home from '../components/Home';
const {Content} = Layout;
const {Dragger} = Upload;

export default class HomePage extends Component {
  render() {
    return (
      <Content style={{padding: 15}}>
          <Dragger className="uploader">
            <p className="ant-upload-drag-icon">
              <Icon type="file-text"/>
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
          </Dragger>
      </Content>
    );
  }
}
