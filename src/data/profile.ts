export type SocialLink = {
	label: string;
	href: string;
};

export type ProfileStat = {
	label: string;
	value: string;
};

export const profile = {
	name: "William Banas",
	url: "williamb.dev",
	role: "Développeur Full-Stack",
	bio: [
		"Développeur web basé à Paris, avec deux ans d'expérience en développement front-end et back-end, ainsi qu'en conception d'applications",
		`J'ai eu l'opportunité de travailler pour
    <a className='text-decoration-line' href="https://www.leonis-formation.fr/" target="_blank" rel="noopener noreferrer">Collecty form</a>,
    <a href="https://yvelinespc.fr/" target="_blank" rel="noopener noreferrer">YvelinesPC</a>
    ainsi que pour le ministère de l'Intérieur au sein de la <a href="https://www.police-nationale.interieur.gouv.fr/nous-decouvrir/notre-organisation/organisation/direction-nationale-de-police-judiciaire-dnpj" target="_blank" rel="noopener noreferrer">Direction nationale de la police judiciaire</a>.`,
		"Pendant mon temps libre, j'aime passer du temps avec mes amis, parcourir Skyrim et écouter de la dance music.",
	],
	email: "hello@example.com",
	location: "Paris, France",
	socials: [
		{ label: "GitHub", href: "#" },
		{ label: "LinkedIn", href: "#" },
	],
	stats: [
		{ label: "Années d'expérience", value: "2+" },
		{ label: "Localisation", value: "Paris, France" },
		{ label: "Disponibilité", value: "Ouvert aux missions" },
	],
} satisfies {
	name: string;
	role: string;
	url: string;
	bio: string[];
	email: string;
	location: string;
	socials: SocialLink[];
	stats: ProfileStat[];
};
