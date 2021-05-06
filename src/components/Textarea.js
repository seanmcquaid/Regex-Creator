import propTypes from 'prop-types';
import styled from 'styled-components';

const Textarea = ({ onChange, value, name, label, readOnly }) => (
  <StyledLabel htmlFor={name}>
    {label}
    <StyledTextarea
      value={value}
      type="text"
      name={name}
      onChange={onChange}
      data-testid={`${name}Textarea`}
      readOnly={readOnly}
    />
  </StyledLabel>
);

const StyledLabel = styled.label``;

const StyledTextarea = styled.textarea``;

Textarea.propTypes = {
  onChange: propTypes.func,
  value: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  readOnly: propTypes.boolean,
};

export default Textarea;
