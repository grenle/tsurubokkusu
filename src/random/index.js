//@ts-check

/**
 * Returns a random number between min (inclusive) and max
 * (exclusive)
 * @param {Number} min 
 * @param {Number} max 
 * @returns {Number}
 */
export function randRange(min, max){
    return Math.round(
        Math.random() * (max - min) + min
    )
}


/**
 * Returns a random number between min (inclusive) and max
 * (inclusive)
 * @param {Number} min 
 * @param {Number} max 
 * @returns {Number}
 */
export function randInt(min, max){
    return randRange(min, max + 1)
}


/**
 * Picks an random element from xs
 * @param {Array} xs 
 * @returns {*}
 */
export function pick(xs){
    return xs[randRange(0, xs.length)]
}
