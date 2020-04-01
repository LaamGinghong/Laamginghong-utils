import { getTag } from '../internal/get-tag'

export function isRegExp(value: any): boolean {
  return getTag(value) === '[object RegExp]'
}
