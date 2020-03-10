import { getTag } from 'internal/get-tag'

export function isNumber(value: any): boolean {
  return getTag(value) === '[object Number]'
}
