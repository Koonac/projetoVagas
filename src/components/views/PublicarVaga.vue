<template>
	<div class="container py-4">
		<div class="row">
			<div class="col">
				<h4>Apresente a sua vaga para milhares de profissionais e de free</h4>
			</div>
		</div>
		<div class="row mt-3">
			<div class="col">
				<div class="form-floating">
					<input
						type="text"
						class="form-control"
						placeholder="Informe um título para vaga"
						v-model="titulo"
					/>
					<label>Título da vaga</label>
					<div class="form-text">Informe um título para vaga</div>
				</div>
			</div>
		</div>
		<div class="row mt-3">
			<div class="col">
				<div class="form-floating">
					<textarea
						type="text"
						class="form-control"
						placeholder="Descrição da vaga"
						style="height: 100px"
						v-model="descricao"
					></textarea>
					<label>Descrição vaga</label>
					<div class="form-text">Descrição da vaga</div>
				</div>
			</div>
		</div>
		<div class="row mt-3">
			<div class="col">
				<div class="form-floating">
					<input
						type="number"
						class="form-control"
						placeholder="Salário"
						v-model="salario"
					/>
					<label>Salário</label>
					<div class="form-text">Digite o valor do salarío da vaga</div>
				</div>
			</div>
			<div class="col">
				<div class="form-floating">
					<select
						class="form-select"
						id="floatingSelect"
						aria-label="Escolha a modalidade de contratação"
						v-model="modalidade"
					>
						<option value="" selected disabled>Selecione...</option>
						<option value="1">Home Office</option>
						<option value="2">Presencial</option>
					</select>
					<label>Modalidade</label>
					<div class="form-text">Modalidade da contratação</div>
				</div>
			</div>
			<div class="col">
				<div class="form-floating">
					<select
						class="form-select"
						id="floatingSelect"
						aria-label="Escolha o tipo de contratação"
						v-model="tipo"
					>
						<option value="" selected disabled>Selecione...</option>
						<option value="1">PJ</option>
						<option value="2">CLT</option>
					</select>
					<label>Tipo</label>
					<div class="form-text">Tipo de contratação</div>
				</div>
			</div>
		</div>
		<div class="row row-cols-2 mt-3">
			<div class="col">
				<button type="submit" class="btn btn-primary" @click="publicarVaga()">
					Publicar
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "PublicarVaga",
		data: () => ({
			titulo: "",
			descricao: "",
			salario: "",
			modalidade: "",
			tipo: "",
		}),
		methods: {
			publicarVaga() {
				/* CAPTURANDO VAGAS EM LOCAL STORAGE */
				let vagas = JSON.parse(localStorage.getItem("vagas"));

				/* ANALISANDO SE VAGAS EXISTE */
				if (!vagas) vagas = [];

				/* CAPTURANDO TIME ATUAL */
				let publicacao = new Date(Date.now());

				/* INICIALIZANDO VARIÁVEL DE NOVA VAGA */
				let novaVaga = {
					titulo: this.titulo,
					descricao: this.descricao,
					salario: this.salario,
					modalidade: this.modalidade,
					tipo: this.tipo,
					publicacao: publicacao.toISOString(),
				};

				if (this.validaFormulario()) {
					/* ADICIONANDO NOVA VAGA AO ARRAY */
					vagas.push(novaVaga);
					/* SETANDO VAGAS AO LOCAL STORAGE */
					localStorage.setItem("vagas", JSON.stringify(vagas));
					/* ABRINDO ALERT */
					this.emitter.emit("alerta", {
						tipoAlerta: "SUCESSO",
						msgAlerta: `Vaga ${this.titulo} foi publicada com sucesso e já está disponivel em nosso site.`,
					});
					/* RESETANDO VARIÁVEIS */
					this.resetaFormPublicarVaga();
				} else {
					/* ABRINDO ALERT */
					this.emitter.emit("alerta", {
						tipoAlerta: "ERRO",
						msgAlerta:
							"-_- Oopsss... parece que você esqueceu de preencher algum campo.",
					});
				}
			},
			resetaFormPublicarVaga() {
				/* RESETANDO VARIÁVEIS */
				this.titulo = "";
				this.descricao = "";
				this.salario = "";
				this.modalidade = "";
				this.tipo = "";
			},
			validaFormulario() {
				let valido = true;

				if (this.titulo == "") valido = false;
				if (this.descricao == "") valido = false;
				if (this.salario == "") valido = false;
				if (this.modalidade == "") valido = false;
				if (this.tipo == "") valido = false;

				return valido;
			},
		},
		created() {
			/* INICILIZANDO VARIÁVEL */
			let camposFormInput = JSON.parse(localStorage.getItem("camposFormInput"));

			/* ANALISANDO SE VARIÁVEL LOCAL EXISTE */
			if (camposFormInput) {
				this.titulo = camposFormInput.titulo;
				this.descricao = camposFormInput.descricao;
				this.salario = camposFormInput.salario;
				this.modalidade = camposFormInput.modalidade;
				this.tipo = camposFormInput.tipo;
			}
		},
		updated() {
			let camposFormInput = {
				titulo: this.titulo,
				descricao: this.descricao,
				salario: this.salario,
				modalidade: this.modalidade,
				tipo: this.tipo,
			};

			/* SETANDO VAGAS AO LOCAL STORAGE */
			localStorage.setItem("camposFormInput", JSON.stringify(camposFormInput));
		},
	};
</script>

<style></style>
