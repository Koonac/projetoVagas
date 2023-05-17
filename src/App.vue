<template>
	<div>
		<!-- COMPONENTE VAGAS FAVORITADAS -->
		<vagas-favoritas></vagas-favoritas>

		<!-- 'navegarPara' É UM EVENTO CRIADO NO COMPONENTE 'topo'(FILHO) E 
		ESTAMOS CAPTURANDO ESSE EVENTO E SEU VALOR COM O '$event'  -->
		<topo @navegarPara="nomeComponente = $event" />

		<alerta />

		<!-- CONTEUDO -->
		<conteudo :nomeComponente="nomeComponente" />
	</div>
</template>

<script>
	import Alerta from "@/components/comuns/Alerta.vue";
	import Conteudo from "@/components/layout/Conteudo.vue";
	import Topo from "@/components/layout/Topo.vue";
	import VagasFavoritas from "@/components/comuns/VagasFavoritas.vue";

	export default {
		name: "App",
		components: {
			Alerta,
			Conteudo,
			Topo,
			VagasFavoritas,
		},
		data: () => ({
			nomeComponente: "home",
		}),
	};
</script>

<style scoped>
	.color-text {
		color: red;
	}
</style>
