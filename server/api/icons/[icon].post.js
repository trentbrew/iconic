import api from '@/hooks/api'

export default defineEventHandler(event => {
  api.icons.post(event.context.params.svg)
  const payload = {
    name: icon.name,
    svg: icon.svg.replace(
      /width="(\d+)" height="(\d+)"/,
      `width="${size ?? 24}" height="${size ?? 24}"`
    ),
  }
  return payload
})
