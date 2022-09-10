<template>
  <section class="empty">
    <div>empty</div>
  </section>
</template>

<script>
  export default {
    name: 'words-empty',
  }
</script>

<style scoped>
.empty {
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
}

.empty > div {
  font-size: 45px;
  letter-spacing: 1px;
}
</style>