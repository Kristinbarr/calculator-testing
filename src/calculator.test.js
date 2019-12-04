import { add, subtract } from './calculator'

describe('calculator.js', () => {
  describe('add()', () => {
    it('should the sum of two number arguments', () => {
      expect(add(2, 3)).toBe(5)
    })
    it('should handle one argument', () => {
      expect(add(4)).toBe(4)
    })
    it('should handle negative numbers', () =>{
      expect(add(-3, 8)).toBe(5)
    })
  })

  describe('subtract()', () => {
    it('should be a defined function', () => {
      expect(typeof subtract).toBe('function')
    })
    it('should subtract the number argument from the second argument',  () => {
      expect(subtract(4,2)).toBe(2)
    })
  })
})
