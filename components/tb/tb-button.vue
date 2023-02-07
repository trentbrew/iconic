<script setup>
  const props = defineProps({
    innerClass: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'neutral',
    },
    size: {
      type: String,
      default: 'md',
    },
    to: {
      type: String,
      default: '',
    },
    newtab: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: null,
    },
    iconLeft: {
      type: Boolean,
      default: true,
    },
    iconRight: {
      type: Boolean,
      default: false,
    },
  })

  const btnColor = computed(() => (props.type ? ` btn-${props.type}` : ''))
</script>

<template>
  <NuxtLink
    :to="props.to || props.href"
    :target="props.newtab ? '_blank' : '_self'"
  >
    <button
      :class="props.innerClass + btnColor"
      class="btn flex gap-3 min-w-max"
    >
      <tb-icon
        v-show="props.iconLeft || (!props.iconLeft && !props.iconRight)"
        class="text-inherit"
        v-if="props.icon || props.newtab"
        :name="props.icon ? props.icon : props.newtab ? 'open' : 'star_active'"
        size="18"
      />
      <span>{{ props.label }}</span>
      <tb-icon
        v-show="props.iconRight && !props.iconLeft"
        class="text-inherit"
        v-if="props.icon || props.newtab"
        :name="props.icon ? props.icon : props.newtab ? 'open' : 'star_active'"
        size="18"
      />
    </button>
  </NuxtLink>
</template>
