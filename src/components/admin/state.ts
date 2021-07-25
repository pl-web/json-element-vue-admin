import V from '@/mixins/v'

export default interface AdminState extends V {
  type: string,
  state?: any
}