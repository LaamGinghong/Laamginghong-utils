import { getTag } from 'internal/get-tag'

export function isArray(value: any): boolean {
  return getTag(value) === '[object Array]'
}
