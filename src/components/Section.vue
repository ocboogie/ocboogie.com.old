<template>
  <div class="full-section">
    <div class="has-text-centered">
      <slot></slot>
    </div>
  </div>
</template>
<style scoped lang="scss">
.full-section {
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 100vh;
}
</style>
