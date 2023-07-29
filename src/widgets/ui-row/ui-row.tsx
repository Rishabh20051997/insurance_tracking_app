import React from 'react';
import UIRowView from './ui-row-view';

interface IUIRowProps extends IUIRowViewProps {}

/**
 * Widget for horizontal/row representation of child view
 * @param {IUIRowProps} props
 * @returns
 */
const UIRow: React.FunctionComponent<IUIRowProps> = props => {
  return <UIRowView {...props} />;
};

export default UIRow;
