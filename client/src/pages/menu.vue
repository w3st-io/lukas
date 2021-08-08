<template>
	<BContainer class="my-4">
		<BCard v-if="menu != []" bg-variant="light" class="mt-3 shadow">
			<BRow>
				<!-- Title -->
				<BCol cols="12">
					<h1 class="text-center font-weight-bold text-primary ">
						{{ DPage.title }}
					</h1>
				</BCol>

				<!-- Permanent Makeup -->
				<BCol
					v-for="(menuItems, i) in menu"
					:key="i"
					cols="12" md="6" lg="4"
					data-aos="fade-up"
				>
					<h2 class="text-center text-secondary font-weight-bold">
						{{ menuItems.category }}
					</h2>

					<BListGroup class="mb-3">
						<BListGroupItem
							v-for="(item, i) in menuItems.items"
							:key="i"
							variant="secondary"
							class="d-flex justify-content-between align-items-center"
						>
							<p class="m-0 h5">{{ item.name }}</p>
							<BBadge variant="primary" class="badge-pill">
								<p class="m-0 h5 font-weight-bold">
									${{ item.price }}
								</p>
							</BBadge>
						</BListGroupItem>
					</BListGroup>
				</BCol>
			</BRow>
		</BCard>
	</BContainer>
</template>

<script>
	// [IMPORT] Personal //
	import DPage from '@/defaults/pages/menu'
	import PageService from '@/services/PageService'

	export default {
		data() {
			return {
				DPage: DPage,
				reqData: {},
				menu: [],
				error: '',
			}
		},

		async created() {
			this.reqData = await PageService.s_menu()

			if (this.reqData.status) { this.menu = this.reqData.menu }
			else { this.error = this.reqData.message }
		},

		mounted() {
			this.$store.state.navbarSpacer = true
		},

		destroyed() {
			this.$store.state.navbarSpacer = false
		},
	}
</script>