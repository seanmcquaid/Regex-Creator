export const createRegex = ({
  characters = '',
  includeCharacters = false,
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

  return `[${includeCharacters ? '' : '^'}${characters}]`;
};
