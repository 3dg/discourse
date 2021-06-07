import { addPretenderCallback } from "discourse/tests/helpers/qunit-helpers";
import componentTest from "discourse/tests/helpers/component-test";
import { moduleForComponent } from "ember-qunit";
import { warn } from "@ember/debug";

export function moduleForWidget(name, options = {}) {
  warn(
    "moduleForWidget will not work in the Ember CLI environment. Please upgrade your tests.",
    { id: "module-for-widget" }
  );
  return;

  let fullName = `widget:${name}`;
  addPretenderCallback(fullName, options.pretend);

  moduleForComponent(
    name,
    fullName,
    Object.assign(
      { integration: true },
      { beforeEach: options.beforeEach, afterEach: options.afterEach }
    )
  );
}

export function widgetTest(name, opts) {
  return componentTest(name, opts);
}
