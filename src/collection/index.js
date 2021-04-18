import {lt, gt} from '../number/index.js'

/**
 * The old name of Arles. Returns a function returning
 * the i-th element of Array argument.
 * 
 * `natural -> array -> element`
 * 
 * `arelat(1)([0,2]) -> 2`
 * 
 * @param {Number} i
 */
export function arelat(i){
    /**
     * * @param {Array} xs
     */
    const _ = xs => xs[i]
    return _
}

/**
 * The many parameter version of arelat
 * @param {Number} i
 */
export function arelatStar(i){
    /**
     * 
     * @param {...Array} xs
     * @returns 
     */
    var _ = function(xs){
        let args = Array.from(arguments)
        return args.map(arelat(i))
    }
    return _
}


/**
 * Array'd Lengths of arrays
 * lengths([ x0 ... xn ]) => [ x0.length ... xn.length ]
 * @param {Array} xs 
 * @returns {Number[]}
 */
export function lengthsA(xs){
    if(!xs){
        return []
    }
    return xs.map( x => x.length )
}


/**
 * Returns the length of the shortest array in xs
 * @todo investigate optimisation:
 * Loop through arrays and exit early on length 0
 * @param { ... Array} xs
 * @returns {Number}
 */
export function shortestLength(xs){
    xs = Array.from(arguments)
    if(!xs || !xs.length){
        return 0
    }
    return lengths(xs).sort()[0]
}


/**
 * Lengths of arrays
 * @todo change signature and tests to reflect possible use
 * with strings
 * lengths([ x0 ... xn ]) => [ x0.length ... xn.length ]
 * @param {...Array} args
 * @returns {Number[]}
 */
 export function lengths(args){
    const xs = Array.from(arguments)
    return lengthsA(xs)
}


/**
 * Array'd version of shortestLength
 * xs is array of arrays
 * Arguments object are one use case
 * Returns the length of the shortest array in xs
 * @param {Array.<*[]>} xs
 * @returns {Number}
 */
export function shortestLengthA(xs){
    if(!xs || !xs.length){
        return 0
    }
    return lengthsA(xs).sort()[0]
}



/**
 * @TODO coerce args to int or reject if not numeric even if
 * number-like?
 * @param {Number} from 
 * @param {Number=} to 
 * @param {Number=} step 
 */
export function range(from, to, step){
    let i
    let op
    let res = []
    // catches 0 and undefined
    if( !from ){ return [] }

    if( to === from ){ return [] }
    if( step === 0 ){ return [] }

    if( to === undefined ){
        to = from
        from = 0
    }

    if( step === undefined ){
        step = 1
    }

    if( from > to && step > 0 ){
        return []
    }
    if( from < to && step < 0){
        return []
    }

    i = from

    op = from > to ? gt : lt

    for(i; op(i, to); i += step){
        res.push(i)
    }

    return res
}

