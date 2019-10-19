<template>
  <div class="card">
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
