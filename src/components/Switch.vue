<template>
  <div class="container">
    <div class="switch" aria-label="Switch Web Illustration Exercise">
      <div class="controller left">
        <div class="minus"></div>
        <joystick></joystick>
        <div class="button-container">
          <div class="row">
            <div class="button arrow up"></div>
          </div>
          <div class="row">
            <div class="button arrow left"></div>
            <div class="button arrow right"></div>
          </div>
          <div class="row">
            <div class="button arrow down"></div>
          </div>
        </div>
        <div class="screenshot"></div>
        <div class="bumper left"></div>
      </div>

      <div class="screen-container">
        <div class="glass">
          <div class="screen"></div>
        </div>
        <div class="volume left"></div>
        <div class="volume right"></div>
      </div>

      <div class="controller right">
        <div class="plus-container"><div class="plus"></div></div>
        <div class="button-container">
          <div class="row">
            <div class="button letter x up"></div>
          </div>
          <div class="row">
            <div class="button letter y left"></div>
            <div class="button letter a right"></div>
          </div>
          <div class="row">
            <div class="button letter b down"></div>
          </div>
        </div>
        <joystick></joystick>
        <div class="home"></div>
        <div class="bumper right"></div>
      </div>
    </div>

    <div class="switch-shadow"></div>
  </div>
</template>

<script>
import Joystick from "./Joystick";

export default {
  name: "SwitchIllustration",
  components: {
    Joystick
  }
};
</script>

<style lang="scss" src="../switch.scss"></style>
