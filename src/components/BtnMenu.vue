<template>
  <div class="top__btnMenu menu">
    <div class="menu__name">Menu</div>

    <div class="menu__wrap-items">
      <ul class="menu__items">

        <li class="menu__item border showSubItems">
          <div class="submenu__itemName speechPart">speech parts</div>
  
          <ul class="submenu__items">
            <li class="submenu__item">nouns</li>
            <li class="submenu__item">adjectives</li>
            <li class="submenu__item">verbs</li> 
          </ul>
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
        <!-- <li class="menu__item border">
          <div class="submenu__itemName">example</div>
        </li> -->
        <!-- <li class="menu__item border">
          <div class="submenu__itemName">example</div>
        </li> -->
      </ul>
    </div>
  </div> 
</template>
<script>
  export default {
    name: 'top-btn-menu',
    data() {
      return {
        css: {
          menuWrapItems: '190px',
          menuItem: '335px',
          submenuItemName: '170px',
          submenuItems: '150px',
        },
      }
    },
    methods: {
      
    },
  }
</script>
<style scoped>
  .menu {
    width: 70px;
    height: 50px;
  }

  .top__btnMenu:hover .menu__name {
    border: 1px solid #d4a373;
  }

  .menu:hover .menu__wrap-items {
    transform: scale(1);
  }

  .menu__name {
    height: 36px;
    cursor: pointer;
    border: 1px solid transparent;
    margin: 7px 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .menu__wrap-items {
    width: v-bind(css.menuWrapItems);
    transform: scale(0);
    border: 1px solid transparent;
    position: relative;
    z-index: 1;
  }

  .menu__items {
    margin: 2px 0 0 0;
    border: 1px solid #e9edc9;
    border-radius: 5px;
    box-shadow: 0px 1px 7px #e9edc9;
    padding: 8px;
  }

  .menu__item {
    height: 30px;
    border-radius: 5px;
    cursor: pointer;

    position: relative;
    z-index: 0;
  }

  .menu__item:hover {
    width: v-bind(css.menuItem);
  }

  .menu__item:not(:last-child) {
    margin-bottom: 5px;
  }

  .submenu__itemName {
    width: v-bind(css.submenuItemName);
    height: 100%;
    line-height: 25px;
    padding: 0 5px;

    position: absolute;
    top: 0;
    left: 0;
  }

  .speechPart:after {
    content: '\27A4';
    margin: 3px 0 0 50px;
    z-index: 1;
  }

  .border:hover .submenu__itemName {
    box-shadow: 0px 1px 7px #e9edc9;
  }

  .showSubItems:hover .submenu__items {
    transform: scale(1);
  }

  .submenu__items {
    width: v-bind(css.submenuItems);
    border: 1px solid #e9edc9;
    border-radius: 5px;
    box-shadow: 0px 1px 7px #e9edc9;
    padding: 7px;
    transform: scale(0);

    position: absolute;
    top: 0;
    right: 0;
    z-index: 5;
  }

  .submenu__item {
    width: 100%;
    height: 30px;

    line-height: 25px;
    padding: 0 5px;
  }

  .submenu__item:not(:last-child) {
    margin-bottom: 5px;
  }

  .submenu__item:hover {
    box-shadow: 0px 1px 7px #e9edc9;
  }
</style>