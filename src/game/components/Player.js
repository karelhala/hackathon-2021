import React from 'react';
import {Image} from 'react-native';
import Matter from 'matter-js';

const player = require('../../../assets/player.png');

const Player = props => {
  const width = props.size[0];
  const height = props.size[1];
  const x = props.body.position.x - width / 2;
  const y = props.body.position.y - height / 2;
  return (
    <Image
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: width,
        height: height,
      }}
      resizeMode="stretch"
      source={player}
    />
  );
};

export default (world, color, pos, size) => {
  const initialPlayer = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
  );
  Matter.World.add(world, [initialPlayer]);

  return {
    body: initialPlayer,
    size: [size.width, size.height],
    color: color,
    renderer: <Player />,
  };
};
