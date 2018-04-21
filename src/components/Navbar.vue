<template>
  <nav class="navbar is-fixed-top has-shadow">
    <div class="navbar-brand">
      <div class="navbar-title">
        <h1 class="title">Eamon Mikulec</h1>
        <h2 class="subtitle">Frontend web developer</h2>
      </div>
      <div v-on:click="hamburgerMenmOpen = !hamburgerMenmOpen" class="navbar-burger" :class="{ 'is-active': hamburgerMenmOpen }">
        <span></span>
        <span />
        <span />
      </div>
    </div>

    <div :class="{ 'is-active': hamburgerMenmOpen }" class="navbar-menu">
      <div v-scroll-spy-active="{selector: 'a.navbar-item', class: 'is-active'}" v-scroll-spy-link="{selector: 'a.navbar-item'}" class="navbar-start">
        <a class="navbar-item">
          About me
        </a>
        <a class="navbar-item">
          My skills
        </a>
        <a class="navbar-item">
          My projects
        </a>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data: () => ({
    hamburgerMenmOpen: false
  })
};
</script>
<style scoped lang="scss">
.navbar-item {
  font-size: 1.5rem;
}
.navbar-title {
  padding: 0.5rem;
  padding-right: 1rem;
  h1 {
    font-size: 2rem;
  }
}
</style>
