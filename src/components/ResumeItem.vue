<template>
  <div class="item">
    <div class="details">
      <h3>
        <slot name="position"></slot>
        <span><slot name="location"></slot></span>
      </h3>
      <slot name="yearFromTo"></slot>
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


h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }
}
</style>
