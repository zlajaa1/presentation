<template>
	<div class="mb-12">
		<h2 class="mb-5 highlight inline-block text-4xl roboto-slab">{{ info.projectTitle }}</h2>
		<p class="text-xl" v-html="info.projectDescription"></p>
	</div>
	<div class="grid grid-cols-12 gap-4">
		<div class="col-span-12 md:col-span-4">
			<a class="border-sec block" :href="info.projectLink" target="_blank">
				<picture>
					<source media="(max-width: 979px)" :srcset="getImageUrl().x2">
					<source media="(min-width: 980px)" :srcset="getImageUrl().regular">
					<img :src="getImageUrl().regular" :alt="`Project ${info.projectTitle}`" />
				</picture>
				<!-- <img :src="getImageUrl()" /> -->
			</a>
		</div>
		<div class="col-span-12 md:col-span-8">
			<p class="text-xl mb-4">
				<span class="font-bold">Link to project: </span>
				<a v-if="info.projectLink" class="link" :href="info.projectLink" target="_blank">{{ info.linkTitle }}</a>
				<span v-else>{{ info.linkTitle }}</span>
			</p>
			<p class="text-xl font-bold mb-2">
				Key Responsibilities and Achievements:
			</p>
			<ul class="list-disc pl-5 mb-4">
				<li v-for="(highlight, index) in info.projectHighlights" :key="`${index}-highlight`">
					<span class="font-bold">{{ highlight.title }}:</span> {{ highlight.description }}
				</li>
			</ul>
			<!-- <p class="mb-6" v-html="info.projectInfo"></p> -->
			<ChipList :list="info.stacks" />
		</div>
	</div>
</template>

<script setup>
import { computed } from 'vue'
import ChipList from '@/components/ChipList.vue'

const props = defineProps({
	info: Object,
});

function getImageUrl() {
	// This path must be correct for your file
	return {
		regular: new URL(`../assets/images/${props.info.projectImage}.jpg`, import.meta.url),
		x2: new URL(`../assets/images/${props.info.projectImage}x2.jpg`, import.meta.url)
	}
}
</script>

<style scoped>
.border-sec {
	position: relative;
	border: 2px solid var(--color-secondary);
}

.border-sec:before {
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

.border-sec img {
	position: relative;
	z-index: 2;
}
</style>
