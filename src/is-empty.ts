import { isArray } from './is-array'
import { isObject } from './is-object'

export function isEmpty(value: any): boolean {
  if (isArray(value)) {
    return !!(value as any[]).length
  }
  if (isObject(value)) {
    return !!Object.keys(value).length
  }
  return true
}
