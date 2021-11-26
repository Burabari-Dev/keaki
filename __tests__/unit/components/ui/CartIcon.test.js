import CartIcon from '../../../../components/ui/TopBar/CartIcon';
import { screen, render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('CartIcon', () => {
  test('ItemCount Badge is shown if item count is greater than 0', () => {
    const { unmount } = render(<CartIcon itemCount={5} />);
    const count = screen.queryByText('5');
    expect(count).toBeInTheDocument();
  })

  test('ItemCount Badge is not shown if item count is equal to or less than 0', () => {
    render(<CartIcon itemCount={0} />);
    const count = screen.queryByText('0');
    expect(count).not.toBeInTheDocument();
    
    cleanup();
    render(<CartIcon itemCount={-4} />);
    const countNeg = screen.queryByText('-4');
    expect(countNeg).not.toBeInTheDocument();
  })
})