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
							class="form-check-input"
							id="btn-check-outlined"
							v-model="favoritar"
						/>
						<label class="form-check-label">Favoritar
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
		data: () => ({
			favoritar: false,
		}),
		watch: {
			favoritar(valorNovo) {
				if (valorNovo) {
					this.emitter.emit("favoritarVaga", this.titulo);
				} else {
					this.emitter.emit("desfavoritarVaga", this.titulo);
				}
			},
		},
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
				return dataPublicacao.toLocaleDateString("pt-Br");
			},
		},
		methods: {},
	};
</script>
