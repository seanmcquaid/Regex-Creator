import propTypes from 'prop-types';
import styled from 'styled-components';

const Checkbox = ({ onChange, checked, name, label }) => (
  <StyledLabel htmlFor={name}>
    {label}
    <StyledCheckbox
      checked={checked}
      type="checkbox"
      name={name}
      onChange={onChange}
      data-testid={`${name}Checkbox`}
    />
  </StyledLabel>
);

const StyledLabel = styled.label``;

const StyledCheckbox = styled.input``;

Checkbox.propTypes = {
  onChange: propTypes.func.isRequired,
  checked: propTypes.bool.isRequired,
  name: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
};

export default Checkbox;
