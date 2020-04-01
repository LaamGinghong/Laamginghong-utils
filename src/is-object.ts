import { getTag } from '../internal/get-tag'

export function isObject(value: any): boolean {
  return getTag(value) === '[object Object]'
}
