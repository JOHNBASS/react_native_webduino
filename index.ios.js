/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';

 const webapp = require('./webapp/index.html');

export default class myApp extends Component {
  render() {
    return (

      <WebView
      
      source={webapp}
      style={{marginTop: 30}} />

    );
  }
}

var styles =StyleSheet.create({  
    webview_style:{   
       backgroundColor:'#00ff00',    
    }  
});  


AppRegistry.registerComponent('myApp', () => myApp);
