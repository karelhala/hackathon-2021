import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Icon = ({ svgPath, yOffset, xOffset, height, width, style, ...props }) => (
  <Svg
    height="40"
    width="40"
    viewBox={`${xOffset} ${yOffset} ${width} ${height}`}
    style={{ fill: 'white', ...style }}
    {...props}
  >
      <Path d={svgPath}/>
    </Svg>
);

export default Icon;
