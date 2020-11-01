<template>
  <button class="btn-red">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style scoped>
.btn-red {
  @apply bg-red-700 text-white font-bold py-2 px-4 rounded;
}
.btn-red:hover {
  @apply bg-red-700;
}
</style>