<template>
	<div class="mt-3 fw-bold alert" :class="getTipoAlerta" v-show="exibirAlerta">
		{{ msgAlert }}
	</div>
</template>
<script>
	export default {
		name: "Alerta",
		data: () => ({
			tipoAlerta: "",
			msgAlert: "",
			exibirAlerta: false,
		}),
		mounted() {
			this.emitter.on("alerta", (p) => {
				this.tipoAlerta = p.tipoAlerta;
				this.msgAlert = p.msgAlerta;
				this.exibirAlerta = true;
			});
		},
		watch: {
			exibirAlerta(vn) {
				if (vn) {
					setTimeout(() => {
						this.exibirAlerta = false;
					}, 5000);
				}
			},
		},
		computed: {
			getTipoAlerta() {
				switch (this.tipoAlerta) {
					case "ERRO":
						return "alert-danger";
					case "SUCESSO":
						return "alert-success";
					case "AVISO":
						return "alert-warning";
					default:
						return "alert-success";
				}
			},
		},
	};
</script>
