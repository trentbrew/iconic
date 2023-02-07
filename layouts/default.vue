<script setup>
  const route = useRoute()
  const global = useGlobalStore()
</script>

<template>
  <Nav />
  <div>
    <div class="pt-[97px]">
      <div class="p-4 min-h-[calc(100vh-97px)] bg-base-200">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>
