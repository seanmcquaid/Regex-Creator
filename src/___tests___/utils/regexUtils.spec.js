import { createRegex, addPatternModifier } from '../../utils/regexUtils';

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

      expect(result).toEqual('/[0-9]/');
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

      expect(result).toEqual('/[a-zA-Z]+/');
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

      expect(result).toEqual('/^/');
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

      expect(result).toEqual('/$/');
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

      expect(result).toEqual('/[hello]/');
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

      expect(result).toEqual('/[^hello]/');
    });
  });

  describe('addPatternModifier', () => {
    it('isGlobal flag', () => {
      expect(addPatternModifier(true, false)).toEqual('g');
    });

    it('isCaseInsensitive flag', () => {
      expect(addPatternModifier(false, true)).toEqual('i');
    });

    it('Both isGlobal and isCaseInsensitive flag', () => {
      expect(addPatternModifier(true, true)).toEqual('gi');
    });
  });
});
