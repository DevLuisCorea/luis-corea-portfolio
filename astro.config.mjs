// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import starcard from "./src/integrations/starcard.js";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	site: "https://example.com",
	build: {
		inlineStylesheets: "always",
	},
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: {
				"@": "/src",
			},
		},
	},
	integrations: [
		sitemap(),
		starcard({
			meta: {
				title: "Your Name",
				description: "Short bio or tagline",
				keywords: ["astro-template", "profile", "vcard", "portfolio"],
				favicon: "/favicon.svg",
			},
			footer: {
				text: "© 2025 Luis Corea",
			},
			profile: {
				displayName: "Luis Corea",
				firstName: "Luis",
				middleName: "",
				lastName: "Corea",
				title: "Junior Developer",
				company: "Your Company",
				companyUrl: "https://www.linkedin.com/in/luis-corea-nu%C3%B1ez-565471309/",
				avatarUrl: "https://media.licdn.com/dms/image/v2/D4D03AQF2czCYePhr4g/profile-displayphoto-shrink_400_400/B4DZOJJkHKHoAg-/0/1733172817348?e=1762387200&v=beta&t=YyTDQqF28gnyZw-kxI-DRt86d_Eq35_8u6KwdXRCX0U",
				avatarRounded: "full",
				email: "icoreanuez@gmail.com",
				phone: "+505 85638617",
				homePage: "https://example.com",
				location: "Managua, Nicaragua",
				vcard: true,
				sections: [
					{
						order: 1,
						id: "socials",
						title: "Socials",
						icon: "chatbot",
						items: [
							{
								id: "github",
								icon: "github",
								url: "https://github.com/you",
							},
						],
					},
					{
						order: 1,
						id: "presence",
						title: "Presence",
						icon: "chromewebstore",
						items: [
							{
								id: "youtube",
								icon: "youtube",
								url: "https://www.youtube.com/@your-channel",
							},
						],
					},
					{
						order: 3,
						id: "support",
						title: "Support",
						icon: "buymeacoffee",
						items: [
							{
								id: "buymeacoffee",
								icon: "buymeacoffee",
								url: "https://buymeacoffee.com/you",
							},
						],
					},
				],
			},
		}),
	],
	experimental: {
		fonts: [
			{
				provider: fontProviders.google(),
				name: "Plus Jakarta Sans",
				cssVariable: "--font-plus-jakarta-sans",
				weights: [200, 300, 400, 500, 600, 700, 800, 900],
			},
		],
	},
});
