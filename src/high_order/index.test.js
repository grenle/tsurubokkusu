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