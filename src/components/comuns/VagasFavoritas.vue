<template>
	<div>
		<div class="position-absolute z-1" style="top: 50px; right: 0">
			<button
				class="btn btn-dark"
				type="button"
				data-bs-toggle="offcanvas"
				data-bs-target="#offCanvasVagasFavoritas"
				aria-controls="offCanvasVagasFavoritas"
			>
				Vagas Favoritas
			</button>
		</div>

		<div
			class="offcanvas offcanvas-end"
			data-bs-scroll="true"
			tabindex="-1"
			id="offCanvasVagasFavoritas"
			aria-labelledby="offCanvasVagasFavoritasLabel"
		>
			<div class="offcanvas-header">
				<h5 class="offcanvas-title" id="offCanvasVagasFavoritasLabel">
					Vagas Favoritadas
				</h5>
				<button
					type="button"
					class="btn-close"
					data-bs-dismiss="offcanvas"
					aria-label="Close"
				></button>
			</div>
			<div class="offcanvas-body">
				<ul class="list-group">
					<li
						class="list-group-item"
						v-for="(vaga, index) in vagasFavoritadas"
						:key="index"
					>
						{{ vaga }}
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: "VagasFavoritas",
		data: () => ({
			vagasFavoritadas: [],
		}),
		mounted() {
			this.emitter.on("favoritarVaga", (titulo) => {
				this.vagasFavoritadas.push(titulo);
			});
			this.emitter.on("desfavoritarVaga", (titulo) => {
				let indiceArray = this.vagasFavoritadas.indexOf(titulo);

				if (indiceArray !== -1) this.vagasFavoritadas.splice(indiceArray, 1);
			});
		},
	};
</script>
