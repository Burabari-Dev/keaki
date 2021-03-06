import TopBar from '../../../../components/ui/TopBar/TopBar';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('TopBar', () => {
  beforeEach(() => {
    render(<TopBar/>)
  });

  test('Should render Logo', () => {
    const logo = screen.queryByTestId('logo-main');
    expect(logo).toBeInTheDocument();
  });

  test('Should render Search-Bar', () => {
    const searchBar = screen.queryByPlaceholderText('What are you looking for?');
    expect(searchBar).toBeInTheDocument();
  })

  test('Should render Cart', () => {
    const cart = screen.queryByTestId('cart');
    expect(cart).toBeInTheDocument();
  })

  test('Should render Account component', () => {
    const acctComp = screen.queryByText('Sign In');
    expect(acctComp).toBeInTheDocument();
  })
})
