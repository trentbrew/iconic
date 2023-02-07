<script setup>
  const global = useGlobalStore()

  const props = defineProps({
    index: Number,
    theme: Object,
  })

  const themes = computed(() => global.themes)
  const active = computed(() => props.theme.name == global.theme.name)
  const top = computed(() => props.index == 0)
  const bottom = computed(() => props.index == themes.length - 1)
</script>

<template>
  <button
    :data-theme="props.theme.name"
    @click="global.setTheme(props.theme)"
    :class="
      top
        ? '!rounded-t-lg !rounded-b-none'
        : bottom
        ? '!rounded-b-lg !rounded-t-none'
        : '!rounded-none'
    "
    class="flex justify-between items-center group hover:bg-base-200 focus:bg-base-100"
  >
    <div class="text-base-content flex justify-start items-center gap-3">
      <span>{{ props.theme.name }}</span>
      <div v-if="active" class="badge badge-sm badge-outline">active</div>
    </div>
    <div class="flex gap-1 p-1 rounded-full duration-75">
      <div class="dot border-primary-content/25 bg-primary"></div>
      <div class="dot border-secondary-content/25 bg-secondary"></div>
      <div class="dot border-accent-content/25 bg-accent"></div>
    </div>
  </button>
</template>

<style scoped>
  .dot {
    @apply rounded w-2 h-2 border-[1px];
  }
  button {
    transition: 150ms;
    transition-timing-function: ease;
  }
  button:hover {
    transition-delay: 0ms;
  }
</style>
