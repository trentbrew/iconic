<script setup>
  const route = useRoute()
  const global = useGlobalStore()

  const state = reactive({
    search: '',
    scroll: 0,
  })

  const themes = computed(() => global.themes)

  function handleScroll(e) {
    state.scroll = e.value
  }

  function handleLogoClick() {
    location.reload()
  }

  watch(
    () => state.search,
    val => {
      global.updateQuery(val)
    }
  )
</script>

<template>
  <nav
    v-scroll="handleScroll"
    class="fixed navbar px-6 py-4 z-10"
    :class="`backdrop-blur-xl bg-base-100 border-base-200 ${
      state.scroll > 0 ? 'border-b-[1.5px]' : 'border-b-0'
    }`"
  >
    <div class="navbar-start w-auto">
      <svg
        class="hover:scale-[1.05] active:scale-[0.98] cursor-pointer duration-150"
        @click="handleLogoClick"
        width="36"
        height="36"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_3507_5715)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M100 0H0V100H20V60H40V100H100V0ZM20 20H40V40H20V20Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_3507_5715">
            <rect width="100" height="100" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
    <div class="w-full mr-6 flex justify-center !duration-300">
      <label>
        <tb-icon
          name="search"
          class="translate-x-[46px] text-base-content !duration-150"
        />
      </label>
      <input
        @input="
          e => {
            state.search = e.target.value
          }
        "
        :value="global.query"
        type="text"
        aria-label="Search icon"
        placeholder="Search icons"
        class="input input-lg pl-16 text-[16px] rounded-box w-full bg-base-200 focus:!outline-none text-base-content"
      />
    </div>
    <div class="navbar-end hidden lg:flex w-auto">
      <ul class="menu menu-horizontal">
        <li>
          <a
            id="github-link"
            href="https://github.com/trentbrew/iconic"
            target="_blank"
            class="btn btn-ghost pl-4"
          >
            <tb-icon name="github" class="text-base-content" />
            GitHub
          </a>
        </li>
        <li>
          <a
            id="api-link"
            href="https://iconic.rest/api/icons"
            target="_blank"
            class="btn btn-ghost pl-4"
          >
            <tb-icon name="globe" class="text-base-content" />
            API
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
  #logo {
    @apply !duration-300;
  }
  li a,
  li label {
    @apply text-base-content/50 rounded active:bg-base-200;
  }
  li a:active {
    @apply scale-95;
  }
  a.router-link-exact-active {
    @apply !text-base-content bg-transparent;
  }
</style>
