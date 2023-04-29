<template>
	<div
		class="h-100 p-4 rounded-5 border border-3 border-dark-subtle text-center"
		:class="estiloClass"
	>
		<p>{{ titulo }}</p>
		<h2>{{ indicador }}</h2>
	</div>
</template>
<script>
	export default {
		name: "Indicador",
		props: ["titulo", "indicador", "estiloClass"],
	};
</script>
