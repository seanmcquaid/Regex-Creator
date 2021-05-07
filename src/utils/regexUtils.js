export const createRegex = ({
  characters = '',
  includeCharacters = false,
  isGlobal = false,
  isCaseInsensitive = false,
  isStart = false,
  isEnd = false,
  onlyNumbers = false,
  onlyLetters = false,
}) => {
  if (onlyNumbers) {
    return {
      regex: '[0-9]',
      flags: '',
    };
  }
  if (onlyLetters) {
    return { regex: '[a-zA-Z]+', flags: '' };
  }
  if (isStart) {
    return { regex: '^', flags: '' };
  }
  if (isEnd) {
    return { regex: '$', flags: '' };
  }

  return {
    regex: `[${includeCharacters ? '' : '^'}${characters}]`,
    flags: getFlags(isGlobal, isCaseInsensitive),
  };
};

export const getFlags = (isGlobal = false, isCaseInsensitive = false) => {
  return `${isGlobal ? 'g' : ''}${isCaseInsensitive ? 'i' : ''}`;
};
