import React, {ReactElement} from 'react';
import UICardView from './ui-card-view';

const UICard = ({
  style = {},
  containerStyle = {},
  children,
}: IUICardProps): ReactElement => {
  return (
    <UICardView
      children={children}
      style={style}
      containerStyle={containerStyle}
    />
  );
};

export default UICard;
