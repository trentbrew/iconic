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
