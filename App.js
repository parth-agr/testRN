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
    'https://video.teachmint.com/videoroom/videodemo::parthTest/teacherId/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb29tX2lkIjoidmlkZW9kZW1vOjpwYXJ0aFRlc3QiLCJ1aWQiOiJ0ZWFjaGVySWQiLCJ1bmFtZSI6InRlYWNoZXIiLCJ1dHlwZSI6MSwiZXhwIjoxNjU2NjQ0NDExfQ.HpKofqGmrPcKmBlWij6foNJlmOJnNftLC_FBys8OOpk';
  data['appGroup'] = 'something';
  return (
    <View>
      <TeachstackModuleView TeachstackModuleData={data} />
    </View>
  );
};

export default App;
