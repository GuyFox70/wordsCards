<template>
  <nav class="top__menu menu">
    <div class="menu__btn">Menu</div>

    <ul class="sub-menu__list">

      <li class="sub-menu__item showSubMenu" v-for="item in menuItems" :key="item.id">
        <span class="hasSubMenu">{{ item.name }}</span>

        <ul class="sub-sub-menu__list" v-if="item.subitems">
          <li class="sub-sub-menu__item" v-for="subitem in item.subitems" :key="subitem.id">
            <span :id="subitem.id" @click="getPartSpeechId">{{ subitem.name }}</span>
          </li>
        </ul>
      </li>
    </ul>
  </nav> 
</template>
<script>
  export default {
    name: 'menu-btn',
    data() {
      return {
        menuItems: [
          { id: 0, name: 'part speech',
            subitems: [
              { id: 'n', name: 'nouns' },
              { id: 'adj', name: 'adjectives' },
              { id: 'v', name: 'verbs' },
            ]
          },
          { id: 1, name: 'example 2' },
          { id: 2, name: 'example 3' },
          { id: 3, name: 'example 4' },
          { id: 4, name: 'example 5' },
          { id: 5, name: 'example 6' },
          { id: 6, name: 'example 7' },
        ],
      }
    },
    methods: {
      getPartSpeechId(e) {
        const target = e.target;
        // console.log(target.id);
      }
    },
  }
</script>
<style scoped>
  @import url('../assets/css/menu.css');
</style>