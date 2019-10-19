<template>
  <div class="card float-card">
    <div class="card-image">
      <figure class="image is-4by3">
        <!-- <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"> -->
        <img :src="image" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ name }}</p>
          <p class="subtitle is-6">{{ role }}</p>
        </div>
      </div>
      <div class="content">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroCard',
  props: {
    description: String,
    difficulty: Number,
    image: String,
    name: String,
    role: String,
  },
};
</script>

<style lang="scss">
$defaultDuration: .3s;

@mixin hideTapHighlightColor() {
  //Prevent highlight colour when element is tapped
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}

@mixin hardwareAccel() {
  //Improve performance on mobile/tablet devices
  transform: translateZ(0);
}

@mixin improveAntiAlias() {
  //Improve aliasing on mobile/tablet devices
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
}

.float-card {
  display: inline-block;
  transition-duration: $defaultDuration;
  transition-property: transform;

  @include hideTapHighlightColor();
  @include hardwareAccel();
  @include improveAntiAlias();

  &:hover {
    transform: translateY(-5px);
  }
}
</style>
