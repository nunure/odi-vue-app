<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-faded">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
    data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
    aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      <router-link tag="a" to="/" >
        <a class="navbar-brand nav-link">
          <img src="../assets/images/logo.png" class="ev-appnav__logo">
        </a>
      </router-link>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav">
          <router-link tag="li" to="/" >
            <a class="nav-item nav-link">Accueil
            <span class="sr-only">(current)</span></a>
          </router-link>
          <router-link tag="li" to="questionnaire" >
            <a class="nav-item nav-link">Questionnaire</a>
          </router-link>
          <router-link tag="li" to="#" >
            <a class="nav-item nav-link">Contact</a>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
/*
  You can use BEM style even though you are scoped. Helps to reason about
  your styles.
*/
.ev-appnav__logo {
  width: 40px;
}
.ev-appnav__search {
  margin-right: 10px;
}
.ev-appnav__logout {
  margin-top: 1px;
}
</style>
