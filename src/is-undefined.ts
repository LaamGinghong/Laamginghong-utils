import { getTag } from '../internal/get-tag'

export function isUndefined(value: any): boolean {
  return getTag(value) === '[object Undefined]'
}
