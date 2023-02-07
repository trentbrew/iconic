<script setup>
  import { Gradient } from '~/modules/gradient'

  const global = useGlobalStore()

  const ready = computed(() => global.gradientReady)

  function runGradient() {
    if (ready) {
      const self = global
      self.setGradientLoading(true)
      const gradient = new Gradient()
      gradient.initGradient('#gradient-canvas')
      setTimeout(() => {
        self.setGradientLoading(false)
      }, 4000)
    }
  }

  onMounted(() => {
    runGradient()
  })

  watch(
    () => global.theme,
    () => {
      if (global.gradientReady) runGradient()
    }
  )
</script>

<template>
  <canvas
    :style="!ready ? 'opacity: 0' : 'opacity: 0.2'"
    id="gradient-canvas"
  ></canvas>
</template>

<style scoped>
  #gradient-canvas {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    transform: scale(1.8);
    filter: blur(12px);
    transition: opacity 2s cubic-bezier(0.45, 0, 0.55, 1) !important;
    --gradient-color-1: hsl(var(--p));
    --gradient-color-2: hsl(var(--a));
    --gradient-color-3: hsl(var(--s));
    --gradient-color-4: hsl(var(--b1));
  }
</style>
