import * as ho from './index.js'
import {ADD} from '../number/index.js'
import {jest} from '@jest/globals'


describe('map', () => {
    test('Array()', () => {
        expect(ho.map(x=>x, Array()))
        .toStrictEqual([])
    })
    test('Array(0)', () => {
        expect(ho.map(x=>x, Array(0)))
        .toStrictEqual([])
    })
    test('[]', () => {
        expect(ho.map(x=>x, [])).toStrictEqual([])
    })
    test('[2, 4]', () => {
        const dbl = x => x * 2
        expect(ho.map(dbl, [2, 4])).toStrictEqual([4, 8])
    })
})


describe('schemap', () => {
    test('no xs', () => {
        expect(ho.schemap(ADD)).toStrictEqual([])
    })
    test('schemap(ADD, []', () => {
        expect(ho.schemap(ADD, [])).toStrictEqual([])
    })
    test('schemap(ADD, [] []', () => {
        expect(ho.schemap(ADD, [], [])).toStrictEqual([])
    })
    test('schemap(ADD, [2, 4], []', () => {
        expect(ho.schemap(ADD, [2, 4], [])).toStrictEqual([])
    })
    test('schemap(ADD, [], [2, 4]', () => {
        expect(ho.schemap(ADD, [], [2, 4])).toStrictEqual([])
    })
    test('schemap(ADD, [6], [2, 4]', () => {
        expect(ho.schemap(ADD, [6], [2, 4])).toStrictEqual([8])
    })
    test('schemap(ADD, [6, 4], [2, 4]', () => {
        expect(ho.schemap(ADD, [6, 4], [2, 4])).toStrictEqual([8, 8])
    })
})


/**
 * TODO: add successor to `numbers` and use here
 * */
describe('conposerA', () => {
    const add1 = x => x + 1
    const halve = x => x / 2
    test('empty arg array => identity', () => {
        expect(ho.composerA([])).toStrictEqual(ho.I)
    })
    test('arg array of one function => that function', () => {
        expect(ho.composerA([ho.schemap])).toStrictEqual(ho.schemap)
    })
    test('composerA [Math.sqrt, x => x / 2]', () => {
        expect(ho.composerA([Math.sqrt, halve])(18)).toStrictEqual(3)
    })
    test('composerA [add1, halve]', () => {
        expect(ho.composerA([add1, halve])(8)).toStrictEqual(5)
    })
    test('composerA [halve, add1]', () => {
        expect(ho.composerA([halve, add1])(8)).toStrictEqual(4.5)
    })
})