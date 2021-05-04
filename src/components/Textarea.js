import propTypes from 'prop-types';
import styled from 'styled-components';

const Textarea = ({ onChange, value, name, label }) => (
  <StyledLabel htmlFor={name}>
    {label}
    <StyledTextarea
      value={value}
      type="text"
      name={name}
      onChange={onChange}
      data-testid={`${name}Textarea`}
    />
  </StyledLabel>
);

const StyledLabel = styled.label``;

const StyledTextarea = styled.textarea``;

Textarea.propTypes = {
  onChange: propTypes.func.isRequired,
  value: propTypes.bool.isRequired,
  name: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
};

export default Textarea;
