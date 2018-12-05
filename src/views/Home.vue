<template>
  <div class="home">
    <h1> Liste des questionnaires disponible</h1>
    <span id="subtitle">Choisir le questionnaire souhaité pour le patient</span><br><br>

    <el-row :gutter="20">
      <el-col :span="8">
        <div @click="openQuestionnaire('questionnaire')">
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
        v-for="o in 2"
        :span="8"
        :key="o">
        <div @click="openQuestionnaire('empty_question')">
          <el-card shadow="hover">
            <img
              :src="'https://lorempicsum.com/futurama/300/200/' + o "
              class="card-image">
            <div class="card-title">
              <span>Questionnaire n° {{ o }}</span>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col
        v-for="o in 3"
        :span="8"
        :key="o">
        <div @click="openQuestionnaire('empty_question')">
          <el-card shadow="hover">
            <img
              :src="'https://lorempicsum.com/futurama/300/200/' + ( o + 2) "
              class="card-image">
            <div class="card-title">
              <span>Questionnaire n° {{ ( o + 2) }}</span>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col
        v-for="o in 3"
        :span="8"
        :key="o">
        <div @click="openQuestionnaire('empty_question')">
          <el-card shadow="hover">
            <img
              :src="'https://lorempicsum.com/futurama/300/200/' + ( o + 5) "
              class="card-image">
            <div class="card-title">
              <span>Questionnaire n° {{ ( o + 5) }}</span>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col
        v-for="o in 1"
        :span="8"
        :key="o">
        <div @click="openQuestionnaire('empty_question')">
          <el-card shadow="hover">
            <img
              :src="'https://lorempicsum.com/futurama/300/200/' + ( o + 8) "
              class="card-image">
            <div class="card-title">
              <span>Questionnaire n° {{ ( o + 5) }}</span>
            </div>
          </el-card>
        </div>
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
    openQuestionnaire(route) {
      this.$router.push(route);
    }
  }
};
</script>

<style lang="scss">

</style>
