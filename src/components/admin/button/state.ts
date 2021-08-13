import BaseSate from '../../base/state';
export default interface ButtonState extends BaseSate {
  label?: string
  size?: string
  type?: string
  plain?: boolean
  round?: boolean
  circle?: boolean
  loading?: boolean
  disabled?: boolean
  icon?: string
  autofocus?: boolean
  nativeType?: string
  value?: any
  action?: string
  data?: any
  tip?: any
}
