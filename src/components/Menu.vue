<template>
  <nav class="top__menu menu">
    <div class="menu__btn">Menu</div>

    <ul class="sub-menu__list">

      <li class="sub-menu__item showSubMenu">
        <span class="hasSubMenu">speech parts</span>

        <ul class="sub-sub-menu__list">
          <li class="sub-sub-menu__item"><span>nouns</span></li>
          <li class="sub-sub-menu__item"><span>adjectives</span></li>
          <li class="sub-sub-menu__item"><span>verbs</span></li> 
        </ul>
      </li>

      <li class="sub-menu__item">
        <span>example 2</span>
      </li>
      <li class="sub-menu__item">
        <span>example 3</span>
      </li>
      <li class="sub-menu__item">
        <span>example 4</span>
      </li>
      <li class="sub-menu__item">
        <span>example 5</span>
      </li>
      <li class="sub-menu__item">
        <span>example 6</span>
      </li>
      <li class="sub-menu__item">
        <span>example 7</span>
      </li>
    </ul>
  </nav> 
</template>
<script>
  export default {
    name: 'menu-btn',
    data() {
      return {}
    },
    methods: {
      
    },
  }
</script>
<style scoped>
  @import url('../assets/css/btnMenu.css');
</style>