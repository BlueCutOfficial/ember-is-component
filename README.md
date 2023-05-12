ember-is-component
==============================================================================

Provides a helper to check if a component exists.


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.28 or above
* Embroider or ember-auto-import v2


Installation
------------------------------------------------------------------------------

```
ember install ember-is-component
```


Usage
------------------------------------------------------------------------------

This addon provides a helper that checks if a component exists. A component _exists_ if a factory for it is found in the helper's owner.

`is-component` helper is useful if your context makes the existence of a component uncertain (for instance if the name is generated dynamically or if a dependency may or may not provide it...) and you want to check the component's existence before instantiating it safely.

```hbs
{{#if (is-component "my-component")}}
  <MyComponent />
{{else}}
  <p>MyComponent was not found.</p>
{{/if}}
```


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
