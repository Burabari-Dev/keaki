import MainMenu from '../../../../components/ui/MainMenu';
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Menu_Items as data } from "../../../../../dev_data/data";

describe('Main-Menu', () => {
  beforeEach(() => render(<MainMenu data={data} />));
  afterEach(() => cleanup());

  test('Should render menu items', () => {
    const mainMenu = screen.queryByTestId('main-menu');
    expect(mainMenu).toBeInTheDocument();
  })

  test('Should show a "Phones" menu item based on data param', () => {
    const phones = screen.queryByText('Phones');
    expect(phones).toBeInTheDocument();
  })

  test('Should NOT show a "Money" menu item based on data param', () => {
    const phones = screen.queryByText('Money');
    expect(phones).not.toBeInTheDocument();
  })

  test('Should NOT show the "Sony" sub-menu item when Fashion menu ' +
    'is clicked based on test data param', () => {
      const fashion = screen.queryByText('Fashion');
      userEvent.click(fashion);
      const sonyMenu = screen.queryByText('Sony');
      expect(sonyMenu).not.toBeInTheDocument();
    })

  test('Should show the "Sony" sub-menu item when Phones menu ' +
    'is clicked based on test data param', () => {
      const phones = screen.queryByText('Phones');
      userEvent.click(phones);
      const sonyMenu = screen.queryByText('Sony');
      expect(sonyMenu).toBeInTheDocument();
    })
})
