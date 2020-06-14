<template>
  <div class="container">
    <div
      class="switch"
      v-on:click="toggleBounce"
      aria-label="Switch Web Illustration Exercise"
    >
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
        <buttons up="X" right="A" down="B" left="Y"></buttons>
        <joystick></joystick>
        <div class="home">
          <div class="home-icon"></div>
        </div>
        <div class="bumper right"></div>
      </div>
    </div>

    <div class="switch-shadow"></div>

    <div class="built-in">Built In...</div>
    <logo-container></logo-container>
  </div>
</template>

<script>
import Joystick from './Joystick';
import Buttons from './Buttons';
import LogoContainer from './LogoContainer';

export default {
  name: 'SwitchIllustration',
  components: {
    Joystick,
    Buttons,
    LogoContainer,
  },
  data() {
    return {
      bounceRunning: true,
      switchAnimationState: 'running, running',
      switchShadowAnimationState: 'running, running',
    };
  },
  methods: {
    toggleBounce: function() {
      if (this.bounceRunning) {
        this.switchAnimationState = 'paused, paused';
        this.switchShadowAnimationState = 'paused, paused';
      } else {
        this.switchAnimationState = 'running, running';
        this.switchShadowAnimationState = 'running, running';
      }
    },
  },
};
</script>

<style lang="scss" src="../switch.scss"></style>
