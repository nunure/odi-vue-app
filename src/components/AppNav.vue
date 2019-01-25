<template>
  <div class="app-nav">
    <el-row :gutter="20" type="flex" class="main-body" style="margin: 0px">
      <el-col :span="5" class="hidden-sm-and-down" />
      <el-col :span="18" style="width: 100%">
        <el-menu :default-active="activeIndex" :router="true" mode="horizontal">
          <el-menu-item index="/">
            <router-link tag="a" to="/">
              <a class="navbar-brand nav-link">
                <img src="../assets/images/logo.png" class="ev-appnav__logo" />
              </a>
            </router-link>
          </el-menu-item>
          <el-menu-item index="/">Accueil</el-menu-item>
          <el-menu-item v-if="authenticated" index="/questions">
            Questions
          </el-menu-item>

          <el-menu-item
            v-if="!authenticated"
            id="auth-menu"
            index=""
            @click="auth.login()"
          >
            Log In
          </el-menu-item>
          <el-menu-item
            v-if="authenticated"
            id="auth-menu"
            index=""
            @click="auth.logout()"
          >
            Log Out
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="5" class="hidden-sm-and-down" />
    </el-row>
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
  name: "AppNav",
  props: {
    auth: { type: Object, required: true },
    authenticated: { type: Boolean, default: false, required: true }
  },
  data() {
    return {
      activeIndex: "/"
    };
  }
};
</script>

<style scoped>
.el-menu {
  background: #ecf3fa;
}
.ev-appnav__logo {
  width: 40px;
}

#auth-menu {
  float: right;
}
</style>
