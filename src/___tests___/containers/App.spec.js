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
});
