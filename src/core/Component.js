import {addEventBubblingListener} from "../utils";

export const Components = class {

  $state; $target; $props;

  constructor($target, $props) {
    this.$target = $target;
    this.$props = $props;
    this.componentInit();
    this.render();
    this.componentDidMount();
  }

  componentInit () {}
  componentDidMount () {}
  componentDidUpdate () {}
  template () {}
  render () {
    this.$target.innerHTML = this.template();
    this.componentDidUpdate();
  }

}