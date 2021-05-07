import { useEffect, useState } from 'react';
import { createRegex } from '../utils/regexUtils';

const useRegex = (params) => {
  const [regexInfo, setRegexInfo] = useState({
    regex: '',
    flags: '',
  });

  useEffect(() => {
    setRegexInfo(createRegex(params));
  }, [params]);

  return regexInfo;
};

export default useRegex;
