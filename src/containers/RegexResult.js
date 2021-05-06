import propTypes from 'prop-types';
import styled from 'styled-components';
import { Textarea } from '../components';

const RegexResult = ({ regex, exampleString }) => (
  <RegexResultContainer>
    <Regex>{regex}</Regex>
    <Textarea
      value={exampleString}
      name="exampleStringRegexResult"
      readOnly={true}
      label="Example String Regex Result"
    />
  </RegexResultContainer>
);

const RegexResultContainer = styled.div``;

const Regex = styled.span``;

RegexResult.propTypes = {
  regex: propTypes.string.isRequired,
  exampleString: propTypes.string.isRequired,
};

export default RegexResult;
