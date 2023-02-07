export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.directive('scroll', {
    mounted(el, binding) {
      window.addEventListener('scroll', e => {
        const target = e.target.scrollingElement
        const height = target.scrollHeight
        const value = Math.floor(target.scrollTop)
        const viewportHeight = target.clientHeight
        const viewportWidth = target.clientWidth
        binding.value({
          target,
          el,
          height,
          value,
          viewportHeight,
          viewportWidth,
        })
      })
    },
    destroyed() {
      window.removeEventListener('scroll')
    },
  })
})
