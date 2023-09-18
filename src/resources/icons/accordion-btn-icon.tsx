import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

import colors from '@resources/colors';

export enum AccordionIconDirection {
  UP = 'up',
  DOWN = 'down',
  LEFT = 'left',
  RIGHT = 'right',
}

interface IProps extends SvgProps {
  direction?: AccordionIconDirection;
}

const AccordionBtnIcon = (props?: IProps) => {
  const {
    color = colors.primary.cardinal,
    width = 11,
    height = 6,
    direction = AccordionIconDirection.DOWN,
  } = props || {};

  const rotation = getRotationValue(direction);

  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 11 6`}
      fill="none"
      rotation={rotation}
      {...props}>
      <Path
        d="M5.50005 3.87852L9.21255 0.166016L10.2731 1.22652L5.50005 5.99952L0.727051 1.22652L1.78755 0.166016L5.50005 3.87852Z"
        fill={color}
      />
    </Svg>
  );
};

const getRotationValue = (direction: AccordionIconDirection) => {
  switch (direction) {
    case AccordionIconDirection.UP:
      return 180;

    case AccordionIconDirection.DOWN:
    default:
      return 0;

    case AccordionIconDirection.LEFT:
      return 90;

    case AccordionIconDirection.RIGHT:
      return -90;
  }
};

export default AccordionBtnIcon;
