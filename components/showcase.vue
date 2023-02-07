<script setup>
  const global = useGlobalStore()

  const query = computed(() => global.query)

  const props = defineProps({
    title: {
      type: String,
      default: 'title',
    },
  })

  const state = reactive({
    showCode: false,
  })

  function toggleCode() {
    state.showCode = !state.showCode
  }
</script>

<template>
  <div
    :id="props.title"
    v-show="props.title.includes(query) || query == ''"
    class="rounded-box w-full bg-transparent mb-3 flex flex-col justify-center items-center"
  >
    <div
      class="flex justify-between items-center w-full p-3 pl-4 bg-base-100 border-b-[1.5px] border-base-200 rounded-box rounded-b-none"
    >
      <h1 class="m-0 text-base font-bold text-base-content">
        {{ props.title }}
      </h1>
      <tb-button
        @click="toggleCode"
        :type="state.showCode ? 'neutral' : 'outline'"
        label="</>"
        inner-class="btn-xs"
      />
    </div>
    <div
      class="bg-base-100 w-full rounded-box rounded-t-none flex justify-center items-center p-16"
      :class="state.showCode && 'flex-col gap-12'"
    >
      <slot :name="state.showCode ? 'code' : 'default'" />
    </div>
  </div>
</template>
