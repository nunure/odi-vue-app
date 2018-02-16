<template>
  <div class="carousel">
    <slot></slot>
    <i class="carousel__nav carousel__next" @click.prevent="next"></i>
    <button class="carousel__nav carousel__next btn-circle btn-default " @click.prevent="next">
      <i class="fas fa-chevron-right fa-3x"></i>
    </button>
    <button class="carousel__nav carousel__prev btn-circle btn-default " @click.prevent="prev">
      <i class="fas fa-chevron-left fa-3x"></i>
    </button>
    <!--<div class="carousel__pagination">
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
      if (this.index === 0) {
        this.index += 1;
        this.direction = 'right';
      } else if (this.$parent.answers[`question_${this.index}`] != null) {
        this.index += 1;
        this.direction = 'right';
        if (this.index >= this.slidesCount) {
          this.index = this.slidesCount - 1;
          this.calcOdi();
        }
      }
    },
    prev() {
      this.index -= 1;
      this.direction = 'left';
      if (this.index < 0) {
        this.index = 0;
      }
    },
    goto(index) {
      this.direction = index > this.index ? 'right' : 'left';
      this.index = index;
    },
    calcOdi() {
      this.$parent.markOdi = 0;
      for (const key in this.$parent.answers) {
        this.$parent.markOdi = this.$parent.markOdi + this.$parent.answers[key];
      }
      this.$parent.markOdi = (this.$parent.markOdi / 10) * 20;
      alert(`${this.$parent.markOdi}%`);
    },
  },
  mounted() {
    this.slides = this.$children;
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
    opacity: 0.6;
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
    bottom: 0px;
    left: 0;
    right: 0;
    text-align: center;
  }

  .carousel__pagination button {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: #000;
    opacity: 0.6;
    border-radius: 50%;
    bottom: 30px;
  }

</style>
