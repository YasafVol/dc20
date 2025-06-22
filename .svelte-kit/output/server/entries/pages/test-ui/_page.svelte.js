import { R as spread_attributes, I as escape_html, J as store_get, P as unsubscribe_stores, D as pop, A as push } from "../../../chunks/index.js";
import "dequal";
import { d as derived, g as get, w as writable, r as readable } from "../../../chunks/index3.js";
import "clsx";
function styleToString(style) {
  return Object.keys(style).reduce((str, key) => {
    if (style[key] === void 0)
      return str;
    return str + `${key}:${style[key]};`;
  }, "");
}
function disabledAttr(disabled) {
  return disabled ? true : void 0;
}
({
  style: styleToString({
    position: "absolute",
    opacity: 0,
    "pointer-events": "none",
    margin: 0,
    transform: "translateX(-100%)"
  })
});
function noop() {
}
function omit(obj, ...keys) {
  const result = {};
  for (const key of Object.keys(obj)) {
    if (!keys.includes(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}
function removeUndefined(obj) {
  const result = {};
  for (const key in obj) {
    const value = obj[key];
    if (value !== void 0) {
      result[key] = value;
    }
  }
  return result;
}
function lightable(value) {
  function subscribe(run) {
    run(value);
    return () => {
    };
  }
  return { subscribe };
}
const hiddenAction = (obj) => {
  return new Proxy(obj, {
    get(target, prop, receiver) {
      return Reflect.get(target, prop, receiver);
    },
    ownKeys(target) {
      return Reflect.ownKeys(target).filter((key) => key !== "action");
    }
  });
};
const isFunctionWithParams = (fn) => {
  return typeof fn === "function";
};
makeElement("empty");
function makeElement(name2, args) {
  const { stores, action, returned } = args ?? {};
  const derivedStore = (() => {
    if (stores && returned) {
      return derived(stores, (values) => {
        const result = returned(values);
        if (isFunctionWithParams(result)) {
          const fn = (...args2) => {
            return hiddenAction(removeUndefined({
              ...result(...args2),
              [`data-melt-${name2}`]: "",
              action: action ?? noop
            }));
          };
          fn.action = action ?? noop;
          return fn;
        }
        return hiddenAction(removeUndefined({
          ...result,
          [`data-melt-${name2}`]: "",
          action: action ?? noop
        }));
      });
    } else {
      const returnedFn = returned;
      const result = returnedFn?.();
      if (isFunctionWithParams(result)) {
        const resultFn = (...args2) => {
          return hiddenAction(removeUndefined({
            ...result(...args2),
            [`data-melt-${name2}`]: "",
            action: action ?? noop
          }));
        };
        resultFn.action = action ?? noop;
        return lightable(resultFn);
      }
      return lightable(hiddenAction(removeUndefined({
        ...result,
        [`data-melt-${name2}`]: "",
        action: action ?? noop
      })));
    }
  })();
  const actionFn = action ?? (() => {
  });
  actionFn.subscribe = derivedStore.subscribe;
  return actionFn;
}
function createElHelpers(prefix) {
  const name2 = (part) => part ? `${prefix}-${part}` : prefix;
  const attribute = (part) => `data-melt-${prefix}${part ? `-${part}` : ""}`;
  const selector = (part) => `[data-melt-${prefix}${part ? `-${part}` : ""}]`;
  const getEl = (part) => document.querySelector(selector(part));
  return {
    name: name2,
    attribute,
    selector,
    getEl
  };
}
function isHTMLElement(element) {
  return element instanceof HTMLElement;
}
function addMeltEventListener(target, event, handler, options) {
  const events = Array.isArray(event) ? event : [event];
  if (typeof handler === "function") {
    const handlerWithMelt = withMelt((_event) => handler(_event));
    events.forEach((_event) => target.addEventListener(_event, handlerWithMelt, options));
    return () => {
      events.forEach((_event) => target.removeEventListener(_event, handlerWithMelt, options));
    };
  }
  return () => noop();
}
function dispatchMeltEvent(originalEvent) {
  const node = originalEvent.currentTarget;
  if (!isHTMLElement(node))
    return null;
  const customMeltEvent = new CustomEvent(`m-${originalEvent.type}`, {
    detail: {
      originalEvent
    },
    cancelable: true
  });
  node.dispatchEvent(customMeltEvent);
  return customMeltEvent;
}
function withMelt(handler) {
  return (event) => {
    const customEvent = dispatchMeltEvent(event);
    if (customEvent?.defaultPrevented)
      return;
    return handler(event);
  };
}
function withGet(store) {
  return {
    ...store,
    get: () => get(store)
  };
}
withGet.writable = function(initial) {
  const internal = writable(initial);
  let value = initial;
  return {
    subscribe: internal.subscribe,
    set(newValue) {
      internal.set(newValue);
      value = newValue;
    },
    update(updater) {
      const newValue = updater(value);
      internal.set(newValue);
      value = newValue;
    },
    get() {
      return value;
    }
  };
};
withGet.derived = function(stores, fn) {
  const subscribers = /* @__PURE__ */ new Map();
  const get2 = () => {
    const values = Array.isArray(stores) ? stores.map((store) => store.get()) : stores.get();
    return fn(values);
  };
  const subscribe = (subscriber) => {
    const unsubscribers = [];
    const storesArr = Array.isArray(stores) ? stores : [stores];
    storesArr.forEach((store) => {
      unsubscribers.push(store.subscribe(() => {
        subscriber(get2());
      }));
    });
    subscriber(get2());
    subscribers.set(subscriber, unsubscribers);
    return () => {
      const unsubscribers2 = subscribers.get(subscriber);
      if (unsubscribers2) {
        for (const unsubscribe of unsubscribers2) {
          unsubscribe();
        }
      }
      subscribers.delete(subscriber);
    };
  };
  return {
    get: get2,
    subscribe
  };
};
const overridable = (_store, onChange) => {
  const store = withGet(_store);
  const update = (updater, sideEffect) => {
    store.update((curr) => {
      const next = updater(curr);
      let res = next;
      if (onChange) {
        res = onChange({ curr, next });
      }
      sideEffect?.(res);
      return res;
    });
  };
  const set = (curr) => {
    update(() => curr);
  };
  return {
    ...store,
    update,
    set
  };
};
function toWritableStores(properties) {
  const result = {};
  Object.keys(properties).forEach((key) => {
    const propertyKey = key;
    const value = properties[propertyKey];
    result[propertyKey] = withGet(writable(value));
  });
  return result;
}
({
  disabled: readable(false),
  required: readable(false),
  name: readable(void 0),
  type: readable(void 0)
});
const defaults$1 = {
  defaultOpen: false,
  disabled: false,
  forceVisible: false
};
const { name } = createElHelpers("collapsible");
function createCollapsible(props) {
  const withDefaults = { ...defaults$1, ...props };
  const options = toWritableStores(omit(withDefaults, "open", "defaultOpen", "onOpenChange"));
  const { disabled, forceVisible } = options;
  const openWritable = withDefaults.open ?? writable(withDefaults.defaultOpen);
  const open = overridable(openWritable, withDefaults?.onOpenChange);
  const root = makeElement(name(), {
    stores: [open, disabled],
    returned: ([$open, $disabled]) => ({
      "data-state": $open ? "open" : "closed",
      "data-disabled": disabledAttr($disabled)
    })
  });
  const trigger = makeElement(name("trigger"), {
    stores: [open, disabled],
    returned: ([$open, $disabled]) => ({
      "data-state": $open ? "open" : "closed",
      "data-disabled": disabledAttr($disabled),
      disabled: disabledAttr($disabled)
    }),
    action: (node) => {
      const unsub = addMeltEventListener(node, "click", () => {
        const disabled2 = node.dataset.disabled !== void 0;
        if (disabled2)
          return;
        open.update(($open) => !$open);
      });
      return {
        destroy: unsub
      };
    }
  });
  const isVisible = derived([open, forceVisible], ([$open, $forceVisible]) => $open || $forceVisible);
  const content = makeElement(name("content"), {
    stores: [isVisible, open, disabled],
    returned: ([$isVisible, $open, $disabled]) => ({
      "data-state": $open ? "open" : "closed",
      "data-disabled": disabledAttr($disabled),
      hidden: $isVisible ? void 0 : true,
      style: $isVisible ? void 0 : styleToString({ display: "none" })
    })
  });
  return {
    elements: {
      root,
      trigger,
      content
    },
    states: {
      open
    },
    options
  };
}
const defaults = {
  isDateDisabled: void 0,
  isDateUnavailable: void 0,
  value: void 0,
  preventDeselect: false,
  numberOfMonths: 1,
  pagedNavigation: false,
  weekStartsOn: 0,
  fixedWeeks: false,
  calendarLabel: "Event Date",
  locale: "en",
  minValue: void 0,
  maxValue: void 0,
  disabled: false,
  readonly: false,
  weekdayFormat: "narrow"
};
({
  ...omit(defaults, "isDateDisabled", "isDateUnavailable", "value", "locale", "disabled", "readonly", "minValue", "maxValue", "weekdayFormat")
});
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  const {
    elements: { root, content, trigger },
    states: { open }
  } = createCollapsible();
  $$payload.out += `<h1 class="text-2xl p-4 text-yellow-accent">UI Test Page</h1> <div class="bg-purple-primary w-24 h-24 m-4"></div> <button class="p-2 px-4 m-4 bg-orange-secondary text-light-text-primary rounded-lg font-semibold hover:bg-opacity-80">Test Styled Button</button> <div${spread_attributes(
    {
      ...store_get($$store_subs ??= {}, "$root", root),
      class: "mt-4 p-2 border border-purple-primary rounded"
    }
  )}><button${spread_attributes(
    {
      ...store_get($$store_subs ??= {}, "$trigger", trigger),
      class: "p-2 bg-purple-primary text-light-text-primary rounded w-full text-left"
    }
  )}>Collapsible Trigger (Click to ${escape_html(store_get($$store_subs ??= {}, "$open", open) ? "Close" : "Open")})</button> `;
  if (store_get($$store_subs ??= {}, "$open", open)) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${spread_attributes(
      {
        ...store_get($$store_subs ??= {}, "$content", content),
        class: "p-2 mt-2 bg-dark-bg-secondary text-light-text-primary rounded"
      }
    )}>Collapsible Content - Now Visible!</div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
