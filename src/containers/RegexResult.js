import propTypes from 'prop-types';
import styled from 'styled-components';

const RegexResult = ({ regex, exampleString }) => {
  const newRegex = new RegExp(regex, 'igm');
  const includedChars = exampleString.match(newRegex) ?? [];

  return (
    <RegexResultContainer>
      <Regex>{`/${regex}/igm`}</Regex>
      <ExampleStringContainer>
        {exampleString
          .split('')
          .map((char) =>
            includedChars.includes(char) ? (
              <HighlightedChar data-testid="highlightedChar">
                {char}
              </HighlightedChar>
            ) : (
              char
            ),
          )}
      </ExampleStringContainer>
    </RegexResultContainer>
  );
};

const RegexResultContainer = styled.div``;

const Regex = styled.span``;

const ExampleStringContainer = styled.div``;

const HighlightedChar = styled.span`
  color: red;
`;

RegexResult.propTypes = {
  regex: propTypes.string.isRequired,
  exampleString: propTypes.string.isRequired,
};

export default RegexResult;
