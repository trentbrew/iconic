<script setup>
  const props = defineProps({
    name: {
      type: String,
      default: '',
      requred: true,
    },
    size: {
      type: [Number, String],
      default: 24,
    },
  })
  const svg = ref(null)
  const res = await fetch(
    `https://www.iconic.rest/api/icons/${props.name}?size=${props.size}`
  )
  res.json().then(data => {
    svg.value = data.svg
  })
</script>

<template>
  <div v-html="svg"></div>
</template>
