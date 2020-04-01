import { getTag } from '../internal/get-tag'

export function isBoolean(value: any): boolean {
  return getTag(value) === '[object Boolean]'
}
