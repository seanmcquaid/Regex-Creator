import { createRegex, addPatternModifier } from '../../utils/regexUtils';

describe('regexUtils', () => {
  describe('createRegex', () => {});

  describe('addPatternModifier', () => {
    it('isGlobal flag', () => {
      expect(addPatternModifier(true, false)).toEqual('g');
    });

    it('isCaseInsensitive flag', () => {
      expect(addPatternModifier(false, true)).toEqual('i');
    });
  });
});
