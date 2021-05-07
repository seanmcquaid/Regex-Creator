import { createRegex, getFlags } from '../../utils/regexUtils';

describe('regexUtils', () => {
  describe('createRegex', () => {
    it('onlyNumbers', () => {
      const result = createRegex({
        characters: '',
        includeCharacters: false,
        isGlobal: false,
        isCaseInsensitive: false,
        isStart: false,
        isEnd: false,
        onlyNumbers: true,
        onlyLetters: false,
      });

      expect(result).toEqual({
        regex: '[0-9]',
        flags: '',
      });
    });

    it('onlyLetters', () => {
      const result = createRegex({
        characters: '',
        includeCharacters: false,
        isGlobal: false,
        isCaseInsensitive: false,
        isStart: false,
        isEnd: false,
        onlyNumbers: false,
        onlyLetters: true,
      });

      expect(result).toEqual({ regex: '[a-zA-Z]+', flags: '' });
    });

    it('isStart', () => {
      const result = createRegex({
        characters: '',
        includeCharacters: false,
        isGlobal: false,
        isCaseInsensitive: false,
        isStart: true,
        isEnd: false,
        onlyNumbers: false,
        onlyLetters: false,
      });

      expect(result).toEqual({ regex: '^', flags: '' });
    });

    it('isEnd', () => {
      const result = createRegex({
        characters: '',
        includeCharacters: false,
        isGlobal: false,
        isCaseInsensitive: false,
        isStart: false,
        isEnd: true,
        onlyNumbers: false,
        onlyLetters: false,
      });

      expect(result).toEqual({ regex: '$', flags: '' });
    });

    it('includeCharacters', () => {
      const result = createRegex({
        characters: 'hello',
        includeCharacters: true,
        isGlobal: false,
        isCaseInsensitive: false,
        isStart: false,
        isEnd: false,
        onlyNumbers: false,
        onlyLetters: false,
      });

      expect(result).toEqual({ regex: '[hello]', flags: '' });
    });

    it('excludeCharacters', () => {
      const result = createRegex({
        characters: 'hello',
        includeCharacters: false,
        isGlobal: false,
        isCaseInsensitive: false,
        isStart: false,
        isEnd: false,
        onlyNumbers: false,
        onlyLetters: false,
      });

      expect(result).toEqual({ regex: '[^hello]', flags: '' });
    });
  });
});
