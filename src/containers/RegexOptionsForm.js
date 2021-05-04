import propTypes from 'prop-types';
import { useMemo } from 'react';
import styled from 'styled-components';
import { TextInput, Checkbox, Textarea } from '../components';

const RegexOptionsForm = ({ params, setParams }) => {
  const booleanFields = useMemo(
    () =>
      Object.keys(params).filter((param) => typeof params[param] === 'boolean'),
    [],
  );

  const onChange = (event) => {
    setParams((prevState) => ({
      ...prevState,
      [event.target.name]: booleanFields.includes(event.target.name)
        ? event.target.checked
        : event.target.value,
    }));
  };

  return (
    <Form>
      <TextInputsContainer>
        <Textarea
          onChange={onChange}
          name="exampleString"
          label="Example String"
          value={params.exampleString}
        />
        <TextInput
          onChange={onChange}
          name="characters"
          label="Characters"
          value={params.characters}
          type="text"
        />
      </TextInputsContainer>
      <CheckboxsContainer>
        <Checkbox
          onChange={onChange}
          name="includeCharacters"
          label="Include Characters"
          checked={params.includeCharacters}
        />
        <Checkbox
          onChange={onChange}
          name="isCaseInsensitive"
          label="Case Insensitive"
          checked={params.isCaseInsensitive}
        />
        <Checkbox
          onChange={onChange}
          name="isGlobal"
          label="Global"
          checked={params.isGlobal}
        />
        <Checkbox
          onChange={onChange}
          name="isStart"
          label="Start of String"
          checked={params.isStart}
        />
        <Checkbox
          onChange={onChange}
          name="isEnd"
          label="End of String"
          checked={params.isEnd}
        />
        <Checkbox
          onChange={onChange}
          name="onlyNumbers"
          label="Only Numbers"
          checked={params.onlyNumbers}
        />
        <Checkbox
          onChange={onChange}
          name="onlyLetters"
          label="Only Letters"
          checked={params.onlyLetters}
        />
      </CheckboxsContainer>
    </Form>
  );
};

const Form = styled.form``;

const TextInputsContainer = styled.div``;

const CheckboxsContainer = styled.div``;

RegexOptionsForm.propTypes = {
  params: propTypes.object.isRequired,
  setParams: propTypes.func.isRequired,
};

export default RegexOptionsForm;
