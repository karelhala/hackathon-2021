import Matter from 'matter-js';
import Player from './components/Player';
import Bounds from './components/Bounds';
import Obstacle from './components/Obstacle';
import {getRandom,topObstacleHeight,bottomObstacleHeight} from '../utils/constants';
import {Dimensions} from 'react-native';

const getEntity = () => {
  const body = Matter.Bodies.rectangle(randomInt(1, width - 50), randomInt(0, -200), 75, 45, {
    frictionAir: 0.05,
    label: 'obstacle',
    trajectory: randomInt(-5, 5) / 10,
  });
  const obj = { body, size: [75, 50], renderer: Obj };

  return { obstacle: obj, body };
};

Matter.Common.isElement = () => false;

export default restart => {
  const {height, width} = Dimensions.get('window');
  const heightRatio = height / 667;
  if (restart) {
    Matter.Engine.clear(restart.physics.engine);
  }

  let engine = Matter.Engine.create({enableSleeping: false});
  let world = engine.world;
  const boxSize = 50;

  return {
    physics: {engine: engine, world: world},
    Player: Player(
      world,
      'pink',
      {x: 100, y: 500},
      {height: boxSize, width: boxSize},
    ),
    Floor: Bounds(world,'white',{x: width / 2, y: height - 100},{height: 100, width: width}),
    Ceiling: Bounds(world,'white',{x: width / 2, y: 20},{height: 20, width: width}),
    Obstacle1: Obstacle(
      world,
      'top',
      {
        x: width * 2 - 100 / 2,
        y: getRandom(heightRatio * 100, heightRatio * 300),
      },
      {height: topObstacleHeight, width: 100},
    ),
    Obstacle2: Obstacle(
      world,
      'bottom',
      {
        x: width * 3 - 100 / 2,
        y: getRandom(heightRatio * 300, heightRatio * 500),
      },
      {height: bottomObstacleHeight, width: 100},
    ),
  };
};
