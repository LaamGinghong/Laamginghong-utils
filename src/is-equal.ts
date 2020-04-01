import { equalArray, equalObject } from '../internal/equal'
import { isArray } from './is-array'
import { isObject } from './is-object'

export function isEqual(value: any, other: any): boolean {
  if (isArray(value) && isArray(other)) {
    return equalArray(value, other)
  }
  if (isObject(value) && isObject(other)) {
    return equalObject(value, other)
  }
  return value === other
}
