import { getTag } from 'internal/get-tag'

export function isDate(value: any): boolean {
  return getTag(value) === '[object Date]'
}
