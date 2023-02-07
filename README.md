## Icons API

You can use the API to fetch icons. The API is available at [iconic.rest/api/icons](https://iconic.rest/api/icons). The API returns the following JSON:

```json
{
  "name": "icon_name",
  "svg": "<svg>...</svg>"
}
```

To specify icon size, add a `size` query parameter to the API URL. The default size is 24px.

## Contributing

To add a new icon, insert a new object into the `icons` array in `~/data/icons.js`. Fill should be `currentColor`, and tags are automatically generated from the icon name. However, you can add custom tags if you want.

```js
{
  name: 'icon_name',
  svg: '<svg>...</svg>',
  tags: ['tag1', 'tag2', 'tag3'], // optional
},
```

1. Fork the project
2. Create your Feature Branch (`git checkout -b icon_name`)
3. Commit your Changes (`git commit -m 'add icon icon_name'`)
4. Push to the Branch (`git push -u origin icon_name`)
5. Open a Pull Request

## Example Icon Component (Nuxt)

```vue
<script setup>
  const props = defineProps({
    name: {
      type: String,
      default: '',
      requred: true,
    },
    size: {
      type: [Number, String],
      default: 24,
    },
  })

  const { svg } = await http.get(
    `http://toybox.design/api/v1/icons/${props.name}?size=${props.size}`
  )
</script>

<template>
  <div v-html="svg"></div>
</template>
```

Icon color can be controlled with CSS or Tailwind classes:

```vue
<Icon name="star" class="text-blue-400" />
```
