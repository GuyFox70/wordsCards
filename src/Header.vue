<template>
  <header class="top">
    <menu-btn/>
    <switch-pages :sizeCollection="sizeCollection"/>
    <top-bar @view="view"/>
</header>
</template>
<script>
  import MenuBtn from '@/components/Menu.vue';
  import SwitchPages from '@/components/SwitchPages.vue';
  import TopBar from '@/components/TopBar.vue';

  export default {
    components: { MenuBtn, SwitchPages, TopBar },
    name: 'page-header',
    props: {
      sizeCollection: {
        type: Number,
        required: true,
        default: 0,
      }
    },
    data() {
      return {}
    },
    methods: {
      view(data) {
        this.$emit('view', data);
      }
    },
  }
</script>
<style scoped>
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 25px;
    height: 50px;
    box-shadow: 0px 1px 7px rgba(0,0,0,.3);

    font-size: 18px;
  }
</style>