import Matter from 'matter-js';
import {Dimensions} from 'react-native';
import {getRandom} from '../utils/constants';

export const UpdatePlayer = (entities, {touches, time}) => {
  const engine = entities.physics.engine;
  touches
    .filter(t => t.type === 'press')
    .forEach(t => {
      Matter.Body.setVelocity(entities.Player.body, {
        x: entities.Player.body.velocity.x,
        y: -3,
      });
    });
  Matter.Engine.update(engine, time.delta);
  return entities;
}

export const Physics = (entities, { time, dispatch }) => {
  const { engine } = entities.physics;
  engine.world.gravity.y = 0.3;
  Matter.Engine.update(engine, time.delta);
  Matter.Events.on(engine, 'collisionStart', ({ pairs }) => {
    if (pairs.some(({ bodyA, bodyB }) => [bodyA.label, bodyB.label].includes('obstacle'))) {
      dispatch({type: 'gameOver'});
    }
  });
  return entities;
};

export const UpdateObstacle = (entities, {time, dispatch}) => {
  const {width} = Dimensions.get('window');
  for (let i = 1; i <= 2; i++) {
    if (
      entities['Obstacle' + i].type === 'top' &&
      entities['Obstacle' + i].body.position.x <=
        -1 * (100 / 2)
    ) {
      entities['Obstacle' + i].scored = false;
      Matter.Body.setPosition(entities['Obstacle' + i].body, {
        x: width * 2 - 100 / 2,
        y: getRandom(100, 300),
      });
    } else if (
      entities['Obstacle' + i].type === 'bottom' &&
      entities['Obstacle' + i].body.position.x <=
        -1 * (100 / 2)
    ) {
      entities['Obstacle' + i].scored = false;
      Matter.Body.setPosition(entities['Obstacle' + i].body, {
        x: width * 2 - 100 / 2,
        y: getRandom(300, 500),
      });
    } else {
      Matter.Body.translate(entities['Obstacle' + i].body, {x: -4, y: 0});
    }
  }
  return entities;
};
