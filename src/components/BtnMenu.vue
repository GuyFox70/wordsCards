<template>
  <nav class="top__menu menu">
    <div class="menu__btn">Menu</div>

    <ul class="sub-menu__list">

      <li class="sub-menu__item speechPart">
        <span class="hasSubMenu">speech parts</span>

        <!-- <ul class="submenu__items">
          <li class="submenu__item">nouns</li>
          <li class="submenu__item">adjectives</li>
          <li class="submenu__item">verbs</li> 
        </ul> -->
      </li>

      <li class="sub-menu__item">
        <span>example</span>
      </li>
      <li class="sub-menu__item">
        <span>example</span>
      </li>
      <!-- <li class="menu__item border">
        <div class="submenu__itemName">example</div>
      </li> -->
      <!-- <li class="menu__item border">
        <div class="submenu__itemName">example</div>
      </li> -->
      <!-- <li class="menu__item border">
        <div class="submenu__itemName">example</div>
      </li> -->
      <!-- <li class="menu__item border">
        <div class="submenu__itemName">example</div>
      </li> -->
    </ul>
  </nav> 
</template>
<script>
  export default {
    name: 'top-btn-menu',
    data() {
      return {}
    },
    methods: {
      
    },
  }
</script>
<style scoped>
  .menu {
    width: 70px;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .menu__btn {
    border: 1px solid transparent;
    width: 100%;
    height: 30px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .menu:hover .menu__btn {
    border: 1px solid var(--white);
  }
  .top__menu:hover .sub-menu__list {
    display: block;
  }
  .sub-menu__list {
    display: none;
    padding: 10px 0 0 0;
    position: absolute;
    top: 40px;
    left: 0;
    z-index: 1;
  }
  .sub-menu__list>li {
    width: 200px;
    background: var(--bg-color-sub-list);
    box-shadow: 1px 1px 2px var(--shadow-dark);
    cursor: pointer;
    padding: 3px;
  }
  .sub-menu__item>span {
    display: block;
    width: 90%;
    height: 30px;
    margin: 0 auto;
    border: 1px solid transparent;
    padding: 0 0 0 3px;

    position: relative;
  }
  .hasSubMenu:after {
    content: '\27A4';

    position: absolute;
    top: 1px;
    right: 0;
  }
  .sub-menu__item:hover>span {
    border: 1px solid var(--white);
  }
</style>