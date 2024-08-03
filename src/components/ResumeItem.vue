<template>
  <div class="item">
    <div class="details">
      <h3>
        <span class="underlined md:text-2xl"><slot name="position"></slot></span>
        <span class="text-black location-wrapper"> - <slot name="location"></slot></span>
      </h3>
      <div class="time-wrapper"><slot name="yearFromTo"></slot></div>
      <slot name="description"></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  position: relative;
  margin-bottom: 40px;
}
  .item:last-of-type {
    margin-bottom: 0;
  }

.time-wrapper{
  margin-bottom: 20px;
  font-weight: 500;
}
h3 {
  font-size: 1.2rem;
  font-weight: 500;
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }
}
</style>
