<template>
  <div class="home">
    <h1> Liste des questionnaires disponible</h1>
    <span id="subtitle">Choisir le questionnaire souhaité pour le patient</span><br><br>

    <el-row :gutter="20">
      <el-col :span="8">
        <div @click="startQuestionnaire()">
          <el-card shadow="hover">
            <img
              src="@/assets/images/NFS.jpg"
              class="card-image">
            <div class="card-title">
              <span>Oswestry Disability Index</span>
            </div>
          </el-card>
        </div>
      </el-col>

      <el-col
        v-for="o in 6"
        :span="8"
        :key="o">
        <el-card shadow="hover">
          <img
            :src="'http://lorempixel.com/300/200/cats/' + (o + 2)"
            class="card-image">
          <div class="card-title">
            <span>Questionnaire test n° {{ o }}</span>
          </div>
        </el-card>
      </el-col>

    </el-row>

  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    startQuestionnaire() {
      this.$router.push("questionnaire");
    }
  }
};
</script>

<style>
.card-image {
  height: 250px;
  width: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.el-card {
  margin-bottom: 20px;
  cursor: pointer;
}

.card-title {
  font-weight: bold;
  padding: 14px;
  text-align: center;
}
</style>
