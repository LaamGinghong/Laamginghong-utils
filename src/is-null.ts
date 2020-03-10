import { getTag } from 'internal/get-tag'

export function isNull(value: any): boolean {
  return getTag(value) === '[object Null]'
}
