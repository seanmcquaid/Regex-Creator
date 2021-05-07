import { createRegex } from '../../utils/regexUtils';

describe('regexUtils', () => {
  describe('createRegex', () => {
    it('onlyNumbers', () => {
      const result = createRegex({
        characters: '',
        excludeCharacters: false,
        isGlobal: false,
        isCaseInsensitive: false,
        isStart: false,
        isEnd: false,
        onlyNumbers: true,
        onlyLetters: false,
      });

      expect(result).toEqual('[0-9]');
    });

    it('onlyLetters', () => {
      const result = createRegex({
        characters: '',
        excludeCharacters: false,
        isGlobal: false,
        isCaseInsensitive: false,
        isStart: false,
        isEnd: false,
        onlyNumbers: false,
        onlyLetters: true,
      });

      expect(result).toEqual('[a-zA-Z]+');
    });

    it('isStart', () => {
      const result = createRegex({
        characters: '',
        excludeCharacters: false,
        isGlobal: false,
        isCaseInsensitive: false,
        isStart: true,
        isEnd: false,
        onlyNumbers: false,
        onlyLetters: false,
      });

      expect(result).toEqual('^');
    });

    it('isEnd', () => {
      const result = createRegex({
        characters: '',
        excludeCharacters: false,
        isGlobal: false,
        isCaseInsensitive: false,
        isStart: false,
        isEnd: true,
        onlyNumbers: false,
        onlyLetters: false,
      });

      expect(result).toEqual('$');
    });

    it('excludeCharacters', () => {
      const result = createRegex({
        characters: 'hello',
        excludeCharacters: true,
        isGlobal: false,
        isCaseInsensitive: false,
        isStart: false,
        isEnd: false,
        onlyNumbers: false,
        onlyLetters: false,
      });

      expect(result).toEqual('[^hello]');
    });

    it('include Characters', () => {
      const result = createRegex({
        characters: 'hello',
        excludeCharacters: false,
        isGlobal: false,
        isCaseInsensitive: false,
        isStart: false,
        isEnd: false,
        onlyNumbers: false,
        onlyLetters: false,
      });

      expect(result).toEqual('[hello]');
    });
  });
});
