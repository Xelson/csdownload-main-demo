import { useParams } from "@remix-run/react";
import { PageEdition } from "~/components/PageResource/PageEdition";

export let handle = {
	i18n: "common",
};

export default function PageResource() {
	const params = useParams();

	switch(params.id)
	{
		case 'edition': return <PageEdition />;
	}

	return null;
}