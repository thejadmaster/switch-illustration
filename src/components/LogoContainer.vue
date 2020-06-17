<template>
  <div class="logos-container">
    <a href="https://sass-lang.com/" target="_blank">
      <div ref="sass" class="sass logo-container">
        <img
          class="sass-logo logo"
          srcset="img/Sass-Logo_Black_2x.png 2x, img/Sass-Logo_Black_3x.png 3x"
          src="img/Sass-Logo_Black_1x.png"
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
          srcset="img/GitHub_Logo_2x.png 2x, img/GitHub_Logo_3x.png 3x"
          src="img/GitHub_Logo_1x.png"
          alt="Switch Illustration GitHub Repository"
        />
        <img
          class="github-octocat logo"
          srcset="img/Octocat_2x.png 2x, img/Octocat_3x.png 3x"
          src="img/Octocat_1x.png"
          alt="Switch Illustration GitHub Repository"
        />
        <font-awesome-icon class="my-icon" icon="external-link" />
      </div>
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <div ref="vue" class="vue-logo-container logo-container">
        <img
          class="logo"
          srcset="img/vue_logo_2x.png 2x, img/vue_logo_3x.png 3x"
          src="img/vue_logo_1x.png"
          alt="VueJS Homepage"
        />
        <div class="vue-text">Vue.js</div>
        <font-awesome-icon class="my-icon" icon="external-link" />
      </div>
    </a>
  </div>
</template>

<script>
module.exports = {
  mounted() {
    this.createLogoShadows();
  },
  methods: {
    createLogoShadows: function() {
      this.cloneNodeAndChildren('vue', 'shadow-backdrop');
      this.cloneNodeAndChildren('github', 'shadow-backdrop');
      this.cloneNodeAndChildren('sass', 'shadow-backdrop');
    },
    cloneNodeAndChildren: function(referenceName, addClass) {
      let clone = this.$refs[referenceName].cloneNode(true);
      if (typeof addClass !== 'undefined') {
        clone.classList.add('shadow-backdrop');
      }
      this.$refs[referenceName].appendChild(clone);
    },
  },
};
</script>
