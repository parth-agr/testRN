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
    'https://video.teachmint.com/videoroom/videodemo::ModernFamily/phil/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb29tX2lkIjoidmlkZW9kZW1vOjpNb2Rlcm5GYW1pbHkiLCJ1aWQiOiJwaGlsIiwidW5hbWUiOiJQaGlsIER1bnBoeSIsInV0eXBlIjoxLCJleHAiOjE2NjAxOTc4MDV9.1ZZTY1oBXqoeO4qhji9dJ09VgUjivBZZw8003-e2620';
  data['appGroup'] = 'group.teachmint.ios.app.appgroup';
  return (
    <View>
      <TeachstackModuleView TeachstackModuleData={data} />
    </View>
  );
};

export default App;
