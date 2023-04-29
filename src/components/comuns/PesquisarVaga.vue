<template>
	<div class="bg-light h-100 border p-3 rounded-3">
		<h2>Pesquisar vagas</h2>
		<div class="row">
			<div class="col">
				<div class="input-group">
					<input
						type="text"
						class="form-control"
						placeholder="Pesquise por palavras chaves. Ex.: 'PHP', 'Pleno', 'São Paulo'"
					/>
					<button class="btn btn-outline-dark">Pesquisar</button>
				</div>
				<small class="form-text text-muted"
					>Infome palavras que estejam relacionados com a profissão que você
					procura.</small
				>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: "PesquisarVaga",
	};
</script>
