import { isArray } from '../src/is-array'
import { isObject } from '../src/is-object'

function equalArray(array: any[], other: any[]): boolean {
  if (array.length !== other.length) {
    return false
  }
  let result = true
  let index = 0
  while (index < array.length) {
    if (array[index] !== other[index]) {
      if (isArray(array[index])) {
        result = equalArray(array[index], other[index])
        if (!result) {
          break
        }
      } else if (isObject(array[index])) {
        result = equalObject(array[index], other[index])
        if (!result) {
          break
        }
      } else {
        result = false
        break
      }
    }
    index = index + 1
  }
  return result
}

function equalObject(
  object: { [key: string]: any },
  other: { [key: string]: any },
): boolean {
  if (Object.keys(object).length !== Object.keys(other).length) {
    return false
  }
  const objectKeys = Object.keys(object)
  const otherKeys = Object.keys(other)
  const keysCorrect = objectKeys.every(item => otherKeys.includes(item))
  if (!keysCorrect) {
    return false
  }
  let result = true
  for (let i = 0; i < objectKeys.length; i = i + 1) {
    const item: string = objectKeys[i]
    if (object[item] !== other[item]) {
      if (isArray(object[item]) && isArray(other[item])) {
        result = equalArray(object[item], other[item])
        if (!result) {
          break
        }
      } else if (isObject(object[item]) && isObject(other[item])) {
        result = equalObject(object[item], other[item])
        if (!result) {
          break
        }
      } else {
        result = false
        break
      }
    }
  }
  return result
}

export { equalArray, equalObject }
