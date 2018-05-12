<template>
  <div id="app">
    <app-nav/>
    <div class="container app-content">
      <router-view/>
    </div>
    <app-footer/>
  </div>

</template>


<script>
import AppNav from "./AppNav";
import AppFooter from "./AppFooter";

export default {
  name: "App",
  components: { AppNav, AppFooter },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
/*#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/

html {
  position: relative;
  min-height: 100%;
}
body {
  /* Margin bottom by footer height */
  margin-bottom: 60px;
}
.app-content {
  padding: 60px 15px 0;
}
</style>
