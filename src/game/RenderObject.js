import React from 'react';
import {View, Text} from 'react-native';

const RenderObject = ({ body, size }) => {
  const { position } = body;
  const sizeWidth = size[0];
  const sizeHeight = size[1];
  const x = position.x - sizeWidth / 2;
  const { y } = position;

  return (
    <View>
      <Text
        style={[
          {
            left: x,
            top: y,
            width: sizeWidth,
            height: sizeHeight,
          },
        ]}
      >This is object</Text>
    </View>
  );
};

export default RenderObject;
