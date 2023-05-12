import Component from '@glimmer/component';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, setupOnerror } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | is-component', function (hooks) {
  setupRenderingTest(hooks);

  class FakeComponent extends Component {
    fakeProperty = 'Some property';
  }

  test('it returns true if the given component exists', async function (assert) {
    this.owner.register('component:fake-component', FakeComponent);
    await render(hbs`
      {{#if (is-component "fake-component")}}
        <p>FakeComponent can be instantiated.</p>
      {{/if}}
    `);
    assert.dom('p').hasText('FakeComponent can be instantiated.');
  });

  test('it returns false if the given component does not exist', async function (assert) {
    await render(hbs`
      {{#unless (is-component "unknown-component")}}
        <p>UknownComponent is not registered.</p>
      {{/unless}}
    `);
    assert.dom('p').hasText('UknownComponent is not registered.');
  });

  test('it throws if no component name is passed', async function (assert) {
    assert.expect(1);
    setupOnerror((error) => {
      assert.ok(
        error.message.includes('You must pass a component name to isComponent'),
        'should display the expected assert message'
      );
    });

    await render(hbs`{{is-component}}`);
    setupOnerror();
  });
});
