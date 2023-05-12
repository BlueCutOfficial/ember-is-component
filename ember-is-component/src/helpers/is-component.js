import { getOwner } from '@ember/application';
import Helper from '@ember/component/helper';
import isComponentFunction from '../index';

export default class IsComponent extends Helper {
  compute([componentName]) {
    return isComponentFunction(getOwner(this), componentName);
  }
}
