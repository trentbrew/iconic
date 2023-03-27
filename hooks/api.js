import icons from '@/data/icons'

export default {
  icons: {
    get: name => {
      return name ? icons.filter(icon => icon.name == name)[0] : icons
    },
  },
}
