import React from 'react';
import {View, Platform, NativeEventEmitter, Dimensions} from 'react-native';
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
      <TeachstackModuleView
        url="https://video.teachmint.com/videoroom/videodemo::rn_test/test2/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb29tX2lkIjoidmlkZW9kZW1vOjpybl90ZXN0IiwidWlkIjoidGVzdDIiLCJ1bmFtZSI6InRlc3QyIiwidXR5cGUiOjIsImV4cCI6MTY0OTcwMzE4OH0.OF7UqPRL3_oQAUiuEfATj6rW3j5PFREDSKilGsoC5aQ"
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}
      />
    </View>
  );
};

export default App;
