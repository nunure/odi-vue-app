<template>
  <div class="container AppNav">
    <nav class="navbar navbar-expand-lg navbar-light bg-faded">
      <button
        class="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" />
      </button>
      <router-link
        tag="a"
        to="/">
        <a class="navbar-brand nav-link">
          <img
            src="../assets/images/logo.png"
            class="ev-appnav__logo">
        </a>
      </router-link>
      <div
        id="navbarCollapse"
        class="collapse navbar-collapse">
        <div class="navbar-nav">
          <tab name="Accueil" />
          <tab name="Questionnaire" />
          <tab name="Contact" />
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Vue from "vue";

Vue.component("tab", {
  props: {
    name: { type: String, required: true }
  },
  computed: {
    href() {
      return `${this.name.toLowerCase().replace(/ /g, "-")}`;
    }
  },
  template: `
    <router-link tag="li" :to="href">
      <a class="nav-item nav-link" >{{ name }}</a>
    </router-link>
  `
});

export default {
  name: "AppNav"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*
  You can use BEM style even though you are scoped. Helps to reason about
  your styles.
*/
.ev-appnav__logo {
  width: 40px;
}
</style>
