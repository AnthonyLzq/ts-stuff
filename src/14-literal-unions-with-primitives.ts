// eslint-disable-next-line @typescript-eslint/ban-types
type Padding = 'small' | 'medium' | 'large' | (string & {})
// This is a way to create a union of string literals and string types.
// Adding the (string & {}) type to the union will allow any string to be
// accepted, but it will still be a string literal type.

function getPadding(padding: Padding) {
  if (padding === 'small') return '12px'
  if (padding === 'medium') return '16px'
  if (padding === 'large') return '24px'

  return padding
}

let padding: Padding
padding = getPadding('small')
padding = getPadding('medium')
padding = getPadding('12px')
console.log(
  '🚀 ~ file: 14-literal-unions-with-primitives.ts:16 ~ padding:',
  padding
)
