// @flow
import React, { Component } from 'react';
import {Layout, Upload, Icon, message, Row, Col, Button} from 'antd';
import fs from 'fs';
import {spawn} from 'child_process';
import path from 'path';
// const appDir = path.dirname(require.main.filename);

const {Content} = Layout;
const {Dragger} = Upload;
import Home from '../components/Home';

export default class Uploader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uploadReady: false,
      text: '',
    };
  }

  parseFile(file) {
    fs.readFile(file.path, 'utf8', (err, res) => {
      if(err) throw err;
      this.setState({text: res});
    });
  }

  checkFile() {
    const pythonResults = spawn('./python/venv/bin/python', ['./python/dummy_function.py', this.state.text]);
    const uint8arrayToString = (data) =>  String.fromCharCode.apply(null, data);
    pythonResults.stdout.on('data', (data) => {
      // console.log(uint8arrayToString(data));
    });
  }

  render() {
    const disabled = !this.state.uploadReady;
    return (
      <Content style={{padding: 15}}>
        <Row gutter={15}>
          <Col span={24}>
            <Dragger
              className="uploader"
              multiple={false}
              accept=".txt"
              data={(result) => {
                console.log(result);
                if(result) {
                  this.setState({uploadReady: true});
                  this.parseFile(result);
                }
              }}
              onRemove={() => this.setState({uploadReady: false})}
              ref={(uploader) => {
                // this.uploader = uploader;
              }}
            >
              <p className="ant-upload-drag-icon">
                <Icon type="file-text"/>
              </p>
              <p className="ant-upload-text">Click or drag file to this area to check</p>
            <p className="ant-upload-hint">Supporder file types: .txt</p>
            </Dragger>
          </Col>
        </Row>
        <Row gutter={15}>
          <Col span={24}>
            <Button disabled={disabled} onClick={() => this.checkFile()} className="upload-button">Check it</Button>
          </Col>
        </Row>
      </Content>
    );
  }
}
