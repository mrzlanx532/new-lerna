import { isOdd } from 'demo-is-odd'

export function isEven(n: number): boolean {

  console.log('Test')

  return !isOdd(n)
}