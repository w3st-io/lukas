<template>
	<div>
		<!-- Caraousel -->
		<BCarousel
			:showContent="true"
			:mainText="'Food that brings you closer to home..'"
			:slideObjs="DPage.caraousel"
			:maxHeight="600"
			:rellaxNumber="1"
			class="mb-5 shadow"
			data-aos="fade-up"
		/>

		<!-- Main Details -->
		<BContainer class="mb-5 text-center">
			<BCard bg-variant="light" border-variant="primary" class="rounded shadow">
				<!-- Captions -->
				<h2 data-aos="fade" class="font-weight-bold text-primary">
					{{ DPage.mainDetails.companyName }}
				</h2>

				<!-- Captions -->
				<h2 data-aos="fade" class="font-weight-bold text-secondary">
					{{ DPage.mainDetails.caption1 }}
				</h2>
				
				<!-- Address -->
				<p class="h4 text-center font-weight-bold text-dark">
					<span class="px-3 bg-info">Our Hours</span>
				</p>

				<!-- Hours of Operation -->
				<ul class="m-0 mb-4 p-0 text-dark">
					<li
						v-for="(hoo, index) in DPage.mainDetails.hoursOfOperation"
						:key="index"
						class="m-0 list-unstyled text-center"
					><p class="h4">{{ hoo.days }}<br>{{ hoo.hours }}</p></li>
				</ul>
			</BCard>
		</BContainer>

		<BContainer fluid v-if="0==1">
			<!-- [R1] Conveyor -->
			<BRow>
				<!-- [R1.C1] -->
				<BCol cols="12" class="mb-4">
					<h1 class="text-center">Our Satified Customers</h1>

					<Conveyor :images="DPage.sliderImages" :totalOnLg="4" />
				</BCol>
			</BRow>
		</BContainer>

		<!-- More Details -->
		<BContainer fluid class="mb-5 bg-white border-top border-secondary shadow-lg">
			<BContainer class="py-3">
				<!-- Black Marble Now Booking New Clients -->
				<BRow v-if="0 == 1" class="mb-3" data-aos="fade">
					<Transition name="fade">
						<BCol cols="12">
							<img
								v-if="show"
								:src="DPage.moreDetails.row1.image"
								alt="No Image"
								class="img-responsive w-100 my-3"
								style="height: 176px; object-fit: cover;"
							>
							<div class="carousel-caption">
								<RouterLink
									to="book"
									class="font-weight-bold text-decoration-none"
								>
									<h2 class="font-weight-bold text-light">
										Now Booking New Clients
									</h2>
								</RouterLink>
								

								<BButton
									variant="light"
									size="lg"
									class="mt-3"
									@click="redirectCompanyInfo()"
								>Book Apointment</BButton>
							</div>
						</BCol>
					</Transition>
				</BRow>
				
				<!-- What We Can Do For You -->
				<BRow class="mb-3">
					<BCol cols="12" sm="8">
						<div v-if="show">
							<h2 class="font-weight-bold text-primary">
								{{ DPage.moreDetails.row2.header }}
							</h2>
							<p class="mb-4 h5 text-dark">
								{{ DPage.moreDetails.row2.text }}
							</p>

							<div class="w-100 text-center">
								<a href="/services/#reiki">
									<BButton
										variant="secondary"
										size="lg"
										class="mb-4"
									>Read More</BButton>
								</a>
							</div>
						</div>
					</BCol>

					<BCol cols="12" sm="4" data-aos="fade-up">
						<img
							v-if="show"
							:src="DPage.moreDetails.row2.image"
							alt="No Image"
							data-aos="fade"
							class="w-100 mb-5 shadow"
							style="height: 400px; object-fit: cover;"
						>
					</BCol>
				</BRow>

				<!-- Meet Pamela -->
				<BRow class="mb-4">
					<BCol cols="12" sm="6" data-aos="fade-up">
						<BCarousel
							v-if="show"
							:slideObjs="DPage.moreDetails.row3.caraousel"
							class="mb-3 shadow"
						/>
					</BCol>

					<BCol cols="12" sm="6">
						<div v-if="show">
							<h2 class="text-primary font-weight-bold">
								{{ DPage.moreDetails.row3.header }}
							</h2>
							<p class="mb-4 h5 text-dark">
								{{ DPage.moreDetails.row3.description1 }}
								<br><br>
								{{ DPage.moreDetails.row3.description2 }}
							</p>

							<div class="w-100 text-center">
								<RouterLink to="/our-team">
									<BButton
										variant="secondary"
										size="lg"
										class="mb-4"
									>Read More</BButton>
								</RouterLink>
							</div>
						</div>
					</BCol>
				</BRow>

				<BRow class="mb-3">
					<BCol cols="12">
						<h1 class="text-center text-primary">Interested?</h1>

						<div class="text-center">
							<RouterLink to="/menu">
								<BButton
									variant="primary"
								>Check Out Our Menu</BButton>
							</RouterLink>
						</div>
					</BCol>
				</BRow>
			</BContainer>
		</BContainer>
	</div>
</template>

<script>
	// [IMPORT] Personal //
	import BCarousel from '@/components/display/BCarousel'
	import Conveyor from '@/components/display/Conveyor'
	import DPage from '@/defaults/pages'
	import router from '@/router'

	export default {
		name: 'Home',

		data() {
			return {
				DPage: DPage,
				reqData: '',
				show: false,
			}
		},

		components: {
			BCarousel,
			Conveyor,
		},

		async created() {},

		mounted() {
			this.show = true
		},

		methods: {
			redirectCompanyInfo() { router.push({ name: 'book' }) },
		},
	}
</script>

<style lang="scss">
	.fade-enter-active,
	.fade-leave-active { transition: opacity 1s; }
	.fade-enter,
	.fade-leave-to { opacity: 0; }
</style>
