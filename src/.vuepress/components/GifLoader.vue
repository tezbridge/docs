<template>
  <div>
    <button @click="toggleGif">
      {{is_shown ? 'Hide' : 'Show'}} screenshot animation
      <span v-if="is_shown && progress !== 100">{{progress}}%</span>
    </button>
    <img :src="blob_url" v-if="is_shown" />
  </div>
</template>

<script>
export default {
  props: ['src'],
  data() {
    return {
      is_shown: false,
      progress: 0,
      blob_url: '',
      toggling: false
    }
  },
  methods: {
    async toggleGif() {
      if (this.toggling)
        return false

      this.toggling = true

      this.is_shown = !this.is_shown
      if (this.blob_url){
        this.toggling = false
        return false
      }

      const response = await fetch(this.src)
      const reader = response.body.getReader()
      const content_len = +response.headers.get('Content-Length')

      const bytes = []
      let curr_len = 0

      while(true) {
        const {done, value} = await reader.read()

        if (done) {
          break
        }

        Array.from(value).forEach(x => bytes.push(x))
        curr_len += value.length

        this.progress = Math.floor(curr_len / content_len * 100)
      }

      const base64_img = btoa(bytes.map(x => String.fromCharCode(x)).join(''))
      this.blob_url = 'data:image/gif;base64,' + base64_img

      this.toggling = false
    }
  }
}
</script>

<style scoped>
button { margin-bottom: 8px; transition: all 0.2s; cursor: pointer; border: 2px solid #3e8daf; padding: 4px 8px; border-radius: 4px; background: #e8eff7; color: #3e6baf; outline: none;}
button:hover { color: white; background: #3e7baf }
img {border: 1px dotted #3e7baf;}
</style>