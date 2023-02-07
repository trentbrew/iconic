<script setup>
  const props = defineProps({
    size: {
      type: [Number, String],
      default: 60,
    },
  })
</script>

<template>
  <svg
    id="bear"
    :width="props.size"
    :height="props.size"
    viewBox="0 0 500 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      class="bear__tummy fill-primary"
      cx="248.928"
      cy="308.277"
      r="72.1388"
      fill="#ABABAB"
    />
    <ellipse
      class="bear__leg bear__leg--right fill-primary"
      cx="143.41"
      cy="352.628"
      rx="74.4411"
      ry="49.8832"
      transform="rotate(150 143.41 352.628)"
      fill="#D9D9D9"
    />
    <ellipse
      class="bear__leg bear__leg--left fill-primary"
      rx="74.4411"
      ry="49.8832"
      transform="matrix(0.866025 0.5 0.5 -0.866025 357.515 354.163)"
      fill="#D9D9D9"
    />
    <g class="bear__foot bear__foot--right">
      <ellipse
        class="fill-primary"
        cx="111.549"
        cy="335.137"
        rx="74.4411"
        ry="49.8832"
        transform="rotate(90 111.549 335.137)"
        fill="#D9D9D9"
      />
      <ellipse
        class="fill-primary-focus"
        cx="106.944"
        cy="340.509"
        rx="56.7901"
        ry="38.3717"
        transform="rotate(90 106.944 340.509)"
        fill="#ABABAB"
      />
    </g>
    <g class="bear__foot bear__foot--left">
      <ellipse
        class="fill-primary"
        cx="390.127"
        cy="335.137"
        rx="74.4411"
        ry="49.8832"
        transform="rotate(90 390.127 335.137)"
        fill="#D9D9D9"
      />
      <ellipse
        class="fill-primary-focus"
        cx="395.499"
        cy="340.509"
        rx="56.7901"
        ry="38.3717"
        transform="rotate(90 395.499 340.509)"
        fill="#ABABAB"
      />
    </g>
    <path
      class="bear__arm bear__arm--right fill-primary-focus"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M185.99 224.484C185.99 216.704 186.585 209.062 187.732 201.603C161.487 228.505 145.316 265.28 145.316 305.832C145.316 336.097 154.323 364.259 169.804 387.782L184.275 404.286C191.572 410.149 200.842 413.656 210.931 413.656C234.455 413.656 253.524 394.587 253.524 371.064C253.524 359.014 248.52 348.133 240.478 340.386V339.804C207.206 312.428 185.99 270.934 185.99 224.484Z"
      fill="#C7C7C7"
    />
    <path
      class="bear__arm bear__arm--left fill-primary-focus"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M314.151 224.484C314.151 216.704 313.556 209.063 312.408 201.603C338.654 228.505 354.825 265.28 354.825 305.832C354.825 336.098 345.817 364.259 330.337 387.783L315.866 404.286C308.569 410.148 299.299 413.656 289.209 413.656C265.686 413.656 246.617 394.587 246.617 371.064C246.617 359.014 251.62 348.133 259.663 340.386V339.804C292.934 312.428 314.151 270.934 314.151 224.484Z"
      fill="#C7C7C7"
    />
    <g class="bear__head">
      <g class="bear__ear bear__ear--left">
        <rect
          class="fill-primary"
          x="297.268"
          y="94.1625"
          width="103.604"
          height="103.604"
          rx="51.8018"
        />
        <rect
          class="fill-primary-focus"
          x="321.058"
          y="117.953"
          width="56.7901"
          height="56.7901"
          rx="28.3951"
        />
      </g>
      <g class="bear__ear bear__ear--right">
        <rect
          class="fill-primary"
          x="133.804"
          y="65"
          width="103.604"
          height="103.604"
          rx="51.8018"
          fill="#D9D9D9"
        />
        <rect
          class="fill-primary-focus"
          x="157.595"
          y="88.7904"
          width="56.7901"
          height="56.7901"
          rx="28.3951"
          fill="#ABABAB"
        />
      </g>
      <ellipse
        class="bear__head--nogin fill-primary"
        cx="256.38"
        cy="186.422"
        rx="114.807"
        ry="98.0878"
        transform="rotate(8.48601 256.38 186.422)"
        fill="#D9D9D9"
      />
      <ellipse
        class="bear_head--snoot fill-primary-focus"
        cx="250.022"
        cy="227.375"
        rx="49.1641"
        ry="42.0043"
        transform="rotate(8.48601 250.022 227.375)"
        fill="#ABABAB"
      />
      <ellipse
        class="bear__head--nose fill-black"
        cx="253.244"
        cy="208.35"
        rx="20.1442"
        ry="13.9031"
        transform="rotate(8.48601 253.244 208.35)"
      />
      <rect
        class="bear__head--right-eye fill-black"
        x="199.813"
        y="165.534"
        width="23.023"
        height="23.023"
        rx="11.5115"
        fill="black"
      />
      <rect
        class="bear__head--left-eye fill-black"
        x="291.137"
        y="181.65"
        width="23.023"
        height="23.023"
        rx="11.5115"
      />
    </g>
  </svg>
</template>

<style scoped>
  #bear {
    cursor: pointer;
    --duration: 0.7s;
  }
  #bear g.bear__head {
    transition: var(--duration) cubic-bezier(0.34, 2, 0.25, 0.95);
    transform-origin: 260px 100px;
  }
  #bear g.bear__ear--left {
    transition: var(--duration) cubic-bezier(0.69, -1.07, 0.33, 2);
  }
  #bear g.bear__ear--right {
    transition: var(--duration) cubic-bezier(0.69, -1.07, 0.33, 2);
  }
  #bear:hover g.bear__head {
    transform: rotate(15deg) translate(40px, 3px);
  }
  #bear:hover g.bear__ear--left {
    transform: translate(10px, 10px);
  }
  #bear:hover g.bear__ear--right {
    transform: translate(10px, -8px);
  }
</style>
