<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="mainNavbar">
    <div class="navbar-brand" href="#">
      <h2 class="title">
        Eamon Mikulec
        <small class="subtitle text-muted">Frontend web developer</small>
      </h2>
    </div>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link active" data-scroll="true" href="#about">About me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-scroll="true" href="#skills">My skills</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<style scoped lang="scss">
.navbar {
  padding: 0;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  .navbar-brand {
    padding-bottom: 0;
    padding-right: 1rem;
    .subtitle {
      font-size: 1.25rem;
      font-weight: 400;
      line-height: 1.25;
      display: block;
    }
  }
  .nav-item {
    font-size: 1.5rem;
  }
}
</style>
