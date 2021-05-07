import { useState } from 'react';
import styled from 'styled-components';
import { H1 } from '../components';
import useRegex from '../hooks/useRegex';
import RegexOptionsForm from './RegexOptionsForm';
import RegexResult from './RegexResult';

const App = () => {
  const [params, setParams] = useState({
    exampleString: '',
    characters: '',
    excludeCharacters: false,
    isStart: false,
    isEnd: false,
    onlyNumbers: false,
    onlyLetters: false,
  });
  const regex = useRegex(params);

  return (
    <div>
      <Header>
        <H1>Regex Creator</H1>
      </Header>
      <Main>
        <RegexOptionsForm params={params} setParams={setParams} />
        <RegexResult regex={regex} exampleString={params.exampleString} />
      </Main>
    </div>
  );
};

const Header = styled.header``;

const Main = styled.main``;

export default App;
