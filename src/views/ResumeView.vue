<template>
  <main class="container w-1200">
    <!-- Summary -->
    <div class="mb-12">
      <h2 class="mb-5 highlight inline-block text-4xl roboto-slab">Professional Summary</h2>
      <p class="text-xl" v-html="aboutText"></p>
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
        <template #description><p v-html="item.description"></p></template>
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
    const aboutText = `Hello, my full name is <span class="font-bold">Zlatko Vujičič</span> and for the past eight years, I've been working on 
                      projects ranging from small websites to complex applications. In addition to traditional web applications, 
                      I have also worked on projects involving web games and 
                      <a class="link" 
                      href="https://aws.amazon.com/what-is/iot/#:~:text=The%20term%20IoT%2C%20or%20Internet,as%20between%20the%20devices%20themselves." 
                      target="_blank">IoT</a>.
                      Furthermore, I have developed user experiences and functionality for apps on platforms such as 
                      <a class="link" href="https://www.raspberrypi.com/" target="_blank">Raspberry Pi</a> and 
                      <a class="link" href="https://mts.rs/Privatni/Televizija" target="_blank">SetTop Box</a>.
                      <br><br>
                      While working independent in the start, I soon became active in bigger teams on
                      bigger projects, collaborating with designers, QA's and Backend devs. Take a look at my experience for more detailed info.`;
    const resumeItems = [
      {
        position: 'Freelance',
        location: 'Remote',
        yearFromTo: '2016 - Present',
        description: `Troughout my freelance career I can stand behind collection of websites, email templates and campaigns,
                      10's of prototypes, 2 big and complex administrational web apps. My freelance journy started on freelance network
                      <a class="link" href="https://www.upwork.com/" target="_blank">UpWork</a> where I found my first agency
                      <a class="link" href="https://www.wittycookie.ca/" target="_blank">WittyCookie</a> and soon after other clients.`,
      },
      {
        position: 'Vitamin2',
        location: 'St. Galen',
        yearFromTo: '2018 - 2020',
        description: `<a class="link" href="https://vitamin2.ch/" target="_blank">Vitamin2</a>
                      is marketing company based in Switzerland, where we build websites based
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
.w-1200{
  padding: 150px 0 0 0;
}
@media (min-width: 1024px) {
  .w-1200{
    max-width: 1200px;
    width: 100%;
    padding: 100px 0 0 100px;
  }
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
