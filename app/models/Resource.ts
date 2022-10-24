export interface Resource {
	id: number;
	created_at: string;

	type: string;
	title: string;
	category: string;
	rating: number;
	views: number;
	tags: string[];
	information: InformationEntry[];
	comments: Comment[];
	description_short: string;
	description_full: string;
}

export interface InformationEntry {
	key: string;
	value: string;
}

export interface Comment {
	id: number,
	created_at: string;

	username: string;
	avatar_url: string;
	is_admin: boolean;
	content: string;
	likes: number,
	reply_for: number | null;
}

export interface ResourceDownloadable extends Resource {
	size: number;
}