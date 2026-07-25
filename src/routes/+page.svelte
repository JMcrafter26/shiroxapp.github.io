<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Showcase from '$lib/components/Showcase.svelte';
	import Features from '$lib/components/Features.svelte';
	import Install from '$lib/components/Install.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const title = 'Shirox — Anime & manga library manager for iOS';
	const description =
		'A free, source-available library manager for anime and manga on iOS 15+. Community modules, AniList and MyAnimeList sync, and offline downloads.';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Nav />

<main id="top">
	<Hero />
	<Showcase />
	<Features />
	<Install />
</main>

<Footer />
