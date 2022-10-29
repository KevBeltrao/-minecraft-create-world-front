import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Click behaviour', () => {
  it('Should call onClick when button it is enabled', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Test button</Button>);

    const button = screen.getByText('Test button');
    userEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  it('Should call onClick when button it is disabled', () => {
    const onClick = jest.fn();
    render(
      <Button disabled onClick={onClick}>
        Test button
      </Button>,
    );

    const button = screen.getByText('Test button');
    userEvent.click(button);

    expect(onClick).not.toHaveBeenCalled();
  });
});
