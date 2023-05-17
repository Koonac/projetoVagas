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
				this.tipoAlerta = p[0];
				this.msgAlert = p[1];
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
						return "alert-success";
					default:
						return "alert-success";
				}
			},
		},
	};
</script>
