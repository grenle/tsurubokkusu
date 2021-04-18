import * as ar from './index.js'
import {jest} from '@jest/globals';


describe('arelat', () => {
    test('arelat(1)([0, "a"]) = "a"', () => {
        expect(ar.arelat(1)([0, 'a'])).toBe('a')
    })
    test('arelat(0)([0, 2, 4]) = 0', () => {
        expect(ar.arelat(0)([0, 2])).toBe(0)
    })
    test('arelat(1)([0, 2, 4]) = 2', () => {
        expect(ar.arelat(1)([0, 2, 4])).toBe(2)
    })
    test('arelat(2)([0, 2, 4]) = 4', () => {
        expect(ar.arelat(2)([0, 2, 4])).toBe(4)
    })
})


describe('arelatStar', () => {
    test('', () => {
        const f = ar.arelatStar(1)
        expect(f([0, 'a'])).toStrictEqual(['a'])
    })
    test('', () => {
        const f = ar.arelatStar(1)
        const xs = ['a', 'b', 'c']
        const ys = ['x', 'y', 'z']
        expect(f(xs, ys)).toStrictEqual(['b', 'y'])
    })
    test('', () => {
        const f = ar.arelatStar(2)
        const xs = ['a', 'b', 'c']
        const ys = ['x', 'y']
        expect(f(xs, ys)).toStrictEqual(['c', undefined])
    })
})


describe('lengthsA', () => {
    test('', () => {
        expect(ar.lengthsA()).toStrictEqual([])
    })
    test('', () => {
        expect(ar.lengthsA([])).toStrictEqual([])
    })
    test('', () => {
        expect(ar.lengthsA([[1]])).toStrictEqual([1])
    })
    test('slightly surprising', () => {
        expect(ar.lengthsA(['a'])).toStrictEqual([1])
    })
    test('', () => {
        const xs = ['a', 'b']
        const ys = [0]
        const zs = []
        expect(ar.lengthsA([xs, ys, zs])).toStrictEqual([2, 1, 0])
    })
})


describe('lengths', () => {
    test('', () => {
        expect(ar.lengths()).toStrictEqual([])
    })
    test('', () => {
        expect(ar.lengths([])).toStrictEqual([0])
    })
    test('', () => {
        expect(ar.lengths([1])).toStrictEqual([1])
    })
    test('slightly surprising', () => {
        expect(ar.lengths('a')).toStrictEqual([1])
    })
    test('', () => {
        const xs = ['a', 'b']
        const ys = [0]
        const zs = []
        expect(ar.lengths(xs, ys, zs)).toStrictEqual([2, 1, 0])
    })
})


describe('ngram', () => {
    test('', () => {
        expect(ar.ngram([])).toStrictEqual([])
    })
    test('', () => {
        expect(ar.ngram([2])).toStrictEqual([])
    })
    test('', () => {
        expect(ar.ngram([2, 4])).toStrictEqual([[2, 4]])
    })
    test('', () => {
        expect(ar.ngram([2, 4, 6]))
        .toStrictEqual([[2,4],[4,6]])
    })
    test('', () => {
        expect(ar.ngram([2, 4], 3)).toStrictEqual([])
    })
    test('', () => {
        expect(ar.ngram([2, 4, 5], 3))
        .toStrictEqual([[2, 4, 5]])
    })
    test('', () => {
        expect(ar.ngram([2, 4, 5, 6], 3))
        .toStrictEqual([[2, 4, 5], [4, 5, 6]])
    })
})


describe('range', () => {
    test('Nullary call => []', () => {
        expect(ar.range()).toStrictEqual([])
    })
    test('range(0)', () => {
        expect(ar.range(0)).toStrictEqual([])
    })
    test('range(7)', () => {
        const expected = [ 0, 1, 2, 3, 4, 5, 6 ]
        expect(ar.range(7)).toStrictEqual(expected)
    })
    test('range(1, 7)', () => {
        const expected = [ 1, 2, 3, 4, 5, 6 ]
        expect(ar.range(1, 7)).toStrictEqual(expected)
    })
    test('range(7, 1)', () => {
        expect(ar.range(7, 1)).toStrictEqual([])
    })
    test('range(1, 7, 0', () => {
        expect(ar.range(1, 7, 0)).toStrictEqual([])
    })
    test('range(1, 7, 3', () => {
        const expected = [ 1, 4 ]
        expect(ar.range(1, 7, 3)).toStrictEqual(expected)
    })
    test('range(1, 7, -1', () => {
        expect(ar.range(1, 7, -1)).toStrictEqual([])
    })
    test('range(7, 1, -1', () => {
        const expected = [ 7, 6, 5, 4, 3, 2 ]
        expect(ar.range(7, 1, -1)).toStrictEqual(expected)
    })
    test('range(7, 1, 1)', () => {
        expect(ar.range(7, 1, 1)).toStrictEqual([])
    })
})

/*
 describe('shortestLength', function(){
    it('f() => 0', function(){
      assert.strictEqual(mod.shortestLength(), 0);
    });
    it('f([]) => 0', function(){
      assert.strictEqual(mod.shortestLength( [] ), 0);
    });
    it('f( [ 6, 6, 6 ], [], [ 3 ] ) => 0', function(){
      assert.strictEqual(mod.shortestLength( [ 6, 6, 6 ], [], [ 3 ] ), 0);
    });
  });

  describe('shortestLengthA', function(){
    it('f() => 0', function(){
      assert.strictEqual(mod.shortestLengthA(), 0);
    });
    it('f([]) => 0', function(){
      assert.strictEqual(mod.shortestLengthA( [] ), 0);
    });
    it('f( [ [] ] ) => 0', function(){
      assert.strictEqual(mod.shortestLengthA( [ [] ] ), 0);
    });
    it('f( [ [ 6, 6, 6 ], [], [ 3 ] ] ) => 0', function(){
      assert.strictEqual(mod.shortestLengthA( [ [ 6, 6, 6 ], [], [ 3 ] ] ), 0);
    });
  });
*/