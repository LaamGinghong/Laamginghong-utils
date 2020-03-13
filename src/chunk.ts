import { isNull } from './is-null'

export function chunk<T>(array: T[], size: number = 1): T[][] {
  if (isNull(array) || size < 1) {
    return []
  }
  const { length } = array
  let index = 0
  let resIndex = 0
  const result = new Array(Math.ceil(length / size))
  while (index < length) {
    result[resIndex++] = array.slice(index, (index += size))
  }
  return result
}
