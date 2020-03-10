import { getTag } from 'internal/get-tag'

export function isString(value: any): boolean {
  return getTag(value) === '[object String]'
}
