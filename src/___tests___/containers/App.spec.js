import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../../containers/App';

describe('<App/>', () => {
  describe('<RegexOptionsForm/>', () => {
    it('Boolean field becomes checked when clicked', () => {
      render(<App />);
      userEvent.click(screen.getByTestId('excludeCharactersCheckbox'));
      expect(
        screen.getByTestId('excludeCharactersCheckbox').checked,
      ).toBeTruthy();
    });

    it('Text field changes value when typed in', () => {
      render(<App />);
      userEvent.type(
        screen.getByTestId('exampleStringTextarea'),
        'Example here',
      );
      expect(screen.getByTestId('exampleStringTextarea').value).toEqual(
        'Example here',
      );
    });
  });

  describe('<RegexResult/>', () => {
    it('Highlighted Char displays when regex matches', () => {
      render(<App />);
      userEvent.type(screen.getByTestId('exampleStringTextarea'), 'Example');
      userEvent.type(screen.getByTestId('charactersTextInput'), 'a');
      expect(screen.queryAllByTestId('highlightedChar').length).toEqual(1);
    });

    it("No highlighted char displays when regex doesn't match", () => {
      render(<App />);
      userEvent.type(screen.getByTestId('exampleStringTextarea'), 'Example');
      userEvent.type(screen.getByTestId('charactersTextInput'), 'z');
      expect(screen.queryAllByTestId('highlightedChar').length).toEqual(0);
    });
  });
});
