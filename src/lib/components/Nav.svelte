<script lang="ts">
	import { links } from '$lib/content';
	import { scrollProgress } from '$lib/motion';
	import ShiroMark from './ShiroMark.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<!-- Scroll position, as a single hairline along the very top edge. It sits above
     the dock rather than inside it: a straight rule clipped to a pill reads as a
     rendering fault at the ends. -->
<div class="fixed inset-x-0 top-0 z-50 h-0.5" aria-hidden="true">
	<div
		use:scrollProgress
		class="h-full origin-left"
		style="background: var(--color-accent); transform: scaleX(var(--progress, 0));"
	></div>
</div>

<header class="fixed inset-x-0 top-3 z-50 flex justify-center px-4 md:top-5">
	<div
		class="dock flex items-center gap-1.5 rounded-full border py-2 pr-2 pl-4 backdrop-blur-xl"
		style="border-color: var(--rule); background: var(--glass);"
	>
		<a
			href="#top"
			class="group flex items-center gap-2.5 rounded-full py-2 pr-2"
			aria-label="Shirox, back to top"
		>
			<ShiroMark
				class="h-[1.3rem] w-[1.3rem] transition-transform duration-500 group-hover:-rotate-6"
			/>
			<span class="text-[1.0625rem] font-semibold tracking-[-0.02em]">Shirox</span>
		</a>

		<span class="mx-1.5 h-5 w-px shrink-0" style="background: var(--rule);" aria-hidden="true"
		></span>

		<nav aria-label="Primary" class="flex items-center gap-1">
			<a
				href="#features"
				class="link press hidden rounded-full px-4 py-2.5 text-[0.9375rem] sm:block"
				style="color: var(--muted);">Features</a
			>
			<a
				href={links.github}
				target="_blank"
				rel="noreferrer"
				class="link press hidden rounded-full px-4 py-2.5 text-[0.9375rem] sm:block"
				style="color: var(--muted);">Source</a
			>
			<a
				href="#install"
				class="cta press rounded-full px-5 py-2.5 text-[0.9375rem] font-medium"
				style="background: var(--color-accent); color: var(--color-paper);">Install</a
			>
		</nav>

		<span class="mx-1.5 h-5 w-px shrink-0" style="background: var(--rule);" aria-hidden="true"
		></span>

		<ThemeToggle />
	</div>
</header>

<style>
	.dock {
		box-shadow:
			0 12px 32px -12px rgb(11 11 12 / 0.18),
			0 1px 2px rgb(11 11 12 / 0.06);
	}

	/* `scale` is listed but never set here: the growth is `.press`'s, and a control
	   that declares its own transition has to make room for it. */
	.link {
		transition:
			color 0.3s var(--ease),
			background-color 0.3s var(--ease),
			scale 0.35s var(--ease-hover);
	}

	.link:hover {
		color: var(--fg) !important;
		background: var(--sunken);
	}
</style>
