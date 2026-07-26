/**
 * Theme state, owned in one place.
 *
 * Defaults to the OS preference (prefers-color-scheme media query) if the user
 * hasn't manually toggled the theme. A visitor's choice is remembered and
 * re-applied by the inline script in `app.html` before first paint — this
 * module only handles changes made after the page is running.
 */

export type Theme = 'light' | 'dark';

export const THEME_KEY = 'shirox-theme';

const SURFACE: Record<Theme, string> = {
	light: '#fafaf9',
	dark: '#0b0b0c'
};

// Initialize to 'light'; will be synced with actual value from app.html's inline script
let current = $state<Theme>('light');

function apply(next: Theme) {
	current = next;

	// Light is the absence of the attribute, matching what the inline script writes.
	if (next === 'dark') document.documentElement.dataset.theme = 'dark';
	else delete document.documentElement.dataset.theme;

	// Keeps the browser's own chrome — Safari's toolbar, the address bar — in step.
	document.querySelector('meta[name="theme-color"]')?.setAttribute('content', SURFACE[next]);

	try {
		localStorage.setItem(THEME_KEY, next);
	} catch {
		// Private browsing can refuse storage; the theme still applies for this visit.
	}
}

export const theme = {
	get current() {
		return current;
	},

	/** Picks up whatever the inline script already decided, so state and DOM agree. */
	sync() {
		current = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
	},

	toggle() {
		apply(current === 'dark' ? 'light' : 'dark');
	}
};
