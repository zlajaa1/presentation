<template>
  <main class="home-page-wrapper">
    <div class="h-screen flex flex-col items-center justify-center relative">
      <div class="max-w-[1200px] mx-auto text-center">
        <p class="text-xl md:text-3xl mb-0">
          Hi, I'm Zlatko
        </p>
        <h1 class="text-5xl md:text-8xl uppercase mb-8 md:mb-0 roboto-slab">
          <span class="highlight">Frontend</span>
          <br>developer
        </h1>
        <p class="text-xl md:text-3xl mb-8">
          <span class="underlined">+8 years</span> of Web development,  curious and playful
          in exploring the internet playground.
        </p>
        <p class="contact uppercase">
          You can contact me on <a href="mailto:vujicic.zlatko@gmail.com" class="link">vujicic.zlatko@gmail.com</a>
        </p>
        <p>
          or <a href="ZlatkoVujicic.pdf" class="link" download>Download resume</a>
        </p>
      </div>
    </div>
  </main>
</template>

<style scoped>
.contact{
  text-align: center;
}
.home-page-wrapper{
  padding: 0 20px 0 20px;
}
@media (min-width: 1024px) {
  .home-page-wrapper{
    width: 100%;
    padding: 0 0 0 100px;
  }
}
</style>
