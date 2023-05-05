<template>
	<div>
		<!-- 'navegarPara' É UM EVENTO CRIADO NO COMPONENTE 'topo'(FILHO) E 
		ESTAMOS CAPTURANDO ESSE EVENTO E SEU VALOR COM O '$event'  -->
		<topo @navegarPara="alterarComponenteView($event)" />
		<conteudo :nomeComponente="nomeComponente" />
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
		data: () => ({
			nomeComponente: "home",
		}),
		methods: {
			alterarComponenteView(componente) {
				this.nomeComponente = componente;
			},
		},
	};
</script>

<style scoped>
	.color-text {
		color: red;
	}
</style>
