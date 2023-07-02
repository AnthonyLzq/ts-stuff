type ColorString = 'red' | 'blue' | 'yellow' | 'purple'
type ColorRGB = [r: number, g: number, b: number]
type Color = ColorString | ColorRGB

type Theme = Record<string, Color>

const theme1: Theme = {
  primary: 'red',
  secondary: [255, 0, 0],
  tertiary: 'purpel' // This error is ok
}
const [r, g, b] = theme1.secondary
// Here we lost the inference of the type, since r, g, b are string | number,
// but we know that they are numbers, so we can use the satisfies keyword to
// tell the compiler that we want to create an object that satisfies the
// Theme type, but without losing the inference for each key.

const theme2 = {
  primary: 'red',
  secondary: [255, 0, 0],
  tertiary: 'purpel' // This error is ok
} satisfies Theme

const theme3 = {
  primary: 'red',
  secondary: [255, 0, 0],
  tertiary: 'purple'
} satisfies Theme
