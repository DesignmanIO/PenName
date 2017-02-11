// @flow
import React, { Component } from 'react';
import {Layout, Upload, Icon, message, Row, Col, Button} from 'antd';
import Home from '../components/Home';
const {Content} = Layout;
const {Dragger} = Upload;

export default class Uploader extends Component {
  render() {
    return (
      <Content style={{padding: 15}}>
        <div style={{height: 180}}>
          <Dragger className="uploader">
            <p className="ant-upload-drag-icon">
              <Icon type="file-text"/>
            </p>
            <p className="ant-upload-text">Click or drag file to this area to check</p>
          <p className="ant-upload-hint">Supporder file types: .txt</p>
          </Dragger>
        </div>
      </Content>
    );
  }
}
