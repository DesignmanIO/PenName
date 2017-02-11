// @flow
import React, { Component } from 'react';
import {Layout} from 'antd';

export default class App extends Component {
  props: {
    children: HTMLElement
  };

  render() {
    return (
      <Layout className="layout">
        {this.props.children}
      </Layout>
    );
  }
}
