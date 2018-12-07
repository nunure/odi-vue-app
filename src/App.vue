<template>
  <el-container id="app">
    <app-nav
      :auth="auth"
      :authenticated="authenticated" />

    <el-main>
      <el-row
        :gutter="20"
        type="flex"
        class="main-body"
        style="margin: 0px">
        <el-col
          :span="5"
          class="hidden-sm-and-down" />
        <el-col
          :span="18"
          style="width: 100%">
          <router-view
            :auth="auth"
            :authenticated="authenticated" />
        </el-col>
        <el-col
          :span="5"
          class="hidden-sm-and-down" />
      </el-row>
    </el-main>

    <el-footer height="100%">
      <app-footer />
    </el-footer>
  </el-container>

</template>


<script>
import AppNav from "@/components/AppNav";
import AppFooter from "@/components/AppFooter";
import AuthService from "@/auth/AuthService";

const auth = new AuthService();

const { login, logout, authenticated, authNotifier } = auth;

export default {
  name: "App",
  components: { AppNav, AppFooter },
  data() {
    authNotifier.on("authChange", authState => {
      this.authenticated = authState.authenticated;
    });
    return {
      auth,
      authenticated
    };
  },
  methods: {
    login,
    logout
  }
};
</script>
