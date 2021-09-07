import BaseState from '../../base/state';

export default interface AdminComponentState extends BaseState {
  type: string // components type > exemple: Button ButtonGroup Input ...
  state: any // components state
};
