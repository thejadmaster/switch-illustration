<template>
  <div class="button-container">
    <div class="row">
      <div v-bind:class="[isDpad ? arrowClass : letterClass]" class="button up">{{ upButton }}</div>
    </div>
    <div class="row">
      <div v-bind:class="[isDpad ? arrowClass : letterClass]" class="button left">{{ leftButton }}</div>
      <div v-bind:class="[isDpad ? arrowClass : letterClass]" class="button right">{{ rightButton }}</div>
    </div>
    <div class="row">
      <div v-bind:class="[isDpad ? arrowClass : letterClass]" class="button down">{{ downButton }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isDpad: Boolean,
    up: String,
    right: String,
    down: String,
    left: String,
    font: String,
    fontUrl: String
  },
  data() {
    return {
      upButton: "",
      rightButton: "",
      downButton: "",
      leftButton: "",
      arrowClass: "arrow",
      letterClass: "letter"
    };
  },
  created() {
    // TODO: It didn't work! Figure out why!
    if (
      typeof this.font !== "undefined" &&
      typeof this.fontUrl !== "undefined"
    ) {
      const font = new FontFace(this.font, this.fontUrl);
      font.load().then(this.addButtonLetters());
    }
  },
  methods: {
    addButtonLetters() {
      this.upButton = this.up;
      this.rightButton = this.right;
      this.downButton = this.down;
      this.leftButton = this.left;
    }
  }
};
</script>
