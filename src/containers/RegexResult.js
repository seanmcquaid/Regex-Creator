import propTypes from 'prop-types';
import styled from 'styled-components';
import { Textarea } from '../components';

const RegexResult = ({ regex, exampleString }) => {
  const newRegex = new RegExp(regex, 'igm');
  const includedChars = exampleString.match(newRegex) ?? [];

  return (
    <RegexResultContainer>
      <Regex>{`/${regex}/igm`}</Regex>
      <Textarea
        value={exampleString}
        name="exampleStringRegexResult"
        readOnly={true}
        label="Example String Regex Result"
      />
      <div>
        {exampleString.split('').map((char) => {
          if (includedChars.includes(char)) {
            return (
              <HighlightedChar data-testid="highlightedChar">
                {char}
              </HighlightedChar>
            );
          }
          return char;
        })}
      </div>
    </RegexResultContainer>
  );
};

const RegexResultContainer = styled.div``;

const Regex = styled.span``;

const HighlightedChar = styled.span`
  color: red;
`;

RegexResult.propTypes = {
  regex: propTypes.string.isRequired,
  exampleString: propTypes.string.isRequired,
};

export default RegexResult;
