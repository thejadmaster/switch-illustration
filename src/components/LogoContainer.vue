<template>
  <div class="logos-container">
    <a href="https://sass-lang.com/" target="_blank">
      <div ref="sass" class="sass logo-container">
        <img
          class="sass-logo logo"
          src="img/Sass-Logo_Black.png"
          alt="Sass Homepage"
        />
        <font-awesome-icon class="my-icon" icon="external-link" />
      </div>
    </a>
    <a
      href="https://github.com/thejadmaster/switch-illustration"
      target="_blank"
    >
      <div ref="github" class="github logo-container">
        <img
          class="github-logo logo"
          src="img/GitHub_Logo.png"
          alt="Switch Illustration GitHub Repository"
        />
        <img
          class="github-octocat logo"
          src="img/Octocat.png"
          alt="Switch Illustration GitHub Repository"
        />
        <font-awesome-icon class="my-icon" icon="external-link" />
      </div>
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <div ref="vue" class="vue-logo-container logo-container">
        <img class="logo" src="img/vue_logo.png" alt="VueJS Homepage" />
        <div class="vue-text">Vue.js</div>
        <font-awesome-icon class="my-icon" icon="external-link" />
      </div>
    </a>
  </div>
</template>

<script>
module.exports = {
};
</script>
