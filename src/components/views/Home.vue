<template>
	<div class="container py-4">
		<div class="row">
			<div class="col">
				<pesquisar-vaga></pesquisar-vaga>
			</div>
		</div>
		<div class="row row-cols-2 mt-5">
			<div class="col py-2" v-for="(vaga, index) in vagas" :key="index">
				<vaga v-bind="vaga" />
			</div>
		</div>
		<div class="row mt-5">
			<div class="col-4">
				<Indicador
					titulo="Vagas Abertas"
					indicador="25"
					estiloClass="bg-primary text-white"
				/>
			</div>
			<div class="col-4">
				<Indicador
					titulo="Profissionais cadastrados"
					indicador="334"
					estiloClass="bg-warning text-white"
				/>
			</div>
			<div class="col-4">
				<Indicador
					titulo="Visitantes onlines"
					:indicador="visitantesOnlines"
					estiloClass="bg-success text-white"
				/>
			</div>
		</div>
	</div>
</template>

<script>
	import PesquisarVaga from "@/components/comuns/PesquisarVaga.vue";
	import Indicador from "@/components/comuns/Indicador.vue";
	import Vaga from "@/components/comuns/Vaga.vue";

	export default {
		name: "Home",
		components: {
			PesquisarVaga,
			Indicador,
			Vaga,
		},
		data: () => ({
			visitantesOnlines: 0,
			vagas: [],
		}),
		methods: {
			getVisitantesOnline() {
				return (this.visitantesOnlines = Math.floor(Math.random() * 101));
			},
		},
		created() {
			setInterval(this.getVisitantesOnline, 2000);
		},
		activated() {
			let vagas = JSON.parse(localStorage.getItem("vagas"));
			if (vagas) {
				this.vagas = vagas.reverse();
			}
		},
		deactivated() {
			console.log("Componente é desativado");
		},
		mounted() {
			this.emitter.on("pesquisandoVaga", (pesquisa) => {
				/* CAPTURANDO VAGAS EM LOCAL STORAGE */
				const vagas = JSON.parse(localStorage.getItem("vagas"));

				/* FILTRANDO VAGAS PELO PARÂMETRO DE PESQUISA */
				this.vagas = vagas.filter((i) =>
					i.titulo.toLowerCase().includes(pesquisa.toLowerCase())
				);
			});
		},
	};
</script>
