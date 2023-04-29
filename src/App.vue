<template>
	<div>
		<topo />
		<conteudo />
	</div>
</template>

<script>
	import Conteudo from "@/components/layout/Conteudo.vue";
	import Topo from "@/components/layout/Topo.vue";

	export default {
		name: "App",
		components: {
			Topo,
			Conteudo,
		},
	};
</script>

<style scoped>
	.color-text {
		color: red;
	}
</style>
