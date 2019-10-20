import React from 'react';
import {
  TouchableNativeFeedback,
  TouchableHighlight,
  Platform
} from 'react-native';

export default function NativeButton({
  onPress=(()=>{}),
  children = null,
}) {
  let TouchableComponent = TouchableNativeFeedback;
  if (Platform.OS === 'ios') {
    TouchableComponent = TouchableHighlight;
  }

  return (
    <TouchableComponent onPress={onPress}>
      {children}
    </TouchableComponent>
  );
}
