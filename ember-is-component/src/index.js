import { assert } from '@ember/debug';

export default function isComponent(owner, componentName) {
  assert(
    'You must pass a owner to isComponent (isComponent checks if the owner you pass has a factory for the given component)',
    owner
  );
  assert(
    'You must pass a component name to isComponent (isComponent checks if the passed owner has a factory for the given component)',
    componentName
  );

  return Boolean(owner.factoryFor(`component:${componentName}`));
}
