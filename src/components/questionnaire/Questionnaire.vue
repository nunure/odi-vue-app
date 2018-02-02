<template>
  <div class="qcm">
    <h1> Oswestry disability index [ODI]</h1>
    <question>
      <question-slide class="carousel" v-for="(subjects, title, index) in questions" :key="index"
      :index="index">
        <h5>{{ title }} </h5>
        <!--{{ addPickedId() }}-->
        <ul>
          <div class="form-check" v-for="(subjects, id) in subjects" :key="id">
            <label class="form-check-label">
              <input class="form-check-input" type="radio" :name="index" >
                {{ subjects }}
            </label>
          </div>
        </ul>
      </question-slide>
    </question>
  </div>
  <!--
  <div>
    <h1> Oswestry disability index [ODI]</h1>
    <div v-for="(subjects, title, index) in questions" :key="index">
      <h5>{{ title }} </h5>
      {{ addPickedId() }}
      <ul>
        <div class="form-check" v-for="(subjects, id) in subjects" :key="id">
          <label class="form-check-label">
            <input class="form-check-input" type="radio" :name="index" >
              {{ subjects }}
          </label>
        </div>
      </ul>
    </div>
    <button type="button" class="btn btn-lg btn-primary">Valider</button>
  </div>-->

</template>

<script>
import Question from '@/components/questionnaire/Question';
import QuestionSlide from '@/components/questionnaire/QuestionSlide';
import questions from '@/assets/data/odi.json';

export default{
  data() {
    return {
      questions,
      answers: [],
    };
  },
  components: {
    Question,
    QuestionSlide,
  },
};


/*
import questions from '@/assets/data/odi.json';

export default{
  data() {
    return {
      questions,
      checked: [],
    };
  },
 addToArray() {
    for (let i = 0; i < this.question.length; i++) {
      this.question[i].push({ test: 'Yeey it works!' });
      for (let j = 0; j < this.question[i].choice_in_random_order.length; j++) {
        this.question[i].choice_in_random_order[j].push({ is_click: false });
      }
    }
  },
  methods: {
    addPickedId() {
      alert('polo');
    },
  },
}; */
</script>

<style scoped>
  .carousel {
     left: 0;
     right: 0;
     width: 100%;
     text-align: left;
     padding-left: 3em;
     padding-right: 3em;
  }

button {
  margin-bottom: 20px;
  margin-right: 50%;
  margin-left: 50%;
}

h5 {
  margin-top: 30px;
}

</style>
