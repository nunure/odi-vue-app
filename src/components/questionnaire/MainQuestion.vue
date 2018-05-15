<template>
  <div>
    <div
      class="carousel"
      v-for="questions in datas"
      :key="questions.page">
      <form>
        <div
          v-for="question in questions.fields"
          :key="question.name">
          <label>{{ question.label }} :</label>
          <!-- radio button -->
          <div v-if="question.type === 'radio'">
            <div
              v-for="input in question.values"
              :key="input.value">
              <input
                type="radio"
                :name="question.name"
                :value="input.value">
              {{ input.name }}<br>
            </div>
          </div>
          <!-- input type text -->
          <div v-else-if="question.type === 'input_string'">
            <input
              type="text"
              :name="question.name"
              :placeholder="question.placeholder">
          </div>
          <!-- input type number -->
          <div v-else-if="question.type === 'input_number'">
            <input
              type="number"
              :name="question.name"
              :placeholder="question.placeholder">
          </div>
          <!-- input type date, max is date of the day for birth day -->
          <div v-else-if="question.type === 'date'">
            <input
              type="date"
              :name="question.name"
              min="1900-01-01"
              :max="getDate()">
          </div>
          <!-- input type select -->
          <div v-else-if="question.type === 'select'">
            <select name="test">
              <option value="" selected disabled hidden> - </option>
              <option
                v-for="input in question.values"
                :key="input.value"
                :value="input.value">
                {{ input.name }}
              </option>
            </select><br>
          </div>
          <!-- input type date, max is date of the day for birth day -->
          <div v-else-if="question.type === 'range'">
            <input
              type="range"
              :name="question.name">
          </div>
          <div v-else>
            <p>v else: {{ question.type }}</p>
          </div>
        </div>
      </form>
    </div>
    <h3>datas</h3>
    <p>{{ datas }}</p>
    <h3>slides</h3>
    <p>{{ slides }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datas: [],
      slides: {},
      date: ""
    };
  },
  created() {
    // get all questionnaire
    this.$http.get("http://localhost:3000/questions").then(
      response => {
        this.datas = response.data;
        this.slides = Object.keys(this.datas).length;
      },
      response => {
        // @TODO: handle http error
        console.error(response);
      }
    );
    // get a new empty model for responses
    this.$http.get("http://localhost:3000/answers/createEmpty").then(
      response => {
        this.answer = response.data;
      },
      response => {
        // @TODO: handle http error
        console.error(response);
      }
    );
  },
  methods: {
    getDate: function() {
      function pad(number) {
        if (number < 10) {
          return "0" + number;
        }
        return number;
      }
      var date_tmp = new Date();

      return (
        pad(date_tmp.getFullYear()) +
        "-" +
        pad(date_tmp.getMonth() + 1) +
        "-" +
        pad(date_tmp.getDate())
      );
    }
  }
};
</script>
