<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="header">
    <div class="profile-image">
      <img src="@/assets/images/profile.jpg" />
    </div>
    <nav class="navigation roboto-mono text-xl lg:text-2xl">
      <RouterLink to="/home">Home</RouterLink><br>
      <RouterLink to="/resume">Resume</RouterLink><br>
      <RouterLink to="/projects">Projects</RouterLink>
    </nav>
  </header>
  <div class="views-wrapper">
    <RouterView />
  </div>
</template>
