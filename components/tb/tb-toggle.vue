<script setup>
  const emit = defineEmits(['update:modelValue'])

  const props = defineProps({
    modelValue: {
      type: Boolean,
      default: true,
    },
    innerClass: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: 'success',
    },
    checked: {
      type: Boolean,
      default: false,
    },
  })

  function handleToggle(e) {
    emit('update:modelValue', e.target.checked)
  }
</script>

<template>
  <div class="form-control w-full group">
    <label class="cursor-pointer label p-0 w-full">
      <span
        v-if="props.label"
        class="label-text text-base group-hover:text-primary"
        >{{ props.label }}</span
      >
      <input
        type="checkbox"
        class="toggle"
        :class="props.innerClass"
        @change="handleToggle"
        :checked="props.modelValue"
      />
    </label>
  </div>
</template>
