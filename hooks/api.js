import icons from '@/data/icons'

export default {
  icons: {
    get: (name) => name ? icons.filter((icon) => icon.name == name)[0] : icons,
  }
}
