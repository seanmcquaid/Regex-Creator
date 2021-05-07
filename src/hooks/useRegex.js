import { useEffect, useState } from 'react';
import { createRegex } from '../utils/regexUtils';

const useRegex = (params) => {
  const [regex, setRegex] = useState('');

  useEffect(() => {
    setRegex(createRegex(params));
  }, [params]);

  return regex;
};

export default useRegex;
