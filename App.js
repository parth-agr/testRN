import React from 'react';
import {View, Platform, NativeEventEmitter} from 'react-native';
import {TeachstackModuleView} from 'react-native-teachstack-module';

const App = () => {
  if (Platform.OS == 'android') {
    const eventEmitter = new NativeEventEmitter();
    eventEmitter.addListener('Callbacks', event => {
      console.log('Callback event: ' + event.eventProperty);
    });
  }

  let data = {};
  data['url'] =
    'https://video.teachmint.com/videoroom/videodemo::parthTest/studentId2/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb29tX2lkIjoidmlkZW9kZW1vOjpwYXJ0aFRlc3QiLCJ1aWQiOiJzdHVkZW50SWQyIiwidW5hbWUiOiJBbGV4IER1bnBoeSIsInV0eXBlIjoyLCJleHAiOjE2NTY2NDU4Mzd9.UPzX29PRO2X9H1AhqOf3itxm6KOQyC1XxClXDL_4p7k';
  data['appGroup'] = 'group.teachmint.ios.app.appgroup';
  return (
    <View>
      <TeachstackModuleView TeachstackModuleData={data} />
    </View>
  );
};

export default App;
