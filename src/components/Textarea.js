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

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTextarea = styled.textarea`
  padding: 0.5rem;
  margin: 0.5rem;
`;

Textarea.propTypes = {
  onChange: propTypes.func,
  value: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  readOnly: propTypes.bool,
};

export default Textarea;
