<template>
	<BContainer class="my-5">
		<BCard class="shadow">
			<BRow>
				<BCol cols="12">
					<h1 class="mb-4 text-center text-primary">{{ pData.title }}</h1>
				</BCol>
				<BCol
					v-for="(s, i) in services" :key="i"
					cols="12" md="6" lg="4"
				>
					<RouterLink :to="`/services/${s.id}`" class="text-decoration-none">
						<BCard
							tag="article"
							no-body
							border-variant="primary"
							class="mb-4 service-card"
						>
							<BCardBody>
								<BCardTitle class="h4 text-center text-primary">
									{{ s.title }}
								</BCardTitle>
								<BCardText class="text-dark">
									{{
										s.description.length > 200 ?
											s.description.substring(0, 200 - 3) + '...' :
											s.description
									}}
								</BCardText>
								<BButton class="w-100">Click to Learn More</BButton>
							</BCardBody>
						</BCard>
					</RouterLink>
				</BCol>
			</BRow>
		</BCard>
	</BContainer>
</template>

<script>
	import pData from '@/defaults/pages/services'
	
	export default {
		data() {
			return {
				pData: pData,
				services: []
			}
		},

		created() {
			this.$store.state.navbarSpacer = true
		},

		destroyed() {
			this.$store.state.navbarSpacer = false
		},
	}
</script>

<style lang="scss" scoped>
	.service-card:hover {
		background-color: rgba(0, 0, 0, 0.10);
	}
	
</style>