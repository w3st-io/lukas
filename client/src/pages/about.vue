<template>
	<BContainer class="my-4" data-aos="fade-up">
		<BCard bg-variant="light" class=" shadow">
			<BRow class="mb-3">
				<BCol cols="12">
					<h1 class="text-center font-weight-bold text-primary">
						{{ pageData.title }}
					</h1>
				</BCol>
			</BRow>

			<BRow>
				<!-- FIND US -->
				<BCol
					cols="12" lg="4" xl="3"
					order="2" order-lg="1"
					class="px-5"
					data-aos="fade"
				>
					<h1 class="mb-3 text-center font-weight-bold text-secondary">
						Find Us
					</h1>

					<!-- Number -->
					<h3 class="text-dark">Number</h3>
					<a
						:href="companyInfo.phoneNumberLink"
						class="text-decoration-none"
					>
						<BButton class="h5 mb-4 font-weight-bold">
							{{ companyInfo.phoneNumber }}
						</BButton>
					</a>

					<!-- Location -->
					<h3 class="text-dark">Location</h3>
					<a
						:href="companyInfo.googleMapsLink"
						class="text-decoration-none text-info"
					>
						<BButton class="h5 mb-4 font-weight-bold">
							{{ companyInfo.address }}
						</BButton>
					</a>

					<!-- Hours -->
					<h3 class="text-secondary">Hours</h3>
					<ul class="list-unstyled text-small text-light">
						<li
							v-for="(hoo, index) in companyInfo.hoursOfOperation"
							:key="index"
							class="h5 text-dark"
						>{{ hoo.days }}: {{ hoo.hours }}</li>
					</ul>
					<hr>
				</BCol>

				<BCol
					cols="12" lg="8" xl="9"
					order="1" order-lg="2"
					class="px-5"
					data-aos="fade"
				>
					<p class="h5 text-dark">
						<img
							:src="pageData.image"
							class="w-100 float-right m-3 rounded"
							style="max-width: 250px;"
							data-aos="fade-up"
						/>
						{{ pageData.description1 }}
						<br>
						<br>
						{{ pageData.description2 }}
						<br>
						<br>
						{{ pageData.description3 }}
						<br>
						<br>
					</p>
				</BCol>
			</BRow>
		</BCard>
	</BContainer>
</template>

<script>
	import companyInfo from '@/defaults/companyInfo'
	import pageData from '@/defaults/pages/about'

	export default {
		components: {
			
		},

		data() {
			return {
				companyInfo: companyInfo,
				pageData: pageData,
			}
		},

		mounted() {
			this.$store.state.navbarSpacer = true
		},

		destroyed() {
			this.$store.state.navbarSpacer = false
		},
	}
</script>