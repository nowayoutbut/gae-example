<template>
<article>
  <div>Hello This Page Provieded by Nuxt</div>
  <div>Twitter Key is {{twitterKey}}</div>
</article>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data(){
    return {
      twitterKey: process.env.TWITTER_CONSUMER_KEY || 'Not Defined'
    }
  }
});
</script>
<style scoped>
div {
  font-size: 4em;
}
</style>