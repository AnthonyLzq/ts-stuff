/* eslint-disable prefer-const */
import { faker } from '@faker-js/faker'

const getSuffix = () => {
  return Math.random() > 0.5 ? faker.person.suffix() : null
}

let suffix: string | null = getSuffix()

if (suffix) {
  // This will work
  const example1 = 'Jane' + suffix.toUpperCase()
  console.log('🚀 ~ file: 05-temporal-uncertainty.ts:13 ~ example1:', example1)

  // This does not, because a callback can be executed at any time, and the
  // value of `suffix` may have changed by then.
  // ;['Jane', 'John'].forEach(name => {
  //   const example2 = name + suffix.toUpperCase()
  //   console.log(
  //     '🚀 ~ file: 05-temporal-uncertainty.ts:14 ~ example2:',
  //     example2
  //   )
  // })
}

// Second example:
// let suffix2: string | null = getSuffix()

// In this case, we know that `suffix` will be null, so we can't safely use it.
// if (suffix2)
//   setTimeout(() => {
//     console.log(
//       '🚀 ~ file: 05-temporal-uncertainty.ts:32 ~ suffix2.toUpperCase():',
//       suffix2.toUpperCase()
//     )
//   }, 1000)

// suffix2 = null

// The way to fix this is to use a local variable that is guaranteed to be
// stable.

// Third example:
let suffix3: string | null = getSuffix()

if (suffix3) {
  const suffix3UpperCase = suffix3.toUpperCase()
  ;['Jane', 'John'].forEach(name => {
    const example3 = name + suffix3UpperCase
    console.log(
      '🚀 ~ file: 05-temporal-uncertainty.ts:50 ~ example3:',
      example3
    )
  })
}
