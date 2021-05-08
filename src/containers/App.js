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
    <PageContainer>
      <Header>
        <H1>Regex Creator</H1>
      </Header>
      <Main>
        <RegexOptionsForm params={params} setParams={setParams} />
        <RegexResult regex={regex} exampleString={params.exampleString} />
      </Main>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Header = styled.header`
  height: 20%;
  display: flex;
  align-items: center;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80%;
`;

export default App;
