<template>
  <div class="home">
    <h1>Bienvenue sur l'applcaition d'auto évaluation de votre consulation</h1>
    <span id="subtitle">Commencez par vous connecter:</span> <br /><br />

    <el-button v-if="!authenticated" @click="auth.login()"> Log In </el-button>
    <el-button v-if="authenticated" @click="auth.logout()"> Log Out </el-button>
  </div>
</template>

<script>
export default {
  props: {
    auth: { type: Object, required: true },
    authenticated: { type: Boolean, default: false, required: true }
  },
  data() {
    return {};
  }
};
</script>
