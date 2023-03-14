<script setup>
  const global = useGlobalStore()
</script>

<template>
  <Html :data-theme="global.theme.name">
    <Head>
      <Title>UI Icons</Title>
    </Head>
    <Toast />
    <NuxtLayout />
  </Html>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap');

  * {
    font-family: 'Ubuntu Mono', monospace;
  }
</style>
