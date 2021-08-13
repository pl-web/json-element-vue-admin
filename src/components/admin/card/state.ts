import BaseSate from '../../base/state';
import ButtonState from '../button/state'
export default interface CardState extends BaseSate {
  show?: boolean // default true
  title?: string
  buttons: ButtonState[]
}
