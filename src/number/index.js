//@ts-check

/**
 * '<' operator as function
 * @param {Number|String} x 
 * @param {Number|String} y 
 * @returns {Boolean}
 */
export const lt = (x, y) => x < y

/**
  * '>' operator as function
  * @param {Number|String} x 
  * @param {Number|String} y 
  * @returns  {Boolean}
  */
export const gt = (x, y) => x > y 

/**
 * '<=' operator as function
 * @param {Number|String} x 
 * @param {Number|String} y 
 * @returns {Boolean}
 */
 export const lte = (x, y) => x <= y

 /**
   * '>=' operator as function
   * @param {Number|String} x 
   * @param {Number|String} y 
   * @returns  {Boolean}
   */
 export const gte = (x, y) => x >= y 
 


/**
  * '+' operator as function
  * @param {Number} x 
  * @param {Number} y 
  * @returns {Number} 
  */
export const ADD = (x, y) => x + y

/**
  * '-' operator as function
  * @param {Number} x 
  * @param {Number} y 
  * @returns {Number}
  */
export const SUB = (x, y) => x - y

/**
  * '*' operator as function
  * @param {Number} x 
  * @param {Number} y 
  * @returns {Number} 
  */
export const MUL = (x, y) => x * y

/**
  * '/' operator as function
  * @param {Number} x 
  * @param {Number} y 
  * @returns {Number}
  */
export const DIV = (x, y) => x / y


/**
 * Number × Number -> Number -> Boolean
 *
 * Return a function returning a Boolean indicating wether n
 * is in [x, y)
 *
 * Like random and Python's range, x is inclusive and y is
 * exclusive
 * @param {Number} x 
 * @param {Number} y 
 * @returns {Function}
 */
export function between(x, y){
  /**
   * @param {Number} n 
   * @returns 
   */
  function _(n){
      return n >= x && n < y
  }
  return _
}
