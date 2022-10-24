import type { LinksFunction, MetaFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData
} from "@remix-run/react";

import { useChangeLanguage } from "remix-i18next";
import { useTranslation } from "react-i18next";
import i18next from "~/i18next.server";
import { MainHeader } from "./components/PageMain/MainHeader";
import { Footer } from "./components/Footer";

import globalStyles from "./styles/index.css";
import carouselStyles from "react-responsive-carousel/lib/styles/carousel.min.css";

export const links: LinksFunction = () => {
	return [
		{ rel: "stylesheet", href: carouselStyles },
		{ rel: "stylesheet", href: globalStyles }
	];
};

export const meta: MetaFunction = () => ({
	charset: "utf-8",
	title: "csdownload",
	viewport: "width=device-width,initial-scale=1",
});

type LoaderData = { locale: string };

export let loader: LoaderFunction = async ({ request }) => {
	let locale = await i18next.getLocale(request);
	return json<LoaderData>({ locale });
};

export default function App() {
	let { locale } = useLoaderData<LoaderData>();
	let { i18n } = useTranslation();

	useChangeLanguage(locale);

	return (
		<html lang={locale} dir={i18n.dir()}>
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<div className="Root">
					<MainHeader />
					<div className="PageContent">
						<Outlet />
					</div>
					<Footer />
				</div>
				<ScrollRestoration />
				<Scripts />
				{process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
			</body>
		</html>
	);
}
