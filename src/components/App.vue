<template>
  <div id="app">
    <!--<app-nav/>-->
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
