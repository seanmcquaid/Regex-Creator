import propTypes from 'prop-types';
import styled from 'styled-components';
import { TextInput, Checkbox } from '../components';

const RegexOptionsForm = ({ params, setParams }) => {
  const onChange = (event) => {
    const booleanFields = Object.keys(params).filter(
      (param) => typeof params[param] === 'boolean',
    );
    setParams((prevState) => ({
      ...prevState,
      [event.target.name]: booleanFields.includes(event.target.name)
        ? event.target.checked
        : event.target.value,
    }));
  };

  return (
    <Form>
      <TextInput
        onChange={onChange}
        name="characters"
        label="Characters"
        value={params.characters}
        type="text"
      />
      <Checkbox
        onChange={onChange}
        name="isGlobal"
        label="Global"
        checked={params.isGlobal}
      />
    </Form>
  );
};

const Form = styled.form``;

RegexOptionsForm.propTypes = {
  params: propTypes.object.isRequired,
  setParams: propTypes.func.isRequired,
};

export default RegexOptionsForm;
