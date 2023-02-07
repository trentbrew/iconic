<script setup>
  const global = useGlobalStore()

  const props = defineProps({
    data: {
      type: String,
      default: '',
      required: true,
    },
  })

  function copyCode() {
    navigator.clipboard.writeText(props.data)
    global.toast('info', 'Copied to clipboard')
  }
</script>

<template>
  <div class="mockup-code w-full">
    <tb-button @click="copyCode" icon="copy" class="absolute right-0 top-1">
    </tb-button>
    <pre><code>{{ props.data }}</code></pre>
  </div>
</template>
