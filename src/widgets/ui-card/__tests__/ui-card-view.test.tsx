import React from 'react';
import {Text} from 'react-native';
// import {fireEvent, render} from '@testing-library/react-native';

import {render} from '@store/util/test.util';
import UICardView from '../ui-card-view';

describe('ui-card-view', () => {
  test('test component', () => {
    const {getByText} = render(
      <UICardView>
        <Text>ui card</Text>
      </UICardView>,
      {
        preloadedState: {
          entities: {},
        },
      },
    );

    expect(getByText('ui card').props.children).toBe('ui card');
  });
});
