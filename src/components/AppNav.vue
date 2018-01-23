<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-faded">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
    data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
    aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      <a  v-on:click="setActive('home')" class="navbar-brand" href="/">
        <img src="../assets/images/logo.png" class="ev-appnav__logo"></a>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav">
          <a v-on:click="setActive('home')" class="nav-item nav-link"
          :class="{active: isActive('home')}" href="/">Accueil
          <span class="sr-only">(current)</span></a>
          <a v-on:click="setActive('questionary')" class="nav-item nav-link"
          :class="{active: isActive('questionary')}" href="#">Questionnaire</a>
          <a v-on:click="setActive('contact')" class="nav-item nav-link"
          :class="{active: isActive('contact')}" href="#">Contact</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return { activeItem: 'home' };
  },
  methods: {
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive(menuItem) {
      this.activeItem = menuItem; // no need for Vue.set()
    },
  },
};
</script>

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
