export { createVNode, isVNode, isSameVNodeType, Text, Fragment } from "./vnode";
export { h } from "./h";
export { createRenderer } from "./renderer";
export {
  reactive,
  toRef,
  toRefs,
  ref,
  unref,
  computed,
  customRef,
  effect,
  isRef,
  proxyRefs,
} from "@vue/reactivity";
export { nextTick } from "./scheduler";
export { getCurrentInstance } from "./component";
export { useAttrs, useSlots, getContext } from "./apiSetupHeplpers";
export {
  onBeforeMount,
  onBeforeUpdate,
  onMounted,
  onUpdated,
} from "./apiLifecycle";
