<script setup>
  const global = useGlobalStore()

  const message = computed(() => global.getToast.message)

  const toasty = computed(() => {
    if (global.getToast?.active) {
      return 'opacity-1 translate-y-0'
    }
    return 'opacity-0 translate-y-6'
  })

  const type = computed(() => `alert-${global.getToast.type}`)
</script>

<template>
  <div class="toast w-full duration-300 fixed z-50 p-0" :class="toasty">
    <div
      class="alert bg-primary text-primary-content shadow-lg rounded-none"
      :class="type"
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="stroke-current flex-shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{{ message }}</span>
      </div>
    </div>
  </div>
</template>
