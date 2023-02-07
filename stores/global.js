export const useGlobalStore = defineStore('global', {
  state: () => ({
    ui: {
      toast: {
        active: false,
        message: '',
        type: '',
      },
      themes: {
        active: {
          name: 'business',
          type: 'dark',
        },
        all: [
          {
            name: 'winter',
            type: 'light',
          },
          {
            name: 'pastel',
            type: 'light',
          },
          {
            name: 'cmyk',
            type: 'light',
          },
          {
            name: 'wireframe',
            type: 'light',
          },
          {
            name: 'autumn',
            type: 'light',
          },
          {
            name: 'valentine',
            type: 'light',
          },
          {
            name: 'retro',
            type: 'light',
          },
          {
            name: 'aqua',
            type: 'dark',
          },
          {
            name: 'dark',
            type: 'dark',
          },
          {
            name: 'business',
            type: 'dark',
          },
          {
            name: 'coffee',
            type: 'dark',
          },
          {
            name: 'night',
            type: 'dark',
          },
          {
            name: 'forest',
            type: 'dark',
          },
          {
            name: 'black',
            type: 'dark',
          },
        ],
      },
      gradient: {
        loading: false,
      },
    },
    search: {
      query: '',
    },
  }),
  getters: {
    theme: state => state.ui.themes.active,
    themes: state => state.ui.themes.all,
    query: state => state.search.query,
    gradientReady: state => !state.ui.gradient.loading,
    getToast: state => state.ui.toast,
  },
  actions: {
    setTheme(theme) {
      console.log(`Theme set to ${theme.name}`)
      this.ui.themes.active = theme
    },
    clearSearch() {
      this.search.query = ''
      console.log('search cleared')
    },
    updateQuery(query) {
      this.search.query = query
      console.log('search query updated: ', query)
    },
    setGradientLoading(payload) {
      this.ui.gradient.loading = payload
    },
    toast(type, message) {
      console.log('toast message: ', message)
      this.ui.toast.active = true
      this.ui.toast.message = message
      this.ui.toast.type = type
      setTimeout(() => {
        this.ui.toast.active = false
      }, 3000)
    },
  },
})
