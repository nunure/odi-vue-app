<template>
<!-- Fixed navbar -->
<nav class="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse ev-appnav">
  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
  data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
  aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="#"><img src="../assets/images/logo.png" class="ev-appnav__logo"></a>
  <div class="collapse navbar-collapse" id="navbarCollapse">
    <!-- Not logged in -->
    <template>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="nav-link" to="login">Login
          <span class="sr-only">(current)</span></router-link>
        </li>
        <li class="nav-item">
          <router-link to="signup" class="nav-link" href="#">Signup</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://github.com/prograhammer/example-vue-project/blob/master/README.md">
            Tutorial
          </a>
        </li>
      </ul>
    </template>

  </div>
</nav>
</template>

<script>
export default {
  data() {
    return {
      searchText: '',
      searchFlag: '',
    };
  },
  methods: {
    submitSearch() {
      this.$store.commit(
        'APPNAV_SEARCH',
        {
          searchText: this.searchText,
          searchTimestamp: Date.now(),
        },
      );
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
