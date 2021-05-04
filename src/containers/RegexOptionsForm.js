import propTypes from 'prop-types';
import styled from 'styled-components';
import { Input } from 'react-flexible-components';

const RegexOptionsForm = ({ params, setParams }) => {
  const onChange = (event) => {
    setParams((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <Form>
      <Input
        onChange={onChange}
        name="exampleString"
        label="Hello"
        value={params.exampleString}
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
