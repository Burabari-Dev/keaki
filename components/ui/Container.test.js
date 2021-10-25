import React from 'react';
import { render, screen } from "@testing-library/react";
import Container from './Container';

describe('Renders Container', () => {
  test('Jest knows maths', () => {
    render(<Container/>);
    // const heading = screen.getBy  //TODO
    expect(1+1).toBe(2);
  })
});
