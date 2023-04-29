<template>
	<div>
		<h1 class="color-text">Componente Home - Style</h1>
	</div>
</template>

<script>
	export default {
		name: "Home",
		activated() {
			console.log("Componente é ativado");
		},
		deactivated() {
			console.log("Componente é desativado");
		},
		beforeUnmount() {
			console.log("Antes de demonstar/destruir");
		},
		unmounted() {
			console.log("Demonstado/destruído");
		},
	};
</script>

<style scoped>
	.color-text {
		color: orange;
	}
</style>
