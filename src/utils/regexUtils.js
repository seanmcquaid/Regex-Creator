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
    return '[0-9]';
  }
  if (onlyLetters) {
    return '[a-zA-Z]+';
  }
  if (isStart) {
    return '^';
  }
  if (isEnd) {
    return '$';
  }
  return '';
};

export const addPatternModifier = (
  isGlobal = false,
  isCaseInsensitive = false,
) => {};
