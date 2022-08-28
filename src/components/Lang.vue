<template>
  <div class="top__lang lang">
    <div class="lang__btn">Lang</div>
    
    <div class="lang__list">
      <div class="lang__item">
        <input type="radio" name="lang" id="eng" checked/>
        <label for="eng">English</label>
      </div>
      <div class="lang__item">
        <input type="radio" name="lang" id="ru"/>
        <label for="ru">Russian</label>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'lang-btn',
    data() {
      return {
        
      }
    },
    methods: {
      
    },
  }
</script>
<style scoped>
  @import url('../assets/css/lang.css');
</style>