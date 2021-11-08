import Footer, { copyWrightYear } from '../../../components/ui/Footer';
import { render, screen } from "@testing-library/react";

describe('Footer', () => {
  beforeEach(() => render(<Footer/>));

  test('Shows only one year if current year is same with start year', () => {
    const startYear = 2020;
    const currentYear = 2020;
    const copyYear = copyWrightYear(startYear, currentYear);
    expect(copyYear).toBe('2020');
  })

  test('Returns year range if current year is different from start year', () => {
    const startYear = 2020;
    const currentYear = 2025;
    const copyYear = copyWrightYear(startYear, currentYear);
    expect(copyYear).toBe('2020 - 2025');
  })
})