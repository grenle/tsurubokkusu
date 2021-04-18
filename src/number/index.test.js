import * as num from './index.js'
import {jest} from '@jest/globals'

describe('lt', () => {
    test('lt 0 1 = true', () => {
        expect(num.lt(0, 1)).toBe(true)
    })
    test('lt 1 1 = false', () => {
        expect(num.lt(1, 1)).toBe(false)
    })
    test('lt 2 1 = false', () => {
        expect(num.lt(2, 1)).toBe(false)
    })
})


describe('lte', () => {
    test('lte 0 1 = true', () => {
        expect(num.lte(0, 1)).toBe(true)
    })
    test('lte 1 1 = true', () => {
        expect(num.lte(1, 1)).toBe(true)
    })
    test('lte 2 1 = false', () => {
        expect(num.lte(2, 1)).toBe(false)
    })
})


describe('gt', () => {
    test('gt 0 1 = false', () => {
        expect(num.gt(0, 1)).toBe(false)
    })
    test('gt 1 1 = false', () => {
        expect(num.gt(1, 1)).toBe(false)
    })
    test('gt 2 1 = true', () => {
        expect(num.gt(2, 1)).toBe(true)
    })
})


describe('gte', () => {
    test('gte 0 1 = false', () => {
        expect(num.gte(0, 1)).toBe(false)
    })
    test('gte 1 1 = true', () => {
        expect(num.gte(1, 1)).toBe(true)
    })
    test('gte 2 1 = true', () => {
        expect(num.gte(2, 1)).toBe(true)
    })
})


describe('ADD', () => {
    test('ADD 3 2 = 5', () => {
        expect(num.ADD(3, 2)).toBe(5)
    })
})


describe('SUB', () => {
    test('SUB 9 2 = 7', () => {
        expect(num.SUB(9,2)).toBe(7)
    })
})


describe('MUL', () => {
    test('MUL 3 2 = 6', () => {
        expect(num.MUL(3,2)).toBe(6)
    })
})


describe('DIV', () => {
    test('DIV 5 2 = 2.5', () => {
        expect(num.DIV(5,2)).toBe(2.5)
    })
})