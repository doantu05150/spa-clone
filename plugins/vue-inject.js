import Vue from 'vue'

Vue.prototype.$myInjectedFunction = (src, page) => {
  return new Promise((resolve, reject) => {
    const el = document.createElement('script')

    el.type = 'text/javascript'
    el.async = true
    el.src = src

    el.addEventListener('load', resolve)
    el.addEventListener('error', reject)
    el.addEventListener('abort', reject)

    page.appendChild(el)
  })
}
