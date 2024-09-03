<template>
  <main class="page-wrapper">
    <!-- Summary -->
    <div class="mb-12">
      <h2 class="mb-5 highlight inline-block text-4xl roboto-slab">Professional Summary</h2>
      <p class="text-xl" v-html="aboutText"></p>
    </div>
    <!-- # Summary -->
    <!-- Resume -->
    <!-- IF some developer see this and ask himself why I didn't use props on component without slots? -->
      <!-- Answer is I didnt use slot in years so it was fun to play with it 😀 -->
    <div class="mb-12">
      <h2 class="mb-5 highlight inline-block text-4xl roboto-slab">Work Experience</h2>
      <ResumeItem v-for="(item, index) in resumeItems" :key="`${index}-item`">
        <template #position>{{ item.position }}</template>
        <template #location>{{ item.location }}</template>
        <template #yearFromTo>{{ item.yearFromTo }}</template>
        <template #description><p v-html="item.description"></p></template>
        <template #stacks>
          <ChipList :list="item.stacks" />
        </template>
      </ResumeItem>
    </div>
    <!-- # Resume -->
  </main>
</template>
  
<script setup>
  import ResumeItem from '@/components/ResumeItem.vue'
  import ChipList from '@/components/ChipList.vue'
  
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
      description: `Troughout my freelance career I can proudly stand behind collection of websites, email templates and campaigns,
                    10's of prototypes, 2 big and complex administrational web apps. My freelance journy started on
                    <a class="link" href="https://www.upwork.com/" target="_blank">UpWork</a> where I found my first agency
                    <a class="link" href="https://www.wittycookie.ca/" target="_blank">WittyCookie</a> and soon after other clients from Canada, England, Holland
                    to Denmark and Russia.`,
      stacks: ['HTML5', 'CSS3', 'JavaScript', 'VueJS', 'Node', 'Git', 'NPM', 'webpack','PlayCanvas', 'jQuery', 'ScrollMagic', 'WordPress', 'mailchimp']
    },
    {
      position: 'Vitamin2',
      location: 'St. Galen',
      yearFromTo: '2018 - 2020',
      description: `<a class="link" href="https://vitamin2.ch/" target="_blank">Vitamin2</a>
                    is marketing company located in Switzerland. Websites are based on
                    <a class="link" href="https://getkirby.com/" target="_blank">GetKirby</a> or
                    <a class="link" href="https://typo3.org/" target="_blank">TYPO3</a> cms systems, while
                    more customized projects are based on VueJS. Some of the interesting projects I would like to highligh are
                    game for Zurich University and Solar panels project for St. Galen community.`,
      stacks: ['HTML5', 'CSS3', 'JavaScript', 'VueJS', 'Node', 'Git', 'webpack','GetKirby', 'TYPO3']
    },
    {
      position: 'TeleGo',
      location: 'Belgrade',
      yearFromTo: '2017 - 2018',
      description: `TeleGo provided services of marketing, developing and maintaining
                    applications and projects for some of the biggest clients such as
                    <a class="link" href="https://www.rts.rs/sr/index.html" target="_blank">RTS</a>,
                    <a class="link" href="https://mts.rs" target="_blank">MTS Telekom</a>,
                    <a class="link" href="https://gemius.com/" target="_blank">Gemius</a>.
                    At TeleGo, beside developing and maintaining websites, I've been provided with platform diversity and
                    opportunity to work on IoT project which basicly adjusted old vending machine to new functionalities,
                    develop Sport application for MTS SetTop Box and enjoy in integrating Gemius ads system on portals.`,
      stacks: ['HTML5', 'CSS3', 'JavaScript', 'Git', 'jQuery', 'zend2', 'integrations', 'IoT', 'SetTop Box']
    },
    {
      position: 'Pannovate',
      location: 'Belgrade',
      yearFromTo: '2016 - 2017',
      description: `<a class="link" href="https://www.pannovate.com/" target="_blank">Pannovate</a>
                    is younger sister of Paneleven, a company that distribute
                    Datacard solutions in banking industry. As industry migrated toward web,
                    my tasks spanned from creating email templates and websites to more complex development of
                    analitics dashboard for in-house products such as
                    <a class="link" href="https://www.pannovate.com/products/tinkar/" target="_blank">TinkAR</a>
                    , an augmented reality project and development, whitelabeling and integration of datacard designer called
                    <a class="link" href="https://www.pannovate.com/products/genesis/" target="_blank">Genesis</a>.`,
      stacks: ['HTML5', 'CSS3', 'JavaScript', 'Git', 'jQuery', 'zend2', 'integrations', 'AR', 'email templates', 'mailchimp', 'whitelabel']
    },
  ];
</script>
  
<style>
  .page-wrapper{
    padding: 150px 20px 0 20px;
  }
  @media (min-width: 1024px) {
    .page-wrapper{
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
  