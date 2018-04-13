<template>
  <div class="carousel">
    <slot></slot>
    <i class="carousel__nav carousel__next" @click.prevent="next"></i>
    <button class="carousel__nav carousel__next btn-circle btn-default " @click.prevent="next">
      <i class="fas fa-chevron-right fa-3x"></i>
    </button>
    <button class="carousel__nav carousel__prev btn-circle btn-default " @click.prevent="prev">
      <i class="fas fa-chevron-left fa-3x"></i>
    </button><!--
    <div class="carousel__pagination">
      <button class="btn-default" v-for="n in slidesCount" :key="n" @click="goto(n-1)"
      :class="{active: n - 1 === index}"></button>
    </div>-->
  </div>
</template>

<script>
export default{
  data() {
    return {
      index: 0,
      slides: [],
      direction: 'right',
    };
  },
  computed: {
    slidesCount() {
      return this.slides.length;
    },
  },
  methods: {
    next() {
      /*
      // Log the kind of error
      console.log('Error :', this.$parent.$refs.vfg[this.index].errors);
      // Call the validation function, return true or false
      console.log('Validate :', this.$parent.$refs.vfg[this.index].validate());
      */
      if (this.$parent.$refs.vfg[this.index].validate()) {
        this.direction = 'right';
        this.index += 1;
      }
      if (this.index >= this.slidesCount) {
        // This is the end of the questionnaire
        this.index = 0;
      }
    },
    prev() {
      this.index -= 1;
      this.direction = 'left';
      if (this.index < 0) {
        this.index = this.slidesCount - 1;
      }
    },
    goto(index) {
      this.direction = index > this.index ? 'right' : 'left';
      this.index = index;
    },
  },
  mounted() {
    this.slides = this.$children;/*
    this.slides.forEach((slide, i) => {
      slide.index = i;
    }); */
  },
};
</script>

<style scoped>
  .carousel {
    position: relative;
    overflow: hidden;
  }

  .carousel__nav {
    position: absolute;
    top: 50%;
    margin-top: -31px;
    left: 10px;
  }

  .carousel__nav.carousel__next {
    right: 10px;
    left: auto;
  }

  .btn-circle {
    width: 4em;
    height: 4em;
    text-align: center;
    padding: 6px 0;
    border-radius: 50%;
    background: 00;
    border: transparent;
  }

  .btn-default:focus {
    outline: none;  /* Permet de ne pas afficher  l'encart bleu après avoir cliqué sur le bouton */
  }

  .btn-default:hover, .btn-default:active, .btn-default.active, .open .dropdown-toggle.btn-default {
    color: #333;
    background-color: #ebebeb;
    border-color: #adadad;
    text-decoration: none;
    cursor: pointer;   /* Affiche une main pour indiquer l'interactivité */
  }

  .carousel__pagination {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    text-align: center;
  }

  .carousel__pagination button {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: #000;
    opacity: 0.8;
    border-radius: 50%;
  }

</style>
