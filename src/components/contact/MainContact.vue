<template>
  <div>
    <h1>test</h1>
    <contact>
      <contact-slide class="carousel" v-for="question in datas" :key="question.page"
      :index="question.page">
        <h5>{{ question.page + 1 }} : {{ question.label }} </h5>
        <ul>
          <div class="form-check" v-for="input in question.values" :key="input.value">
            <label class="form-check-label">
              <input class="form-check-input" type="radio" :name="question.label"
              :value="input.value">
                {{ input.name }}
            </label>
          </div>
        </ul>
      </contact-slide>
    </contact>
    <br/>
    <p>
      {{ datas }}
    </p>
  </div>
</template>

<script>
import Contact from '@/components/contact/Contact';
import ContactSlide from '@/components/contact/ContactSlide';

export default{
  data() {
    return {
      datas: [],
      slides: null,
    };
  },
  components: {
    Contact,
    ContactSlide,
  },
  created: function () {
  this.$http.get('http://localhost:3000/questions')
    .then(response => {
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
