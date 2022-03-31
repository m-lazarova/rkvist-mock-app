import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import MainNavigation from './MainNavigation';
import {  MemoryRouter  } from "react-router-dom";

describe('MainNavigation', () => {
  describe('should render text', () => {
    const textStrings = [
      'RKVST',
      'All Assets',
    ];

    it.each(textStrings)('%s correctly', (textString) => {
      render(<MemoryRouter  initialEntry='/'>
          <MainNavigation />
        </MemoryRouter >);
      
      const str = screen.getByText(textString);
      expect(str).toBeInTheDocument();
    });
  });
});