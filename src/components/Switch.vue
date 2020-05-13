<template>
  <div class="container">
    <div class="switch" aria-label="Switch Web Illustration Exercise">
      <div class="controller left">
        <div class="minus"></div>
        <div class="joystick"></div>
        <div class="dpad">
          <div class="button up"></div>
          <div class="button right"></div>
          <div class="button down"></div>
          <div class="button left"></div>
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
        <div class="plus"></div>
        <div class="button-container">
          <div class="button x"></div>
          <div class="button y"></div>
          <div class="button a"></div>
          <div class="button b"></div>
        </div>
        <div class="joystick"></div>
        <div class="home"></div>
        <div class="bumper right"></div>
      </div>
    </div>

    <div class="switch-shadow"></div>
  </div>
</template>

<script>
module.exports = {};
</script>

<style lang="scss" src="../switch.scss"></style>
