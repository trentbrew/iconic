<script setup>
  import api from '@/hooks/api'

  const global = useGlobalStore()

  const download = ref(null)

  const state = reactive({
    downloading: false,
    blob: null,
    url: '',
    search: '',
    filtered: [],
  })

  onMounted(() => {
    global.clearSearch()
    getFilteredIcons().then(data => {
      state.filtered = data
    })
  })

  async function getFilteredIcons() {
    return state.search
      ? await api.icons
          .get()
          .filter(icon => icon.name.includes(state.search) || icon.tags.some(tag => tag.includes(state.search)))
      : await api.icons.get()
  }

  function downloadSVG(icon) {
    state.downloading = true
    const blob = new Blob([icon.svg], { type: 'image/svg+xml' })
    const url = URL.createObjectURL(blob)
    state.url = url
    setTimeout(() => {
      state.downloading = false
      download.value.filter(item => item.id === icon.name)[0].click()
    }, 800)
  }

  function copySvg(data) {
    console.log('copying svg: ', data)
    navigator.clipboard.writeText(data.svg)
    global.toast('info', 'Copied SVG to clipboard')
  }

  watch(
    () => global.query,
    val => {
      state.search = val
      getFilteredIcons().then(data => {
        state.filtered = data
      })
    }
  )
</script>

<template>
  <main>
    <section v-show="!state.search">
      <!-- <div class="hero min-h-[50vh] bg-base-200">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-5xl">
              <span class="opacity-100 font-bold">iconic</span
              ><span class="opacity-40">_beta</span>
            </h1>
            <p class="py-6 opacity-50">
              Iconic is a free and open source icon library. SVGs can be
              downloaded from this page, or accessed via the API.
            </p>
            <a href="https://github.com/trentbrew/iconic#readme" target="_blank"
              ><button class="btn btn-primary">Get Started</button></a
            >
          </div>
        </div>
      </div> -->
    </section>
    <ul class="w-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-3">
      <div
        v-for="(icon, index) in state.filtered"
        :key="index"
        aria-role="button"
        :aria-label="`Download ${icon.name}`"
      >
        <li
          class="w-full flex justify-between items-center rounded-box p-6 group border-[2px] !duration-75"
          :class="global.theme.type == 'light' ? 'border-base-200 bg-base-100' : 'border-transparent bg-base-100'"
        >
          <div class="left flex items-center gap-3">
            <div v-html="icon.svg" class="text-base-content"></div>
            <span class="opacity-40 font-bold group-hover:opacity-100">{{ icon.name }}</span>
          </div>
          <div class="flex gap-4">
            <div
              @click="copySvg(icon)"
              class="opacity-0 group-hover:opacity-100 w-6 h-6 flex justify-center items-cenmter hover:scale-110 active:scale-90 cursor-pointer"
            >
              <tb-icon name="copy" class="text-primary" />
            </div>
            <div
              @click="downloadSVG(icon)"
              class="opacity-0 group-hover:opacity-100 w-6 h-6 flex justify-center items-cenmter hover:scale-110 active:scale-90 cursor-pointer"
            >
              <!-- <tb-icon name="copy" class="text-primary"></tb-icon> -->
              <tb-icon v-show="!state.downloading" name="download" class="text-primary" />
              <tb-loader v-show="state.downloading" type="3" size="24" class="text-primary" />
            </div>
            <a :href="`https://www.iconic.rest/api/icons/${icon.name}`"
              ><div
                class="opacity-0 group-hover:opacity-100 w-6 h-6 flex justify-center items-cenmter hover:scale-110 active:scale-90 cursor-pointer"
              >
                <tb-icon name="globe" class="text-primary" /></div
            ></a>
          </div>
        </li>
        <a
          :id="icon.name"
          ref="download"
          class="absolute top-0 left-0 hidden pointer-events-none"
          :download="icon.name"
          :href="state.url"
        ></a>
      </div>
    </ul>
    <div v-if="!state.filtered.length" class="w-full h-[calc(100vh-300px)] flex justify-center items-center">
      <h3 class="flex flex-col justify-center items-center gap-3 text-lg w-full text-center">
        <span class="text-3xl">{{ '(╥﹏╥)' }}</span>
        <span class="text-base opacity-50">No icons found</span>
      </h3>
    </div>
  </main>
</template>
