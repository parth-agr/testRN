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

  return (
    <View>
      <TeachstackModuleView url="https://video.teachmint.com/videoroom/teachmint::693479183/6194d019deddfeef8eebdc05/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb29tX2lkIjoidGVhY2htaW50Ojo2OTM0NzkxODMiLCJ1aWQiOiI2MTk0ZDAxOWRlZGRmZWVmOGVlYmRjMDUiLCJ1bmFtZSI6InJhbmRvbSIsInV0eXBlIjoxLCJleHAiOjE2NDkyMTg5MDZ9.9xiC8Pd-KZmSVwkl3zydbjAUENaUoJNY4UdFNClHLlY" />
    </View>
  );
};

export default App;
