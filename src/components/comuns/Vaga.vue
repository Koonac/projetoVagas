<template>
	<div class="card">
		<div class="card-header bg-dark text-white">
			<div class="row">
				<div class="col d-flex justify-content-between">
					<div>
						{{ titulo }}
					</div>
					<div class="form-check form-switch">
						<input
							type="checkbox"
							class="btn-check"
							id="btn-check-outlined"
							autocomplete="off"
						/>
						<label class="btn btn-outline-danger" for="btn-check-outlined">
							<font-awesome-icon icon="fa-regular fa-heart" />
							<button class="btn btn-danger" @click="eventoEmitt()">
								Evento
							</button>
						</label>
					</div>
				</div>
			</div>
		</div>
		<div class="card-body">
			<p>{{ descricao }}</p>
		</div>
		<div class="card-footer">
			<small class="text-muted">
				Salário: R$ {{ salario }} | Modalidade: {{ getModalidade }} | Tipo:
				{{ getTipo }} | Publicação: {{ getPublicacao }}
			</small>
		</div>
	</div>
</template>
<script>
	export default {
		name: "Vaga",
		props: {
			titulo: {
				type: String,
				required: true,
				validator(p) {
					return p.length > 6 ? true : false;
				},
			},
			descricao: {
				type: String,
				default() {
					return "*".repeat(50);
				},
			},
			salario: {
				type: [Number, String],
				required: true,
			},
			modalidade: {
				type: String,
				required: true,
			},
			tipo: {
				type: String,
				required: true,
			},
			publicacao: {
				type: String,
				required: true,
			},
		},
		computed: {
			getModalidade() {
				switch (this.modalidade) {
					case "1":
						return "Home Office";
					case "2":
						return "Presencial";
					default:
						return "";
				}
			},
			getTipo() {
				switch (this.tipo) {
					case "1":
						return "PJ";
					case "2":
						return "CLT";
					default:
						return "";
				}
			},
			getPublicacao() {
				/* INICIALIZANDO OBJETO DATA */
				let dataPublicacao = new Date(this.publicacao);

				/* FORMATANDO DATA PARA PT BR */
				// return dataPublicacao.toLocaleString("pt-Br");
				return dataPublicacao.toLocaleDateString("pt-Br");
			},
		},
		methods: {
			eventoEmitt() {
				this.emitter.emit(
					"eventoGlobal1",
					"Essa é uma mensagem do evento global."
				);
			},
		},
	};
</script>
