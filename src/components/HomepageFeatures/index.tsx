import Heading from "@theme/Heading";
import clsx from "clsx";
import styles from "./styles.module.css";
import type { JSX } from "react";

type FeatureItem = {
	title: string;
	Svg: React.ComponentType<React.ComponentProps<"svg">>;
	description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
	{
		title: "AdonisJS",
		Svg: require("@site/static/img/adonis-logo.svg").default,
		description: (
			<>
				AdonisJS est un framework backend Node.js moderne, conçu pour être
				rapide, robuste et facile à utiliser, avec une approche MVC élégante et
				des outils prêts à l’emploi.
			</>
		),
	},
	{
		title: "Nuxt",
		Svg: require("@site/static/img/nuxt-logo.svg").default,
		description: (
			<>
				Nuxt est un framework frontend puissant basé sur Vue.js, qui simplifie
				le développement d'applications performantes, optimisées pour le SEO et
				prêtes pour le rendu côté serveur (SSR).
			</>
		),
	},
];

function Feature({ title, Svg, description }: FeatureItem) {
	return (
		<div className={clsx("col col--4")}>
			<div className="text--center">
				<Svg
					className={styles.featureSvg}
					role="img"
					style={{ width: "100px", height: "100px" }}
				/>
			</div>
			<div className="text--center padding-horiz--md">
				<Heading as="h3">{title}</Heading>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures(): JSX.Element {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row" style={{ justifyContent: "space-evenly" }}>
					{FeatureList.map((props) => (
						<Feature key={props.title} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
