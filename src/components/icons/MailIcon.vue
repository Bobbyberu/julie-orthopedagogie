<script setup lang="ts">
defineProps({
  width: String,
  height: String
});
</script>

<template>
  <svg :width=width :height=height viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 22C14.6804 22 13.51 22.639 12.7815 23.6244C13.0832 23.7236 13.3709 23.8822 13.6271 24.1017L36.4207 43.6392C38.4804 45.4046 41.5197 45.4046 43.5794 43.6392L66.3731 24.1017C66.6292 23.8822 66.9169 23.7236 67.2185 23.6245C66.49 22.639 65.3196 22 64 22H16Z" fill="#fff" />
    <path d="M68 29.2926L46.8334 47.4354C42.9012 50.8059 37.0989 50.8059 33.1668 47.4354L12 29.2925V54C12 56.2091 13.7909 58 16 58H64C66.2091 58 68 56.2091 68 54V29.2926Z" fill="#fff" />
  </svg>
</template>

<!-- glyph from https://glyphs.fyi/dir?q=insta&i=envelope&v=bold&w-->