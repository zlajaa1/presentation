<template>
	<ul class="chip-list">
		<li
			v-for="(item, index) in list"
			:key="`${index}-stack`"
			class="relative grid select-none items-center whitespace-nowrap rounded-md mb-1 mr-1 bg-gray-900 py-1 px-2 font-bold uppercase text-white">
			{{ item }}
		</li>
	</ul>
</template>

<script>

export default {
  props: ['list'],
  setup(props) {
    const list = props.list;
  }
};
</script>

<style scoped>
.chip-list li{
	display: inline-block;
	font-size: 14px;
	font-weight: 500;
}
</style>