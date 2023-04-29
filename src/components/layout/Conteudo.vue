<template>
	<div>
		<h1 class="color-text" id="bg-default">Conteudo - Style</h1>
		<div class="d-grid gap-2 col-4 mx-auto">
			<button
				class="btn btn-dark shadow"
				@click="nomeComponente = 'home'"
				type="button"
			>
				Componente Home
			</button>
			<button
				class="btn btn-dark shadow"
				@click="nomeComponente = 'publicar-vaga'"
				type="button"
			>
				Componente Publicar Vaga
			</button>
		</div>
		<div class="d-grid justify-content-center">
			<!-- KeepAlive (keep-alive) mantém o componente em cache, somente o desativa e 
				ativa novamente, com isso podemos utilizar os Lifecycle Hooks activated e deactivated-->
			<keep-alive>
				<component :is="nomeComponente" />
			</keep-alive>
		</div>
	</div>
</template>

<script>
	import Home from "@/components/views/Home.vue";
	import PublicarVaga from "@/components/views/PublicarVaga.vue";

	export default {
		name: "Conteudo",
		data: () => ({
			nomeComponente: "home",
		}),
		components: {
			Home,
			PublicarVaga,
		},
		//MÉTODOS DE CICLO DE VIDA DA APLICAÇÃO
		// beforeCreate() {
		// 	console.log("Antes de criar");
		// },
		// created() {
		// 	console.log("Criado");
		// },
		// beforeMount() {
		// 	console.log("Antes de montar");
		// },
		// mounted() {
		// 	console.log("Montado");
		// },
		// beforeUpdate() {
		// 	console.log("Antes de atualizar");
		// },
		// updated() {
		// 	console.log("Atualizado");
		// },
		// beforeUnmount() {
		// 	console.log("Antes de demonstar/destruir");
		// },
		// unmounted() {
		// 	console.log("Demonstado/destruído");
		// },
		// errorCaptured() {
		// 	console.log("Erro capturado");
		// },
		// renderTracked() {
		// 	console.log("Re-renderização rastreada");
		// },
		// renderTriggered() {
		// 	console.log("Re-renderização acionada");
		// },
		// activated() {
		// 	console.log("Componente é ativado");
		// },
		// deactivated() {
		// 	console.log("Componente é desativado");
		// }
	};
</script>

<style scoped>
	.color-text {
		color: purple;
	}
	.bg-text {
		background-color: cornflowerblue;
	}
	#bg-default {
		background-color: aqua;
	}
</style>
