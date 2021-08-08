export const getRandomElement = <T>(elements: T[]): T =>
  elements[Math.floor(Math.random() * elements.length)]
