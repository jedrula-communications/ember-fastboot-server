'use strict';

define('jedrula-app/tests/adapters/application.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | adapters/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass jshint.');
  });
});
define('jedrula-app/tests/app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('jedrula-app/tests/components/blog-post-form/component.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/blog-post-form/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/blog-post-form/component.js should pass jshint.');
  });
});
define('jedrula-app/tests/components/blog-post/component.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/blog-post/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/blog-post/component.js should pass jshint.');
  });
});
define('jedrula-app/tests/components/blog-posts-list/component.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/blog-posts-list/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/blog-posts-list/component.js should pass jshint.');
  });
});
define('jedrula-app/tests/components/page-menu/component.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/page-menu/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/page-menu/component.js should pass jshint.');
  });
});
define('jedrula-app/tests/components/page-toolbar/component.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/page-toolbar/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/page-toolbar/component.js should pass jshint.');
  });
});
define('jedrula-app/tests/components/responsibilities-list/component.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/responsibilities-list/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/responsibilities-list/component.js should pass jshint.');
  });
});
define('jedrula-app/tests/components/skills-list/component.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/skills-list/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/skills-list/component.js should pass jshint.\ncomponents/skills-list/component.js: line 29, col 2, Missing semicolon.\ncomponents/skills-list/component.js: line 38, col 8, Missing semicolon.\n\n2 errors');
  });
});
define('jedrula-app/tests/components/tag-form/component.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/tag-form/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/tag-form/component.js should pass jshint.');
  });
});
define('jedrula-app/tests/components/tags-multiselect/component.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/tags-multiselect/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/tags-multiselect/component.js should pass jshint.');
  });
});
define('jedrula-app/tests/components/user-form/component.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/user-form/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/user-form/component.js should pass jshint.');
  });
});
define('jedrula-app/tests/controllers/application.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass jshint.');
  });
});
define('jedrula-app/tests/controllers/blog.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/blog.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/blog.js should pass jshint.');
  });
});
define('jedrula-app/tests/controllers/post/index.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/post/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/post/index.js should pass jshint.\ncontrollers/post/index.js: line 9, col 21, \'computed\' is defined but never used.\n\n1 error');
  });
});
define('jedrula-app/tests/controllers/skills.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/skills.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/skills.js should pass jshint.');
  });
});
define('jedrula-app/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('jedrula-app/tests/helpers/destroy-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('jedrula-app/tests/helpers/ember-basic-dropdown', ['exports', 'ember', 'ember-runloop'], function (exports, _ember, _emberRunloop) {
  exports.nativeClick = nativeClick;
  exports.clickTrigger = clickTrigger;
  exports.tapTrigger = tapTrigger;
  exports.fireKeydown = fireKeydown;

  // integration helpers
  function focus(el) {
    if (!el) {
      return;
    }
    var $el = jQuery(el);
    if ($el.is(':input, [contenteditable=true]')) {
      var type = $el.prop('type');
      if (type !== 'checkbox' && type !== 'radio' && type !== 'hidden') {
        (0, _emberRunloop['default'])(null, function () {
          // Firefox does not trigger the `focusin` event if the window
          // does not have focus. If the document doesn't have focus just
          // use trigger('focusin') instead.

          if (!document.hasFocus || document.hasFocus()) {
            el.focus();
          } else {
            $el.trigger('focusin');
          }
        });
      }
    }
  }

  function nativeClick(selector) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var mousedown = new window.Event('mousedown', { bubbles: true, cancelable: true, view: window });
    var mouseup = new window.Event('mouseup', { bubbles: true, cancelable: true, view: window });
    var click = new window.Event('click', { bubbles: true, cancelable: true, view: window });
    Object.keys(options).forEach(function (key) {
      mousedown[key] = options[key];
      mouseup[key] = options[key];
      click[key] = options[key];
    });
    var element = document.querySelector(selector);
    (0, _emberRunloop['default'])(function () {
      return element.dispatchEvent(mousedown);
    });
    focus(element);
    (0, _emberRunloop['default'])(function () {
      return element.dispatchEvent(mouseup);
    });
    (0, _emberRunloop['default'])(function () {
      return element.dispatchEvent(click);
    });
  }

  function clickTrigger(scope) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var selector = '.ember-basic-dropdown-trigger';
    if (scope) {
      selector = scope + ' ' + selector;
    }
    nativeClick(selector, options);
  }

  function tapTrigger(scope) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var selector = '.ember-basic-dropdown-trigger';
    if (scope) {
      selector = scope + ' ' + selector;
    }
    var touchStartEvent = new window.Event('touchstart', { bubbles: true, cancelable: true, view: window });
    Object.keys(options).forEach(function (key) {
      return touchStartEvent[key] = options[key];
    });
    (0, _emberRunloop['default'])(function () {
      return document.querySelector(selector).dispatchEvent(touchStartEvent);
    });
    var touchEndEvent = new window.Event('touchend', { bubbles: true, cancelable: true, view: window });
    Object.keys(options).forEach(function (key) {
      return touchEndEvent[key] = options[key];
    });
    (0, _emberRunloop['default'])(function () {
      return document.querySelector(selector).dispatchEvent(touchEndEvent);
    });
  }

  function fireKeydown(selector, k) {
    var oEvent = document.createEvent('Events');
    oEvent.initEvent('keydown', true, true);
    $.extend(oEvent, {
      view: window,
      ctrlKey: false,
      altKey: false,
      shiftKey: false,
      metaKey: false,
      keyCode: k,
      charCode: k
    });
    (0, _emberRunloop['default'])(function () {
      return document.querySelector(selector).dispatchEvent(oEvent);
    });
  }

  // acceptance helpers

  exports['default'] = function () {
    _ember['default'].Test.registerAsyncHelper('clickDropdown', function (app, cssPath) {
      var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

      clickTrigger(cssPath, options);
    });

    _ember['default'].Test.registerAsyncHelper('tapDropdown', function (app, cssPath) {
      var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

      tapTrigger(cssPath, options);
    });
  };
});
define('jedrula-app/tests/helpers/ember-power-select', ['exports', 'jquery', 'ember-runloop', 'ember-test'], function (exports, _jquery, _emberRunloop, _emberTest) {
  exports.nativeMouseDown = nativeMouseDown;
  exports.nativeMouseUp = nativeMouseUp;
  exports.triggerKeydown = triggerKeydown;
  exports.typeInSearch = typeInSearch;
  exports.clickTrigger = clickTrigger;
  exports.nativeTouch = nativeTouch;
  exports.touchTrigger = touchTrigger;

  // Helpers for integration tests

  function typeText(selector, text) {
    var $selector = (0, _jquery['default'])((0, _jquery['default'])(selector).get(0)); // Only interact with the first result
    $selector.val(text);
    var event = document.createEvent('Events');
    event.initEvent('input', true, true);
    $selector[0].dispatchEvent(event);
  }

  function fireNativeMouseEvent(eventType, selectorOrDomElement) {
    var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    var event = undefined;
    try {
      event = new window.Event(eventType, { bubbles: true, cancelable: true, view: window });
    } catch (e) {
      // fix IE11: "Object doesn't support this action"
      event = document.createEvent('Event');
      var bubbles = true;
      var cancelable = true;
      event.initEvent(eventType, bubbles, cancelable);
    }

    Object.keys(options).forEach(function (key) {
      return event[key] = options[key];
    });
    var target = undefined;
    if (typeof selectorOrDomElement === 'string') {
      target = (0, _jquery['default'])(selectorOrDomElement)[0];
    } else {
      target = selectorOrDomElement;
    }
    (0, _emberRunloop['default'])(function () {
      return target.dispatchEvent(event);
    });
  }

  function nativeMouseDown(selectorOrDomElement, options) {
    fireNativeMouseEvent('mousedown', selectorOrDomElement, options);
  }

  function nativeMouseUp(selectorOrDomElement, options) {
    fireNativeMouseEvent('mouseup', selectorOrDomElement, options);
  }

  function triggerKeydown(domElement, k) {
    var oEvent = document.createEvent('Events');
    oEvent.initEvent('keydown', true, true);
    _jquery['default'].extend(oEvent, {
      view: window,
      ctrlKey: false,
      altKey: false,
      shiftKey: false,
      metaKey: false,
      keyCode: k,
      charCode: k
    });
    (0, _emberRunloop['default'])(function () {
      domElement.dispatchEvent(oEvent);
    });
  }

  function typeInSearch(text) {
    (0, _emberRunloop['default'])(function () {
      typeText('.ember-power-select-search-input, .ember-power-select-search input, .ember-power-select-trigger-multiple-input, input[type="search"]', text);
    });
  }

  function clickTrigger(scope) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var selector = '.ember-power-select-trigger';
    if (scope) {
      selector = scope + ' ' + selector;
    }
    nativeMouseDown(selector, options);
  }

  function nativeTouch(selectorOrDomElement) {
    var event = new window.Event('touchstart', { bubbles: true, cancelable: true, view: window });
    var target = undefined;

    if (typeof selectorOrDomElement === 'string') {
      target = (0, _jquery['default'])(selectorOrDomElement)[0];
    } else {
      target = selectorOrDomElement;
    }
    (0, _emberRunloop['default'])(function () {
      return target.dispatchEvent(event);
    });
    (0, _emberRunloop['default'])(function () {
      event = new window.Event('touchend', { bubbles: true, cancelable: true, view: window });
      target.dispatchEvent(event);
    });
  }

  function touchTrigger() {
    var selector = '.ember-power-select-trigger';
    nativeTouch(selector);
  }

  // Helpers for acceptance tests

  exports['default'] = function () {
    _emberTest['default'].registerAsyncHelper('selectChoose', function (app, cssPath, valueOrSelector) {
      var $trigger = find(cssPath + ' .ember-power-select-trigger');

      if ($trigger === undefined || $trigger.length === 0) {
        $trigger = find(cssPath);
      }

      if ($trigger.length === 0) {
        throw new Error('You called "selectChoose(\'' + cssPath + '\', \'' + valueOrSelector + '\')" but no select was found using selector "' + cssPath + '"');
      }

      var contentId = '' + $trigger.attr('aria-controls');
      var $content = find('#' + contentId);
      // If the dropdown is closed, open it
      if ($content.length === 0) {
        nativeMouseDown($trigger.get(0));
        wait();
      }

      // Select the option with the given text
      andThen(function () {
        var potentialTargets = (0, _jquery['default'])('#' + contentId + ' .ember-power-select-option:contains("' + valueOrSelector + '")').toArray();
        var target = undefined;
        if (potentialTargets.length === 0) {
          // If treating the value as text doesn't gave use any result, let's try if it's a css selector
          potentialTargets = (0, _jquery['default'])('#' + contentId + ' ' + valueOrSelector).toArray();
        }
        if (potentialTargets.length > 1) {
          target = potentialTargets.filter(function (t) {
            return t.textContent.trim() === valueOrSelector;
          })[0] || potentialTargets[0];
        } else {
          target = potentialTargets[0];
        }
        if (!target) {
          throw new Error('You called "selectChoose(\'' + cssPath + '\', \'' + valueOrSelector + '\')" but "' + valueOrSelector + '" didn\'t match any option');
        }
        nativeMouseUp(target);
      });
    });

    _emberTest['default'].registerAsyncHelper('selectSearch', function (app, cssPath, value) {
      var triggerPath = cssPath + ' .ember-power-select-trigger';
      var $trigger = find(triggerPath);
      if ($trigger === undefined || $trigger.length === 0) {
        triggerPath = cssPath;
        $trigger = find(triggerPath);
      }

      if ($trigger.length === 0) {
        throw new Error('You called "selectSearch(\'' + cssPath + '\', \'' + value + '\')" but no select was found using selector "' + cssPath + '"');
      }

      var contentId = '' + $trigger.attr('aria-controls');
      var isMultipleSelect = (0, _jquery['default'])(cssPath + ' .ember-power-select-trigger-multiple-input').length > 0;

      var dropdownIsClosed = (0, _jquery['default'])('#' + contentId).length === 0;
      if (dropdownIsClosed) {
        nativeMouseDown(triggerPath);
        wait();
      }
      var isDefaultSingleSelect = (0, _jquery['default'])('.ember-power-select-search-input').length > 0;

      if (isMultipleSelect) {
        fillIn(triggerPath + ' .ember-power-select-trigger-multiple-input', value);
      } else if (isDefaultSingleSelect) {
        fillIn('.ember-power-select-search-input', value);
      } else {
        // It's probably a customized version
        var inputIsInTrigger = !!find(cssPath + ' .ember-power-select-trigger input[type=search]')[0];
        if (inputIsInTrigger) {
          fillIn(triggerPath + ' input[type=search]', value);
        } else {
          fillIn('#' + contentId + ' .ember-power-select-search-input[type=search]', 'input');
        }
      }
    });

    _emberTest['default'].registerAsyncHelper('removeMultipleOption', function (app, cssPath, value) {
      var elem = find(cssPath + ' .ember-power-select-multiple-options > li:contains(' + value + ') > .ember-power-select-multiple-remove-btn').get(0);
      try {
        nativeMouseDown(elem);
        wait();
      } catch (e) {
        console.warn('css path to remove btn not found');
        throw e;
      }
    });

    _emberTest['default'].registerAsyncHelper('clearSelected', function (app, cssPath) {
      var elem = find(cssPath + ' .ember-power-select-clear-btn').get(0);
      try {
        nativeMouseDown(elem);
        wait();
      } catch (e) {
        console.warn('css path to clear btn not found');
        throw e;
      }
    });
  };
});
define('jedrula-app/tests/helpers/ember-simple-auth', ['exports', 'ember-simple-auth/authenticators/test'], function (exports, _emberSimpleAuthAuthenticatorsTest) {
  exports.authenticateSession = authenticateSession;
  exports.currentSession = currentSession;
  exports.invalidateSession = invalidateSession;

  var TEST_CONTAINER_KEY = 'authenticator:test';

  function ensureAuthenticator(app, container) {
    var authenticator = container.lookup(TEST_CONTAINER_KEY);
    if (!authenticator) {
      app.register(TEST_CONTAINER_KEY, _emberSimpleAuthAuthenticatorsTest['default']);
    }
  }

  function authenticateSession(app, sessionData) {
    var container = app.__container__;

    var session = container.lookup('service:session');
    ensureAuthenticator(app, container);
    session.authenticate(TEST_CONTAINER_KEY, sessionData);
    return wait();
  }

  ;

  function currentSession(app) {
    return app.__container__.lookup('service:session');
  }

  ;

  function invalidateSession(app) {
    var session = app.__container__.lookup('service:session');
    if (session.get('isAuthenticated')) {
      session.invalidate();
    }
    return wait();
  }

  ;
});
define('jedrula-app/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'jedrula-app/tests/helpers/start-app', 'jedrula-app/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _jedrulaAppTestsHelpersStartApp, _jedrulaAppTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _jedrulaAppTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _jedrulaAppTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('jedrula-app/tests/helpers/module-for-acceptance.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('jedrula-app/tests/helpers/resolver', ['exports', 'jedrula-app/resolver', 'jedrula-app/config/environment'], function (exports, _jedrulaAppResolver, _jedrulaAppConfigEnvironment) {

  var resolver = _jedrulaAppResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _jedrulaAppConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _jedrulaAppConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('jedrula-app/tests/helpers/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('jedrula-app/tests/helpers/start-app', ['exports', 'ember', 'jedrula-app/app', 'jedrula-app/config/environment'], function (exports, _ember, _jedrulaAppApp, _jedrulaAppConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    // use defaults, but you can override
    var attributes = _ember['default'].assign({}, _jedrulaAppConfigEnvironment['default'].APP, attrs);

    _ember['default'].run(function () {
      application = _jedrulaAppApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('jedrula-app/tests/helpers/start-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('jedrula-app/tests/helpers/target-blank.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/target-blank.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/target-blank.js should pass jshint.');
  });
});
define('jedrula-app/tests/helpers/trim.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/trim.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/trim.js should pass jshint.');
  });
});
define('jedrula-app/tests/initializers/register-showdown-extensions.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | initializers/register-showdown-extensions.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/register-showdown-extensions.js should pass jshint.');
  });
});
define('jedrula-app/tests/integration/components/blog-post-form/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('blog-post-form', 'Integration | Component | blog post form', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'cmN3jrkr',
      'block': '{"statements":[["append",["unknown",["blog-post-form"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'GgzHXJ+o',
      'block': '{"statements":[["text","\\n"],["block",["blog-post-form"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('jedrula-app/tests/integration/components/blog-post-form/component-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/blog-post-form/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/blog-post-form/component-test.js should pass jshint.');
  });
});
define('jedrula-app/tests/integration/components/blog-post/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('blog-post', 'Integration | Component | blog post', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'cYFfzuOM',
      'block': '{"statements":[["append",["unknown",["blog-post"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'ibRPyYog',
      'block': '{"statements":[["text","\\n"],["block",["blog-post"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('jedrula-app/tests/integration/components/blog-post/component-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/blog-post/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/blog-post/component-test.js should pass jshint.');
  });
});
define('jedrula-app/tests/integration/components/blog-posts-list/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('blog-posts-list', 'Integration | Component | blog posts list', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'wdsCZ7CH',
      'block': '{"statements":[["append",["unknown",["blog-posts-list"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'f8nSZ+1x',
      'block': '{"statements":[["text","\\n"],["block",["blog-posts-list"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('jedrula-app/tests/integration/components/blog-posts-list/component-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/blog-posts-list/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/blog-posts-list/component-test.js should pass jshint.');
  });
});
define('jedrula-app/tests/integration/components/login-form/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('admin-form', 'Integration | Component | admin form', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'nia2+JpH',
      'block': '{"statements":[["append",["unknown",["admin-form"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': '1c9qwhZ9',
      'block': '{"statements":[["text","\\n"],["block",["admin-form"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('jedrula-app/tests/integration/components/login-form/component-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/login-form/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/login-form/component-test.js should pass jshint.');
  });
});
define('jedrula-app/tests/integration/components/responsibilities-list/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('responsibilities-list', 'Integration | Component | responsibilities list', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': '3UJqH041',
      'block': '{"statements":[["append",["unknown",["responsibilities-list"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'yAsB89I4',
      'block': '{"statements":[["text","\\n"],["block",["responsibilities-list"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('jedrula-app/tests/integration/components/responsibilities-list/component-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/responsibilities-list/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/responsibilities-list/component-test.js should pass jshint.');
  });
});
define('jedrula-app/tests/integration/components/skills-list/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('skills-list', 'Integration | Component | skills list', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': '6Vmg5K8k',
      'block': '{"statements":[["append",["unknown",["skills-list"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'O4LV+/nX',
      'block': '{"statements":[["text","\\n"],["block",["skills-list"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('jedrula-app/tests/integration/components/skills-list/component-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/skills-list/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/skills-list/component-test.js should pass jshint.');
  });
});
define('jedrula-app/tests/integration/components/tag-form/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('tag-form', 'Integration | Component | tag form', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'A68lo9Nt',
      'block': '{"statements":[["append",["unknown",["tag-form"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': '4NnZXuni',
      'block': '{"statements":[["text","\\n"],["block",["tag-form"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('jedrula-app/tests/integration/components/tag-form/component-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/tag-form/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/tag-form/component-test.js should pass jshint.');
  });
});
define('jedrula-app/tests/integration/components/tags-multiselect/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('tags-multiselect', 'Integration | Component | tags multiselect', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'sWJF0uEF',
      'block': '{"statements":[["append",["unknown",["tags-multiselect"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'cF9uu4A7',
      'block': '{"statements":[["text","\\n"],["block",["tags-multiselect"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('jedrula-app/tests/integration/components/tags-multiselect/component-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/tags-multiselect/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/tags-multiselect/component-test.js should pass jshint.');
  });
});
define('jedrula-app/tests/jedrula-app/components/blog-post-form/template.template-lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('TemplateLint - jedrula-app/components/blog-post-form/template.hbs');
  QUnit.test('should pass TemplateLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'jedrula-app/components/blog-post-form/template.hbs should pass TemplateLint.\n');
  });
});
define('jedrula-app/tests/jedrula-app/components/blog-post/template.template-lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('TemplateLint - jedrula-app/components/blog-post/template.hbs');
  QUnit.test('should pass TemplateLint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'jedrula-app/components/blog-post/template.hbs should pass TemplateLint.\nblock-indentation: Incorrect indentation for `<div>` beginning at L20:C6. Expected `<div>` to be at an indentation of 4 but was found at 6. (jedrula-app/components/blog-post/template @ L20:C6): \n`{{#card.content class=\"layout-row layout-align-space-between\"}}\n      <div class=\"card-content-inner\">\n        <div>\n          {{post.gist}}\n        </div>\n\n        {{#if listView}}\n          <div class=\"read-more\">\n            {{#link-to \'post\' post}}read full post{{/link-to}}\n          </div>\n        {{else}}\n          <div>\n            <!--  extensions=\'targetblank\' -->\n            {{markdown-to-html\n              markdown=post.body\n            }}\n          </div>\n        {{/if}}\n      </div>\n      {{#if isAdmin}}\n        {{#card.actions class=\"layout-row\"}}\n          {{#link-to \'post.edit\' post class=\'md-button\'}}Edit{{/link-to}}\n          {{#paper-button click=(route-action \"remove\" post)}}Delete{{/paper-button}}\n          {{#paper-button click=(route-action \"togglePublic\" post)}}{{togglePublicAction}}{{/paper-button}}\n        {{/card.actions}}\n      {{/if}}\n  {{/card.content}}`\nblock-indentation: Incorrect indentation for `{{#if}}` beginning at L38:C6. Expected `{{#if}}` to be at an indentation of 4 but was found at 6. (jedrula-app/components/blog-post/template @ L38:C6): \n`{{#card.content class=\"layout-row layout-align-space-between\"}}\n      <div class=\"card-content-inner\">\n        <div>\n          {{post.gist}}\n        </div>\n\n        {{#if listView}}\n          <div class=\"read-more\">\n            {{#link-to \'post\' post}}read full post{{/link-to}}\n          </div>\n        {{else}}\n          <div>\n            <!--  extensions=\'targetblank\' -->\n            {{markdown-to-html\n              markdown=post.body\n            }}\n          </div>\n        {{/if}}\n      </div>\n      {{#if isAdmin}}\n        {{#card.actions class=\"layout-row\"}}\n          {{#link-to \'post.edit\' post class=\'md-button\'}}Edit{{/link-to}}\n          {{#paper-button click=(route-action \"remove\" post)}}Delete{{/paper-button}}\n          {{#paper-button click=(route-action \"togglePublic\" post)}}{{togglePublicAction}}{{/paper-button}}\n        {{/card.actions}}\n      {{/if}}\n  {{/card.content}}`\nhtml-comments: HTML comment detected (jedrula-app/components/blog-post/template @ L31:C12): \n`<!--  extensions=\'targetblank\' -->`');
  });
});
define('jedrula-app/tests/jedrula-app/components/blog-posts-list/template.template-lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('TemplateLint - jedrula-app/components/blog-posts-list/template.hbs');
  QUnit.test('should pass TemplateLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'jedrula-app/components/blog-posts-list/template.hbs should pass TemplateLint.\n');
  });
});
define('jedrula-app/tests/jedrula-app/components/page-menu/template.template-lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('TemplateLint - jedrula-app/components/page-menu/template.hbs');
  QUnit.test('should pass TemplateLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'jedrula-app/components/page-menu/template.hbs should pass TemplateLint.\n');
  });
});
define('jedrula-app/tests/jedrula-app/components/page-toolbar/template.template-lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('TemplateLint - jedrula-app/components/page-toolbar/template.hbs');
  QUnit.test('should pass TemplateLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'jedrula-app/components/page-toolbar/template.hbs should pass TemplateLint.\n');
  });
});
define('jedrula-app/tests/jedrula-app/components/responsibilities-list/template.template-lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('TemplateLint - jedrula-app/components/responsibilities-list/template.hbs');
  QUnit.test('should pass TemplateLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'jedrula-app/components/responsibilities-list/template.hbs should pass TemplateLint.\n');
  });
});
define('jedrula-app/tests/jedrula-app/components/skills-list/template.template-lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('TemplateLint - jedrula-app/components/skills-list/template.hbs');
  QUnit.test('should pass TemplateLint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'jedrula-app/components/skills-list/template.hbs should pass TemplateLint.\nlink-rel-noopener: links with target=\"_blank\" must have rel=\"noopener\" (jedrula-app/components/skills-list/template @ L3:C4): \n`<a href={{skillObj.href}} target=\"_blank\" title={{skillObj.skill}}>\n      {{inline-svg skillObj.svgPath}}\n    </a>`');
  });
});
define('jedrula-app/tests/jedrula-app/components/tag-form/template.template-lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('TemplateLint - jedrula-app/components/tag-form/template.hbs');
  QUnit.test('should pass TemplateLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'jedrula-app/components/tag-form/template.hbs should pass TemplateLint.\n');
  });
});
define('jedrula-app/tests/jedrula-app/components/tags-multiselect/template.template-lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('TemplateLint - jedrula-app/components/tags-multiselect/template.hbs');
  QUnit.test('should pass TemplateLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'jedrula-app/components/tags-multiselect/template.hbs should pass TemplateLint.\n');
  });
});
define('jedrula-app/tests/jedrula-app/components/user-form/template.template-lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('TemplateLint - jedrula-app/components/user-form/template.hbs');
  QUnit.test('should pass TemplateLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'jedrula-app/components/user-form/template.hbs should pass TemplateLint.\n');
  });
});
define('jedrula-app/tests/jedrula-app/templates/application.template-lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('TemplateLint - jedrula-app/templates/application.hbs');
  QUnit.test('should pass TemplateLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'jedrula-app/templates/application.hbs should pass TemplateLint.\n');
  });
});
define('jedrula-app/tests/jedrula-app/templates/blog.template-lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('TemplateLint - jedrula-app/templates/blog.hbs');
  QUnit.test('should pass TemplateLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'jedrula-app/templates/blog.hbs should pass TemplateLint.\n');
  });
});
define('jedrula-app/tests/jedrula-app/templates/create-post.template-lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('TemplateLint - jedrula-app/templates/create-post.hbs');
  QUnit.test('should pass TemplateLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'jedrula-app/templates/create-post.hbs should pass TemplateLint.\n');
  });
});
define('jedrula-app/tests/jedrula-app/templates/create-tag.template-lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('TemplateLint - jedrula-app/templates/create-tag.hbs');
  QUnit.test('should pass TemplateLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'jedrula-app/templates/create-tag.hbs should pass TemplateLint.\n');
  });
});
define('jedrula-app/tests/jedrula-app/templates/education.template-lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('TemplateLint - jedrula-app/templates/education.hbs');
  QUnit.test('should pass TemplateLint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'jedrula-app/templates/education.hbs should pass TemplateLint.\ntriple-curlies: Usage of triple curly brackets is unsafe (jedrula-app/templates/education @ L19:C10): \n`{{{stage.what}}}`');
  });
});
define('jedrula-app/tests/jedrula-app/templates/login.template-lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('TemplateLint - jedrula-app/templates/login.hbs');
  QUnit.test('should pass TemplateLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'jedrula-app/templates/login.hbs should pass TemplateLint.\n');
  });
});
define('jedrula-app/tests/jedrula-app/templates/portfolio.template-lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('TemplateLint - jedrula-app/templates/portfolio.hbs');
  QUnit.test('should pass TemplateLint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'jedrula-app/templates/portfolio.hbs should pass TemplateLint.\nimg-alt-attributes: img tags must have an alt attribute (jedrula-app/templates/portfolio @ L11:C8): \n`<img src={{concat \"/icons/\" stage.icon}} >`\ntriple-curlies: Usage of triple curly brackets is unsafe (jedrula-app/templates/portfolio @ L16:C8): \n`{{{stage.what}}}`');
  });
});
define('jedrula-app/tests/jedrula-app/templates/post.template-lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('TemplateLint - jedrula-app/templates/post.hbs');
  QUnit.test('should pass TemplateLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'jedrula-app/templates/post.hbs should pass TemplateLint.\n');
  });
});
define('jedrula-app/tests/jedrula-app/templates/post/edit.template-lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('TemplateLint - jedrula-app/templates/post/edit.hbs');
  QUnit.test('should pass TemplateLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'jedrula-app/templates/post/edit.hbs should pass TemplateLint.\n');
  });
});
define('jedrula-app/tests/jedrula-app/templates/post/index.template-lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('TemplateLint - jedrula-app/templates/post/index.hbs');
  QUnit.test('should pass TemplateLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'jedrula-app/templates/post/index.hbs should pass TemplateLint.\n');
  });
});
define('jedrula-app/tests/jedrula-app/templates/register.template-lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('TemplateLint - jedrula-app/templates/register.hbs');
  QUnit.test('should pass TemplateLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'jedrula-app/templates/register.hbs should pass TemplateLint.\n');
  });
});
define('jedrula-app/tests/jedrula-app/templates/skills.template-lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('TemplateLint - jedrula-app/templates/skills.hbs');
  QUnit.test('should pass TemplateLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'jedrula-app/templates/skills.hbs should pass TemplateLint.\n');
  });
});
define('jedrula-app/tests/jedrula-app/templates/tag/edit.template-lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('TemplateLint - jedrula-app/templates/tag/edit.hbs');
  QUnit.test('should pass TemplateLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'jedrula-app/templates/tag/edit.hbs should pass TemplateLint.\n');
  });
});
define('jedrula-app/tests/jedrula-app/templates/tags.template-lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('TemplateLint - jedrula-app/templates/tags.hbs');
  QUnit.test('should pass TemplateLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'jedrula-app/templates/tags.hbs should pass TemplateLint.\n');
  });
});
define('jedrula-app/tests/mixins/session-mixin.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | mixins/session-mixin.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/session-mixin.js should pass jshint.');
  });
});
define('jedrula-app/tests/models/post.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/post.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/post.js should pass jshint.');
  });
});
define('jedrula-app/tests/models/tag.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/tag.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/tag.js should pass jshint.');
  });
});
define('jedrula-app/tests/models/user.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/user.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/user.js should pass jshint.');
  });
});
define('jedrula-app/tests/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('jedrula-app/tests/router.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('jedrula-app/tests/routes/application.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass jshint.');
  });
});
define('jedrula-app/tests/routes/blog.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/blog.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/blog.js should pass jshint.');
  });
});
define('jedrula-app/tests/routes/create-post.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/create-post.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/create-post.js should pass jshint.');
  });
});
define('jedrula-app/tests/routes/education.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/education.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/education.js should pass jshint.');
  });
});
define('jedrula-app/tests/routes/login.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/login.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/login.js should pass jshint.');
  });
});
define('jedrula-app/tests/routes/portfolio.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/portfolio.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/portfolio.js should pass jshint.');
  });
});
define('jedrula-app/tests/routes/post.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/post.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/post.js should pass jshint.');
  });
});
define('jedrula-app/tests/routes/post/edit.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/post/edit.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/post/edit.js should pass jshint.');
  });
});
define('jedrula-app/tests/routes/register.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/register.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/register.js should pass jshint.');
  });
});
define('jedrula-app/tests/routes/skills.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/skills.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/skills.js should pass jshint.');
  });
});
define('jedrula-app/tests/routes/tag/edit.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/tag/edit.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/tag/edit.js should pass jshint.');
  });
});
define('jedrula-app/tests/routes/tags.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/tags.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/tags.js should pass jshint.');
  });
});
define('jedrula-app/tests/services/current-user.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | services/current-user.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/current-user.js should pass jshint.');
  });
});
define('jedrula-app/tests/services/session-account.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | services/session-account.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/session-account.js should pass jshint.\nservices/session-account.js: line 33, col 38, Missing semicolon.\nservices/session-account.js: line 32, col 15, \'currentUserId\' is defined but never used.\nservices/session-account.js: line 61, col 28, Missing semicolon.\n\n3 errors');
  });
});
define('jedrula-app/tests/test-helper', ['exports', 'jedrula-app/tests/helpers/resolver', 'ember-qunit'], function (exports, _jedrulaAppTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_jedrulaAppTestsHelpersResolver['default']);
});
define('jedrula-app/tests/test-helper.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('jedrula-app/tests/transitions.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | transitions.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transitions.js should pass jshint.');
  });
});
define('jedrula-app/tests/unit/adapters/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('jedrula-app/tests/unit/adapters/application-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/adapters/application-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass jshint.');
  });
});
define('jedrula-app/tests/unit/controllers/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:application', 'Unit | Controller | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('jedrula-app/tests/unit/controllers/application-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/application-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/application-test.js should pass jshint.');
  });
});
define('jedrula-app/tests/unit/controllers/blog-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:blog', 'Unit | Controller | blog', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('jedrula-app/tests/unit/controllers/blog-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/blog-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/blog-test.js should pass jshint.');
  });
});
define('jedrula-app/tests/unit/controllers/post/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:post/index', 'Unit | Controller | post/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('jedrula-app/tests/unit/controllers/post/index-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/post/index-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/post/index-test.js should pass jshint.');
  });
});
define('jedrula-app/tests/unit/controllers/skills-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:skills', 'Unit | Controller | skills', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('jedrula-app/tests/unit/controllers/skills-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/skills-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/skills-test.js should pass jshint.');
  });
});
define('jedrula-app/tests/unit/helpers/target-blank-test', ['exports', 'jedrula-app/helpers/target-blank', 'qunit'], function (exports, _jedrulaAppHelpersTargetBlank, _qunit) {

  (0, _qunit.module)('Unit | Helper | target blank');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _jedrulaAppHelpersTargetBlank.targetBlank)([42]);
    assert.ok(result);
  });
});
define('jedrula-app/tests/unit/helpers/target-blank-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/helpers/target-blank-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/target-blank-test.js should pass jshint.');
  });
});
define('jedrula-app/tests/unit/helpers/trim-test', ['exports', 'jedrula-app/helpers/trim', 'qunit'], function (exports, _jedrulaAppHelpersTrim, _qunit) {

  (0, _qunit.module)('Unit | Helper | trim');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _jedrulaAppHelpersTrim.trim)([42]);
    assert.ok(result);
  });
});
define('jedrula-app/tests/unit/helpers/trim-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/helpers/trim-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/trim-test.js should pass jshint.');
  });
});
define('jedrula-app/tests/unit/initializers/register-showdown-extensions-test', ['exports', 'ember', 'jedrula-app/initializers/register-showdown-extensions', 'qunit'], function (exports, _ember, _jedrulaAppInitializersRegisterShowdownExtensions, _qunit) {

  var application = undefined;

  (0, _qunit.module)('Unit | Initializer | register showdown extensions', {
    beforeEach: function beforeEach() {
      _ember['default'].run(function () {
        application = _ember['default'].Application.create();
        application.deferReadiness();
      });
    }
  });

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    _jedrulaAppInitializersRegisterShowdownExtensions['default'].initialize(application);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });
});
define('jedrula-app/tests/unit/initializers/register-showdown-extensions-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/initializers/register-showdown-extensions-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/initializers/register-showdown-extensions-test.js should pass jshint.');
  });
});
define('jedrula-app/tests/unit/mixins/session-mixin-test', ['exports', 'ember', 'jedrula-app/mixins/session-mixin', 'qunit'], function (exports, _ember, _jedrulaAppMixinsSessionMixin, _qunit) {

  (0, _qunit.module)('Unit | Mixin | session mixin');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var SessionMixinObject = _ember['default'].Object.extend(_jedrulaAppMixinsSessionMixin['default']);
    var subject = SessionMixinObject.create();
    assert.ok(subject);
  });
});
define('jedrula-app/tests/unit/mixins/session-mixin-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/mixins/session-mixin-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/mixins/session-mixin-test.js should pass jshint.');
  });
});
define('jedrula-app/tests/unit/models/post-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('post', 'Unit | Model | post', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('jedrula-app/tests/unit/models/post-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/post-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/post-test.js should pass jshint.');
  });
});
define('jedrula-app/tests/unit/models/tag-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('tag', 'Unit | Model | tag', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('jedrula-app/tests/unit/models/tag-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/tag-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/tag-test.js should pass jshint.');
  });
});
define('jedrula-app/tests/unit/routes/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:application', 'Unit | Route | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('jedrula-app/tests/unit/routes/application-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/application-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/application-test.js should pass jshint.');
  });
});
define('jedrula-app/tests/unit/routes/blog-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:blog', 'Unit | Route | blog', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('jedrula-app/tests/unit/routes/blog-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/blog-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/blog-test.js should pass jshint.');
  });
});
define('jedrula-app/tests/unit/routes/create-post-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:create-post', 'Unit | Route | create post', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('jedrula-app/tests/unit/routes/create-post-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/create-post-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/create-post-test.js should pass jshint.');
  });
});
define('jedrula-app/tests/unit/routes/create-tag-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:create-tag', 'Unit | Route | create tag', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('jedrula-app/tests/unit/routes/create-tag-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/create-tag-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/create-tag-test.js should pass jshint.');
  });
});
define('jedrula-app/tests/unit/routes/education-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:education', 'Unit | Route | education', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('jedrula-app/tests/unit/routes/education-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/education-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/education-test.js should pass jshint.');
  });
});
define('jedrula-app/tests/unit/routes/portfolio-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:portfolio', 'Unit | Route | portfolio', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('jedrula-app/tests/unit/routes/portfolio-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/portfolio-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/portfolio-test.js should pass jshint.');
  });
});
define('jedrula-app/tests/unit/routes/post-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:post', 'Unit | Route | post', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('jedrula-app/tests/unit/routes/post-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/post-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/post-test.js should pass jshint.');
  });
});
define('jedrula-app/tests/unit/routes/post/edit-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:post/edit', 'Unit | Route | post/edit', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('jedrula-app/tests/unit/routes/post/edit-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/post/edit-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/post/edit-test.js should pass jshint.');
  });
});
define('jedrula-app/tests/unit/routes/register-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:register', 'Unit | Route | register', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('jedrula-app/tests/unit/routes/register-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/register-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/register-test.js should pass jshint.');
  });
});
define('jedrula-app/tests/unit/routes/skills-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:skills', 'Unit | Route | skills', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('jedrula-app/tests/unit/routes/skills-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/skills-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/skills-test.js should pass jshint.');
  });
});
define('jedrula-app/tests/unit/routes/tag/edit-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:tag/edit', 'Unit | Route | tag/edit', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('jedrula-app/tests/unit/routes/tag/edit-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/tag/edit-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/tag/edit-test.js should pass jshint.');
  });
});
define('jedrula-app/tests/unit/routes/tags-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:tags', 'Unit | Route | tags', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('jedrula-app/tests/unit/routes/tags-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/tags-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/tags-test.js should pass jshint.');
  });
});
define('jedrula-app/tests/unit/services/current-user-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:current-user', 'Unit | Service | current user', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('jedrula-app/tests/unit/services/current-user-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/services/current-user-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/current-user-test.js should pass jshint.');
  });
});
define('jedrula-app/tests/unit/services/session-account-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:session-account', 'Unit | Service | session account', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('jedrula-app/tests/unit/services/session-account-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/services/session-account-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/session-account-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('jedrula-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
