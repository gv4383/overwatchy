<template>
  <div class="card float-transition card-styling">
    <div class="card-image">
      <figure class="image is-4by3">
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

.card-styling {
  width: 100%;
}

.float-transition {
  display: inline-block;
  transition-duration: $defaultDuration;
  transition-property: transform;

  @include hideTapHighlightColor();
  @include hardwareAccel();
  @include improveAntiAlias();

  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
}
</style>
