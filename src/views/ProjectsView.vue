<template>
	<main class="container page-wrapper">
     <!-- Projects showcase -->
    <div class="mb-12" v-for="(project, index) in projects" :key="`${index}-project`">
      <ProjectItem :info="project" />
    </div>
    <!-- ### Projects showcase -->
     <!-- Games showcase -->
    <div class="mb-12">
      <h2 class="mb-5 highlight inline-block text-4xl roboto-slab">Games and Playground</h2>
      <p class="text-xl" v-html="playgroundText"></p>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
      <div class="">
        <a class="border-sec block" href="https://tribals.io/" target="_blank">
          <img src="@/assets/images/Tribals.jpg" />
        </a>
        <p>Tribals is first-person multiplayer survival game for the browser</p>
      </div>
      <div class="">
        <a class="border-sec block" href="https://poki.com/en/g/shipo-io" target="_blank">
          <img src="@/assets/images/Shipo.jpg" />
        </a>
        <p>Shipo is game hosted on Poki, it's shooter against bots</p>
      </div>
      <div class="">
        <a class="border-sec block" href="https://poki.com/en/g/magicland-io" target="_blank">
          <img src="@/assets/images/MagicLand.jpg" />
        </a>
        <p>MagicLand is also hosted on Poki, it's shooter against bots</p>
      </div>
    </div>
    <!-- ### Games showcase -->
  </main>
</template>

<script setup>
import ProjectItem from '@/components/ProjectItem.vue'

const projects = [
      {
        projectTitle: 'Solar energy project for St. Galen Community',
        projectDescription: `SGSW is dedicated to providing solar energy to the St. Gallen community by renting solar panels 
                            installed on public buildings.`,
        projectLink: 'https://solarcommunity.sg/eishalle-lerchenfeld-z%C3%BCrcherstrasse-152',
        linkTitle: 'Solarcommunity',
        projectImage: 'Solar',
        projectHighlights: [
          {
            title: 'Design Integration',
            description: 'Aligned the project with SGSW existing design and functionality, ensuring a seamless user experience.',
          },
          {
            title: 'Modularity and Scalability',
            description: 'Developed a modular and scalable solution to accommodate different buildings, facilitating easy expansion.',
          },
          {
            title: 'Future-Proofing',
            description: 'Incorporated white-labeling capabilities and flexible functionality adjustments to support the project future growth into nearby cities.',
          }
        ],
        stacks: ['VueJS', 'Webpack', 'Node', 'Vuex', 'css bem', 'axios'],
      },
      {
        projectTitle: 'Vitamin2 website',
        projectDescription: `As <span class="underlined">Vitamin2</span> is a designer and marketing oriented company with creative twist in projects,
                            its was fun and chalanging to redesign old website to match that same idea`,
        projectLink: 'https://vitamin2.ch/',
        linkTitle: 'Vitamin website',
        projectLink: 'https://vitamin2.ch/',
        projectImage: 'Vitamin',
        projectHighlights: [
          {
            title: 'Functionality Integration',
            description: 'Provide svg animations inside of GetKirby CMS system.',
          },
          {
            title: 'Design implementation',
            description: 'Communication and design idea implementation, making elements editable',
          },
          {
            title: 'CMS customization',
            description: 'Provide additional functionality inside of CMS on level of easy editing.',
          }
        ],
        stacks: ['GetKirby', 'Webpack', 'Node', 'css bem', 'svg animation'],
      },
      {
        projectTitle: 'Ship365 admin portal',
        projectDescription: `<a class="link" href="https://ship365.dk/" target="_blank">Ship365</a> is a service providing integration of a small web shops with
                            courier companies such as DHL, PostNORD, UPS, FedEX etc.`,
        projectLink: false,
        linkTitle: 'Providing during meeting',
        projectImage: 'Ship365',
        projectHighlights: [
          {
            title: 'Design Implementation',
            description: 'Implementing design UI and UX solutions.',
          },
          {
            title: 'Modularity and Scalability',
            description: 'Developed a modular and scalable custom components. Most of the components are heavy data driven.',
          },
          {
            title: 'Creating NPM package',
            description: 'Some functionality that are missing from existing packages were implemented and published as new package',
          },
          {
            title: 'VUEX management',
            description: 'Ensuring oneway data flow inside of application, making sure reactivity and data manipulation go trough VUEX store',
          },
          {
            title: 'Data management',
            description: 'Whole project is data driven, even navigation is customizable',
          }
        ],
        stacks: ['VueJS', 'Node', 'Vuex', 'axios', 'NPM Package', 'css bem'],
      },
      {
        projectTitle: 'Lives In Transit',
        projectDescription: `<a class="link" href="https://livesintransit.org/" target="_blank">Lives in Transit</a>
                            is an interactive, text-based game which simulates the experience of researching and writing global history.`,
        projectLink: 'https://livesintransit.org/',
        linkTitle: 'Lives In Transit',
        projectImage: 'LIT',
        projectHighlights: [
          {
            title: 'Design Integration',
            description: 'Integration of complex layout system',
          },
          {
            title: 'Modularity and Scalability',
            description: 'Developed a modular and scalable components for project',
          },
          {
            title: 'Data integration',
            description: 'This project depend on the data controlled by backend, which means all content comes from API endpoints',
          }
        ],
        stacks: ['VueJS', 'Node', 'Vuex', 'axios', 'css bem', 'complex layout system'],
      },
    ];
const playgroundText = `Lets end with something fun, you might want to try out <span class="underlined">games</span> I've worked on with OnRush Studio or
                        visit my
                        <a class="link" href="https://codepen.io/zlajaa1/pens/showcase" target="_blank">Codepen</a>
                        to see what I'we been playing with`;
</script>

<style>
.page-wrapper{
  padding: 150px 0 0 0;
}
.border-sec{
	position: relative;
	border: 2px solid var(--color-secondary);
  margin-bottom: 15px;
}
	.border-sec:before{
		content: '';
		display: block;
		position: absolute;
		top: 11px;
		left: 4px;
		width: 100%;
		height: 100%;
		border: 2px solid var(--color-secondary);
		transform: rotate(-1deg);
		z-index: 1;
	}
	.border-sec img{
		position: relative;
		z-index: 2;
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