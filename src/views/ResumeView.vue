<template>
  <main class="container m-auto page-padding">
    <!-- Summary -->
    <div class="mb-12">
      <h2 class="mb-5 highlight inline-block text-4xl roboto-slab">Professional Summary</h2>
      <p class="text-xl">{{ aboutText }}</p>
    </div>
    <!-- # Summary -->
    <!-- Resume -->
    <!-- IF some developer see this an ask himself why I didn't use props on component without slots? -->
     <!-- Answer is I didnt use slot in years so it was fun to play with it 😀 -->
    <div class="mb-12">
      <h2 class="mb-5 highlight inline-block text-4xl roboto-slab">Work Experience</h2>
      <ResumeItem v-for="(item, index) in resumeItems" :key="`${index}-item`">
        <template #position>{{ item.position }}</template>
        <template #location>{{ item.location }}</template>
        <template #yearFromTo>{{ item.yearFromTo }}</template>
        <template #description>{{ item.description }}</template>
      </ResumeItem>
    </div>
    <!-- # Resume -->
  </main>
</template>

<script>
import ResumeItem from '@/components/ResumeItem.vue'
import { ref } from 'vue'

export default {
  components: {
    ResumeItem
  },
  setup() {
    const aboutText = `For last 8 years I've been working on projects scaled from small
                        websites to large applications. Had chance to put my hands on
                        various types of software and tools used in development process.`;
    const resumeItems = [
      {
        position: 'Freelance',
        location: 'Remote',
        yearFromTo: '2016 - Present',
        description: `VueJS based large scale projects, some of interesting are solution
                      for communication between small webshops and major courier
                      services. Lots of websites, UX solutions. Also working via Upwork`,
      },
      {
        position: 'Vitamin2',
        location: 'St. Galen',
        yearFromTo: '2018 - 2020',
        description: `Swiss based marketing company, where we build websites based
                      on GetKirby CMS system, Applicational websites based on VueJS`,
      },
      {
        position: 'TeleGo',
        location: 'Belgrade',
        yearFromTo: '2017 - 2018',
        description: `TeleGo provided services of marketing, developing and maintaining
                      applicational type of projects some of biggest clients are RTS, MTS
                      Telekom, 365 betting`,
      },
      {
        position: 'Pannovate',
        location: 'Belgrade',
        yearFromTo: '2016 - 2017',
        description: `Pannovate is younger sister of Paneleven, a company that distribute
                      Datacard solutions in banking industry. As industry went on web,
                      Pannovate was formed to support upcoming ideas in terms of
                      development and solutions for growing demands by existing clients`,
      },
    ];
    return {
      aboutText,
      resumeItems,
    };
  }
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
