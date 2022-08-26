<template>
  <button @click="onClick">{{ btnText }}</button>
</template>

<script lang="ts" setup>
const emit = defineEmits(['click'])

interface Props {
  btnText: string
}

const { btnText = 'Common Button' } = defineProps<Props>()

const onClick = function () {
  console.log('clicked')
  emit('click')
}
</script>

<style scoped>
button {
  background-color: blue;
  color: white;
  border: none;
  padding: 0.2rem 0.4rem;
}
</style>
