<template>
	<div class="container py-4">
		<div class="row">
			<div class="col">
				<pesquisar-vaga></pesquisar-vaga>
			</div>
		</div>
		<div class="row row-cols-2 mt-5">
			<div class="col py-2" v-for="(vaga, index) in vagas" :key="index">
				<vaga
					:titulo="vaga.titulo"
					:descricao="vaga.descricao"
					:salario="vaga.salario"
					:modalidade="vaga.modalidade"
					:tipo="vaga.tipo"
					:publicacao="vaga.publicacao"
				/>
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
			vagas: [
				{
					titulo: "Analista Programador PHP Pleno",
					descricao:
						"Profissional com conhecimentos em PHP, Laravel e MySQL. Necessário 3 anos de experiências. Atuará na manutenção de sistemas legados da empresa.",
					salario: 6000,
					modalidade: "Home Office",
					tipo: "PJ",
					publicacao: "2021-10-10",
				},
				{
					titulo: "Programador JavaScript Angular",
					descricao:
						"Profissional com conhecimentos avançados em JavaScript e Angular.",
					salario: 5000,
					modalidade: "Presencial",
					tipo: "CLT",
					publicacao: "2021-10-07",
				},
				{
					titulo: "Programador JavaScript Vue",
					descricao:
						"Profissional com conhecimentos avançados em JavaScript e Vue.",
					salario: 5000,
					modalidade: "Home Office",
					tipo: "CLT",
					publicacao: "2021-10-06",
				},
				{
					titulo: "Analista de Banco de Dados Sênior",
					descricao:
						"Domínio dos bancos de dados SQL Server, Oracle, Postgre e MySQL",
					salario: 9000,
					modalidade: "Presencial",
					tipo: "PJ",
					publicacao: "2021-10-06",
				},
				{
					titulo: "Programador Web Júnior",
					descricao:
						"Conhecimentos básicos em HTML, CSS, JavaScript, Bootstrap, PHP e MySQL",
					salario: 3000,
					modalidade: "Presencial",
					tipo: "CLT",
					publicacao: "2021-10-05",
				},
			],
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
