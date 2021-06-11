import DialogDrawerFree from "./components/dialog-drawer-free";

const req = require.context('./', true, /\/(index|form-show|form-show-row||form-show-col|form-show-item).vue$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
const modules = requireAll(req)
console.log(modules)

const Components = {
  install (Vue) {
    Vue.component(DialogDrawerFree.name, DialogDrawerFree)
    modules.map(component => {
      Vue.component(component.default.name, component.default)
    })
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  Components.install(window.Vue)
}

export default Components

