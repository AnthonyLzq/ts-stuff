// Run: npx ts-node src/01-function-overload.ts
function reverse(string: string): string
function reverse(array: string[]): string[]
function reverse(stringOrArray: string | string[]) {
  if (typeof stringOrArray === 'string')
    return stringOrArray.split('').reverse().join('')

  return stringOrArray.slice().reverse()
}

const olleh = reverse('hello')
console.log('🚀 ~ file: 01-function-overload.ts:12 ~ olleh:', olleh)

const ollehArray = reverse(['h', 'e', 'l', 'l', 'o'])
console.log('🚀 ~ file: 01-function-overload.ts:14 ~ ollehArray:', ollehArray)

function makeDate(timeStamp: number): Date
function makeDate(year: number, month: number, day: number): Date
function makeDate(timeStampOrYear: number, month?: number, day?: number) {
  if (month !== undefined && day !== undefined)
    return new Date(timeStampOrYear, month, day)

  return new Date(timeStampOrYear)
}

const date = makeDate(1234567890)
console.log('🚀 ~ file: 01-function-overload.ts:27 ~ date:', date)

const date2 = makeDate(2021, 1, 1)
console.log('🚀 ~ file: 01-function-overload.ts:30 ~ date2:', date2)

// The following will not compile:
// const date3 = makeDate(2021, 1)
