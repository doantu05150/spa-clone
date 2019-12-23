import path from 'path'

export default function nuxtBootstrapVue() {
  // Register `plugin.js` template
  this.addPlugin(path.resolve(__dirname, 'plugin.js'))
}
