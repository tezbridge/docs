<template>
  <div>
    <button @click="is_shown = !is_shown">{{is_shown ? 'Hide' : 'Show'}} screenshot record</button>
    <img :src="src" v-if="is_shown" />
  </div>
</template>

<script>
export default {
  props: ['src'],
  data() {
    return {
      is_shown: false
    }
  }
}
</script>

<style scoped>
button { margin-bottom: 8px; transition: all 0.2s; cursor: pointer; border: 2px solid #3e8daf; padding: 4px 8px; border-radius: 4px; background: #e8eff7; color: #3e6baf; outline: none;}
button:hover { color: white; background: #3e7baf }
</style>