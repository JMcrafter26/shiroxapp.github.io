/**
 * Every string, URL and number shown on the page lives here. Components render
 * this data and never hardcode copy, so changing a link or bumping a version
 * doesn't touch markup.
 *
 * Copy rule: one short clause per item. If a line needs a comma splice to fit,
 * it's too long for this page.
 */

/**
 * Version, size, min OS and the IPA link are read off the AltStore manifest at
 * build time rather than typed here — see scripts/sync-release.ts. Shipping a
 * release updates the site on its next build with no edit to this file.
 */
import { release } from './release.generated';

export type Feature = { n: string; title: string; body: string };

export type Screen = {
	label: string;
	caption: string;
	alt: string;
	src: string;
	landscape?: boolean;
	/**
	 * Used instead of `src` on viewports too narrow to turn the device sideways.
	 * The app renders this screen in either orientation, so a phone-width visitor
	 * sees the portrait capture in an upright frame rather than a shrunken
	 * sideways one.
	 */
	narrowSrc?: string;
};

export type DeepLink = { label: string; href: string };

export type InstallMethod = {
	n: string;
	kind: 'source' | 'download';
	title: string;
	tagline: string;
	url: string;
	action?: string;
	meta?: string;
	deepLinks?: DeepLink[];
	/** Lifts one method out of the list and into a panel. Exactly one should set it. */
	recommended?: boolean;
};

/** Section headings, at the same weight as the hero so the page keeps one voice. */
export const sections = {
	features: { title: 'What it does.', sub: 'No accounts required, no ads, no upsell.' },
	install: { title: 'Install it.', sub: 'Not on the App Store.' }
} as const;

export { release };

export const links = {
	github: 'https://github.com/xibrox/Shirox',
	discord: 'https://discord.com/invite/b9tZSuJj73',
	kofi: 'https://ko-fi.com/xibrox',
	license: 'https://github.com/xibrox/Shirox/blob/main/LICENSE',
	author: 'https://github.com/xibrox'
} as const;

export const hero = {
	headline: 'Your anime library,',
	headlineAccent: 'entirely yours.',
	sub: 'A free, source-available library manager for anime and manga on iOS.',
	meta: `v${release.version} · ${release.minOS}`
} as const;

export const features: Feature[] = [
	{ n: '01', title: 'Community modules', body: 'Add a source, search it, watch it.' },
	{ n: '02', title: 'Anime and manga', body: 'One library for both, with a real reader.' },
	{ n: '03', title: 'Tracking', body: 'AniList and MyAnimeList. Offline edits catch up.' },
	{ n: '04', title: 'Player', body: 'Picture-in-Picture, AirPlay, Chromecast, subtitles.' },
	{ n: '05', title: 'Downloads', body: 'Episodes and chapters, kept for no signal.' },
	{ n: '06', title: 'Your own files', body: 'Local video, or a Jellyfin server.' }
];

/**
 * Real captures from the app, ordered as a first run reads: arrive, browse,
 * find, open, watch, track, share. `landscape` turns the device sideways —
 * the player genuinely is a landscape screen, so the frame follows it.
 */
export const screens: Screen[] = [
	{
		label: 'Home',
		caption: 'Pick up where you left off.',
		alt: 'The Shirox home screen, with a featured series and a Continue Watching row.',
		src: '/screenshots/home.webp'
	},
	{
		label: 'Discover',
		caption: 'Trending, seasonal, top rated.',
		alt: 'Rows of anime posters under Trending Now and This Season, each with a rating.',
		src: '/screenshots/home-trending.webp'
	},
	{
		label: 'Search',
		caption: 'Every entry, every season.',
		alt: 'Search results for Clannad, shown as a grid of rated poster cards.',
		src: '/screenshots/search.webp'
	},
	{
		label: 'Series',
		caption: 'Synopsis, episodes, downloads.',
		alt: 'The Clannad series page, with synopsis, genres and a list of 23 episodes.',
		src: '/screenshots/detail.webp'
	},
	{
		label: 'Library',
		caption: 'Everything you track, in one list.',
		alt: 'The library, filtered to Watching, showing episode progress for each series.',
		src: '/screenshots/library.webp'
	},
	{
		label: 'Social',
		caption: 'See what everyone else is watching.',
		alt: 'A profile page with a banner, avatar and a feed of friends’ recent activity.',
		src: '/screenshots/social.webp'
	},
	/* Last, so the one screen that turns the device sideways is the end of the
	   loop rather than a rotation in the middle of an otherwise portrait run. */
	{
		label: 'Player',
		caption: 'Picture-in-Picture, AirPlay, Chromecast, subtitles.',
		alt: 'The video player, playing episode 5 with a skip-intro control and a scrubber.',
		src: '/screenshots/player.webp',
		landscape: true,
		narrowSrc: '/screenshots/player-portrait.webp'
	}
];

/** Mirrored in scripts/sync-release.ts, which reads the same manifest at build time. */
const SOURCE_URL = 'https://raw.githubusercontent.com/xibrox/Shirox/refs/heads/main/apps.json';

export const installMethods: InstallMethod[] = [
	{
		n: '01',
		kind: 'source',
		title: 'AltStore / SideStore',
		tagline: 'Add the source once. Updates arrive on their own.',
		url: SOURCE_URL,
		recommended: true,
		deepLinks: [
			{ label: 'Add to AltStore', href: `altstore://source?url=${encodeURIComponent(SOURCE_URL)}` },
			{ label: 'Add to SideStore', href: `sidestore://source?url=${encodeURIComponent(SOURCE_URL)}` }
		]
	},
	{
		n: '02',
		kind: 'download',
		title: 'Direct IPA',
		tagline: 'Sideload it by hand.',
		url: release.ipaUrl,
		action: 'Download',
		meta: `${release.size} · ${release.minOS}`
	},
	{
		n: '03',
		kind: 'download',
		title: 'Nightly',
		tagline: 'Latest build from main. May be unstable.',
		url: 'https://nightly.link/xibrox/Shirox/workflows/nightly.yaml/main?preview',
		action: 'Open'
	}
];
