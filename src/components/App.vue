<template>
  <el-container id="app">
    <!--<app-nav/>-->

    <el-main>
      <el-row
        :gutter="20"
        type="flex"
        class="main-body"
        style="margin: 0px"
      >
        <el-col
          :span="5"
          class="hidden-sm-and-down"
        />
        <el-col
          :span="18"
          style="width: 100%"
        ><router-view /></el-col>
        <el-col
          :span="5"
          class="hidden-sm-and-down"
        />
      </el-row>
    </el-main>

    <el-footer height="100%">
      <app-footer />
    </el-footer>
  </el-container>

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
