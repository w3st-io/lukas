<template>
	<div class="w-100 position-absolute nav shadow">
		<BContainer bg-variant="dark" class="d-flex justify-content-between container-fluid py-3">
			<!-- Title -->
			<div class="" style="">
				<RouterLink to="/" class="text-decoration-none">
					<h1
						class="m-0 font-weight-bold title text-center"
						style="font-size: 3em;"
					>{{ companyInfo.companyName }}</h1>
					<h4
						class="
							m-0
							px-2
							font-weight-bold
							bg-secondary
							text-light
							text-center
						"
					>{{ companyInfo.companyCaption1 }}</h4>
				</RouterLink>
			</div>

			<!-- Links -->
			<div class="d-none d-lg-block p-0">
				<a :href="companyInfo.googleMapsLink">
					<BButton variant="info" class="w-100 py-3 rounded-0">
						<h5 class="m-0">
							<MapPinIcon size="1x" class="mr-2" />
							{{ companyInfo.address }}
						</h5>
					</BButton>
				</a><br>

				<div class="w-100 py-1 text-center bg-primary">
					<a href="" class="text-light">{{ companyInfo.phoneNumber }}</a>
				</div>

				<div class="">
					<!-- Menu Items -->
					<RouterLink
						v-for="(button, i) in buttons"
						:key="i"
						:to="button.path"
					>
						<BButton
							variant="secondary"
							class="px-2 py-1 font-weight-bold rounded-0"
							size=""
						>
							<span v-if="button.navIcon" v-html="button.navIcon"></span>
							<span v-else>{{ button.text }}</span>
						</BButton>
					</RouterLink>
				</div>
			</div>

			<!-- Phone # & Social Media-->
			<div class="text-right">
				<a :href="companyInfo.phoneNumberLink">
					<BButton variant="secondary" class="mb-2">
						<PhoneIcon size="2x" />
					</BButton>
				</a>

				<div class="w-100">
					<SocialMediaPlug
						size="1.8x"
						variant="light"
						class="d-none d-sm-block float-lg-right"
					/>
				</div>
			</div>
		</BContainer>

		<BContainer>
			<!-- [HIDDEN] Menu Button -->
			<div class="w-100 d-block d-lg-none mb-3">
				<BButton
					variant="info"
					class="w-100"
					@click="toggle()"
				><MenuIcon /></BButton>
			</div>
		</BContainer>

		<!-- Hidden Side Menu -->
		<SideMenu />
	</div>
</template>

<script>
	import { MapPinIcon, MenuIcon, PhoneIcon } from 'vue-feather-icons'

	// [IMPORT] Personal //
	import SideMenu from '@/components/nav/SideMenu'
	import SocialMediaPlug from '@/components/SocialMediaPlug'
	import companyInfo from '@/defaults/companyInfo'
	import buttons from '@/defaults/pageLinks'
	import router from '../../router'

	export default {
		components: {
			MapPinIcon,
			MenuIcon,
			PhoneIcon,
			SideMenu,
			SocialMediaPlug
		},

		data() {
			return {
				companyInfo: companyInfo,
				buttons: buttons,
				loggedIn: false,
				decoded: {},
				sideMenuOpen: false,router:router
			}
		},

		methods: {
			toggle() { this.$store.state.showMenu = !this.$store.state.showMenu },
		},
	}
</script>

<style lang="scss" scoped>
	.title {
		-webkit-text-stroke-width: 1px;
		-webkit-text-stroke-color: rgb(255, 255, 255);
	}

	.nav {
		z-index: 1000;
		top: 0;
		background-color: rgba(0, 0, 0, 0.72);
	}
</style>