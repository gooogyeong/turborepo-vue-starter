<template>
  <h1>App 2</h1>
  <div>greetings: {{ sayHi() }}</div>
  <common-button
      btn-text="Common Button imported by App 2"
      @click="onClick"
  />
</template>

<script lang="ts" setup>
import { sayHi } from '../../../packages/util/index.js'
import { CommonButton } from 'ui/src/index.vue'

const onClick = () => {
  console.log('caught click event!')
}
</script>

<style>
</style>
