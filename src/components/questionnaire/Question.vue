<template>
  <div class="carousel">
    <slot></slot>
    <i class="carousel__nav carousel__next" @click.prevent="next"></i>
    <button class="carousel__nav carousel__next btn-circle btn-default " @click.prevent="next">
      <i class="fas fa-chevron-right fa-3x"></i>
    </button>
    <button class="carousel__nav carousel__prev btn-circle btn-default" @click.prevent="prev">
      <i class="fas fa-chevron-left fa-3x"></i>
    </button>
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
      if (this.$parent.$refs.vfg[this.index].validate()) {
        this.direction = 'right';
            if (this.index === (this.slidesCount - 1)) {
              // This is the end of the questionnaire
              // PUT result to the back
                this.$http.put('http://localhost:3000/answers', this.$parent.answer).then(response => {
                  // success callback
                  console.log(response);
                }, response => {
                  // @TODO: handle http error
                  console.error(response);
                });
            }
            else {
              this.index += 1;
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
