import { useState } from 'react';
import styled from 'styled-components';
import RegexOptionsForm from './RegexOptionsForm';

const App = () => {
  const [params, setParams] = useState({
    exampleString: '',
    characters: '',
    includeCharacters: false,
    isGlobal: false,
    isCaseInsensitive: false,
    isStart: false,
    isEnd: false,
    onlyNumbers: false,
    onlyLetters: false,
  });

  return (
    <div>
      <Header></Header>
      <Main>
        <RegexOptionsForm params={params} setParams={setParams} />
      </Main>
    </div>
  );
};

const Header = styled.header``;

const Main = styled.main``;

export default App;
