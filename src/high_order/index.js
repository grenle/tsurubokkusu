import {shortestLengthA, arelatStar} from '../collection/index.js'

/**
 * Like Array.prototype.map, BUT works on `[new]
 * Array(<length>)`
 * @param {Function} f 
 * @param {Array} xs 
 */
export function map(f, xs){
    var l = xs.length
    var i = 0
    var res = new Array(l)
    for(i; i < l; i++){
        res[i] = f(xs[i], i, xs)
    }
    return res;
}


/**
 * Scheme's version of map, no i passed to f
 * but variable number of arrays
 * 
 * skimap(f, [α0 ... αn]...[ω0 ... ωn]) =>
 * [f(α0 ... ω0) ... (αn ... ωn)]
 * @param {Function} f - A function.
 * @param {...*} arr - <array>+.
 */
export function schemap(f, arr){
    if(!arr){ return [] }
    let args = Array.from(arguments).slice(1)
    let l = shortestLengthA(args)
    let res = new Array(l)
    let i = 0
    for (i; i < l; i++) {
        res[i] = f.apply(null, arelatStar(i).apply(null, args))
    }
    return res
}