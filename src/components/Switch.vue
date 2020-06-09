<template>
  <div class="container">
    <div class="switch" aria-label="Switch Web Illustration Exercise">
      <div class="controller left">
        <div class="minus"></div>
        <joystick></joystick>
        <buttons isDpad></buttons>
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
        <div class="plus-container">
          <div class="plus"></div>
        </div>
        <buttons
          up="X"
          right="A"
          down="B"
          left="Y"
          font="0.85em Lato"
          font-url="/font/Lato/Lato-Regular.ttf"
        ></buttons>
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
import Buttons from "./Buttons";

export default {
  name: "SwitchIllustration",
  components: {
    Joystick,
    Buttons
  },
  }
};
</script>

<style lang="scss" src="../switch.scss"></style>
