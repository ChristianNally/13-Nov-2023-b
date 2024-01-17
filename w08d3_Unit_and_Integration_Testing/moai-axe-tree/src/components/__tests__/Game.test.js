import React from 'react';
import Game from '../Game';
import { render, getByTestId, fireEvent } from '@testing-library/react';

describe('tests for the Game component', () => {

  test('toggle the cheating boolean by clicking on the robot head icon', () => {

		const {getByTestId} = render(<Game />);
		// const renderReturnValue = render(<Game />);
		// console.log('renderReturnValue', renderReturnValue);

    const robotHeadIcon = getByTestId('robot-head');

		// console.log('fireEvent', fireEvent);

    fireEvent.click(robotHeadIcon);

		// console.log('expect(robotHeadIcon)', expect(robotHeadIcon));

    expect(robotHeadIcon).toHaveClass('cheating');
    
    fireEvent.click(robotHeadIcon);

    expect(robotHeadIcon).not.toHaveClass('cheating');
  });

});
