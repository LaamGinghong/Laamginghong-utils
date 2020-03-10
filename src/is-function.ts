import { getTag } from 'internal/get-tag'

export function isFunction(value: any): boolean {
  return getTag(value) === '[object Function]'
}
