<template>
  <div>
    <h1>test</h1>
    <contact>
      <contact-slide class="carousel" v-for="question in datas" :key="question.page"
      :index="question.page">
        <form>
          <vue-form-generator ref="vfg" :schema="question.template" :model="model" :options="formOptions">
          </vue-form-generator>
        </form>
      </contact-slide>
    </contact>
    <br/>
  </div>
</template>

<script>
import VueFormGenerator from 'vue-form-generator';
import Contact from '@/components/contact/Contact';
import ContactSlide from '@/components/contact/ContactSlide';
import "vue-form-generator/dist/vfg-core.css"

export default {
  components: {
    'vue-form-generator': VueFormGenerator.component,
    Contact,
    ContactSlide,
  },
  data() {
    return {
      model: {
        doctor: null,
        test1: null,
        test2: null,
        odiQuestion1: null,
        odiQuestion2: null,
        odiQuestion3: null,
        odiQuestion4: null,
        odiQuestion5: null,
        odiQuestion6: null,
        odiQuestion7: null,
        odiQuestion8: null,
        odiQuestion9: null,
        odiQuestion10: null,
      },
      datas: [],
      slides: null,
      formOptions: {
        validateAfterLoad: false,
        validateAfterChanged: true,
      },
    };
  },
  created() {
    this.$http.get('http://localhost:3000/questions').then((response) => {
      this.datas = response.data;
      this.slides = Object.keys(this.datas).length;
    });
  },
};
</script>

<style scoped>
.carousel {
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
}
</style>
