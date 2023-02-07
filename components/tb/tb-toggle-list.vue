<script setup>
  const emit = defineEmits(['change'])

  const props = defineProps({
    items: {
      type: Array,
      default: [],
    },
  })
</script>

<template>
  <ul class="w-full">
    <li
      v-for="(item, index) in props.items"
      :key="index"
      class="rounded p-4"
      :class="index != 0 && 'border-t border-base-200'"
    >
      <tb-toggle
        @change="$emit('change', { name: item.name, value: $event })"
        :label="item.label"
        :checked="item.value"
        inner-class="toggle-primary"
      />
    </li>
  </ul>
</template>
