import React from 'react';
import { WebView } from 'react-native-webview';

const Login = ({ onLogin }) => {
  return (
    <WebView
      source={{ uri: 'https://cloud.redhat.com/insights' }}
      style={{ marginTop: 20 }}
      onMessage={(event) => {
        onLogin(JSON.parse(event.nativeEvent.data));
      }}
      injectedJavaScript={`
      window.insights.chrome.auth.getUser().then((user) => {
        window.insights.chrome.auth.getToken().then((token) => {
          window.ReactNativeWebView.postMessage(JSON.stringify({
            ...user,
            token
          }))
        })
      })
      `}
    />
  );
}

export default Login;
