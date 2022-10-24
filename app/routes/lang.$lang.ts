import type { ActionFunction } from "@remix-run/node";
import { cookieLang } from "~/cookies.server";

export const action: ActionFunction = async ({request, params}) => {
	const lang = params.lang;
	if(!lang) return null;

	return new Response("...", {
		headers: {
		  "Set-Cookie": await cookieLang.serialize(lang)
		},
	});
}