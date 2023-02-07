<script setup>
  defineEmits(['click'])

  const props = defineProps({
    expanded: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    index: {
      type: Number,
      default: null,
    },
  })

  const slot = ref(null)

  const state = reactive({
    contentHeight: 0,
    expanded: false,
  })

  const itemId = computed(
    () => `hidden-content-${props.title.toLowerCase().replace(' ', '-')}`
  )

  onMounted(() => {
    state.contentHeight = slot.value.clientHeight
    state.expanded = props.expanded
  })

  function toggle() {
    state.expanded = !state.expanded
  }
</script>

<template>
  <li
    :id="itemId"
    role="menuitem"
    :aria-expanded="props.expanded"
    class="group flex flex-col"
  >
    <button
      @click="toggle"
      :aria-controls="itemId"
      class="text-left rounded p-4"
    >
      <div
        class="flex w-full items-center justify-between"
        :class="state.expanded ? 'text-primary' : 'group-hover:text-primary'"
      >
        <span>{{ props.title }}</span>
        <tb-icon
          class="duration-300"
          :class="state.expanded && 'rotate-180'"
          name="dropdown"
        />
      </div>
    </button>

    <div
      class="duration-300 overflow-hidden"
      :style="
        state.expanded
          ? `height: ${state.contentHeight}px;`
          : 'height: 0px; opacity: 0; pointer-events: none;'
      "
    >
      <div ref="slot" class="px-4 pb-6 pt-0">
        <slot />
      </div>
    </div>
  </li>
</template>

<style scoped>
  li:nth-child(1) {
    @apply !border-none;
  }
  li {
    @apply border-t border-base-200;
  }
</style>
