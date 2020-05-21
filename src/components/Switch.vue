<template>
  <div class="container">
    <div class="switch" aria-label="Switch Web Illustration Exercise">
      <div class="controller left">
        <div class="minus"></div>
        <div class="joystick"></div>
        <div class="button-container">
          <div class="row">
            <div class="button up"><span></span></div>
          </div>
          <div class="row">
            <div class="button left"><span></span></div>
            <div class="button right"><span></span></div>
          </div>
          <div class="row">
            <div class="button down"><span></span></div>
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
            <div class="button x"><span>X</span></div>
          </div>
          <div class="row">
            <div class="button y"><span>Y</span></div>
            <div class="button a"><span>A</span></div>
          </div>
          <div class="row">
            <div class="button b"><span>B</span></div>
          </div>
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
