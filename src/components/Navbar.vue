<template>
  <nav class="navbar is-fixed-top has-shadow" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-title">
        <h1 class="title">Eamon Mikulec</h1>
        <h2 class="subtitle">Frontend web developer</h2>
      </div>
      <div v-on:click="hamburgerMenmOpen = !hamburgerMenmOpen" class="navbar-burger" :class="{ 'is-active': hamburgerMenmOpen }" role="button" aria-label="menu" aria-expanded="false">
        <div>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>
    </div>

    <div :class="{ 'is-active': hamburgerMenmOpen }" class="navbar-menu">
      <div class="navbar-start" id="scrollspy">
        <a class="navbar-item is-active" data-scroll="true" href="#about">
          About me
        </a>
        <a class="navbar-item" data-scroll="true" href="#skills">
          My skills
        </a>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  mounted() {
    const offset = 200;
    const scrollspyElem = document.getElementById("scrollspy");
    let lastIndex = 0;
    window.addEventListener("scroll", () => {
      const index = Math.round((window.scrollY + offset) / window.innerHeight);
      if (index === lastIndex) {
        return;
      }
      scrollspyElem.children[lastIndex].classList.remove("is-active");
      lastIndex = index;
      scrollspyElem.children[index].classList.add("is-active");
    });
  },
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
  padding: 0 0.5rem;
  padding-right: 1rem;
  .title {
    font-size: 2rem;
    margin-bottom: 1.2rem;
  }
}
</style>
