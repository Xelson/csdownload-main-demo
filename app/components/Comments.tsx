import { Children, createContext, useContext, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "~/helpers/attributes";
import { useDisclosure } from "~/helpers/hooks";
import { Comment } from "~/models/Resource";
import { Icon } from "./Icon";
import { Input } from "./input/Input";
import { forwardRef, ComponentPropsWithoutRef } from "react";
import { Dropdown, DropdownContent } from "./input/Dropdown";

const contextComments = createContext<Comment[] | null>(null);

function useComment() {
	const comments = useContext(contextComments);
	return (id: number) => comments?.find(c => c.id == id);
}


interface CommentAvatarProps extends ComponentPropsWithoutRef<'div'> {
	avatarUrl: string
}

export const CommentAvatar = forwardRef<HTMLDivElement, CommentAvatarProps>((propsAll, ref) => {
	const { className, avatarUrl, ...props } = propsAll;
	return (
		<div 
			{...props} 
			ref={ref}
			className={classNames('CommentAvatar', className)}
			style={{backgroundImage: `url(${avatarUrl})`}} 
		/>
	);
});

export function CommentWriterAvatarPicker({onChange}: {onChange?: (avatarId: number) => void}) {
	const avatarsCount = 20;
	const { isOpen, onToggle, onClose } = useDisclosure();
	const [avatar, setAvatar] = useState(1);

	function onAvatarClick(a: number) {
		setAvatar(a);
		onChange?.(a);
		onClose();
	}

	return (
		<>
			<div className="CommentAvatar" />

			<Dropdown className="Dropdown__AvatarPicker">
				<CommentAvatar 
					className="CommentAvatar__Preview" 
					avatarUrl={`/img/avatars/${avatar}.jpg`} 
					onClick={onToggle} 
				/>
				<DropdownContent isOpen={isOpen}>
					{Array.from({length: avatarsCount}).map((_, index) => {
						const a = index + 1;
						return (
							<CommentAvatar 
								key={a}
								className="CommentAvatar__Preview" 
								avatarUrl={`/img/avatars/${a}.jpg`}
								onClick={() => onAvatarClick(a)}
							/>
						);
					})}
				</DropdownContent>
			</Dropdown>
		</>
	);
}

interface CommentWriterProps extends ComponentPropsWithoutRef<'div'> {}
export const CommentWriter = forwardRef<HTMLDivElement, CommentWriterProps>((props, ref) => {
	const { className } = props;

	const refInputMessage = useRef<HTMLInputElement>(null);
	const refInputUsername = useRef<HTMLInputElement>(null);
	const [usernameInputOpened, setUsernameInputOpened] = useState(false);

	const { t } = useTranslation();
	const refAvatar = useRef(1);

	function setAvatar(avatar: number) {
		refAvatar.current = avatar;
	}	

	function onMessageSend(username: string, avatar: number, message: string) {
		const inputMessage = refInputMessage.current;
		const inputUsername = refInputUsername.current;

		alert(`Send message!\n${username}\n${message}\navatar: ${avatar}`);

		if(inputMessage) inputMessage.value = "";
		if(inputUsername) inputUsername.value = "";

		setUsernameInputOpened(false);
	}

	function onClickSend() {
		const inputMessage = refInputMessage.current;
		const inputUsername = refInputUsername.current;

		if(inputMessage) {
			const messageValue = inputMessage.value.trim();

			if(!usernameInputOpened) {
				setUsernameInputOpened(messageValue.length >= 3);
				requestAnimationFrame(() => inputUsername?.focus());
			}

			if(inputUsername) {
				const usernameValue = inputUsername.value.trim();
				if(usernameValue.length >= 3 && messageValue.length >= 3) {
					const avatar = refAvatar.current;
					onMessageSend(usernameValue, avatar, messageValue);
				}
			}
		}
	}

	function onInputKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
		if(event.key === 'Enter') {
			onClickSend()
		}
	}

	return (
		<div {...props} className={classNames('CommentWriter', className)}>
			<CommentWriterAvatarPicker onChange={setAvatar}/>
			<div className="InputPanel" hidden={!usernameInputOpened}>
				<Input 
					placeholder={t('resource.card.comments.placeholder_username')}
					ref={refInputUsername}
					onKeyDown={onInputKeyDown}
				/>
			</div>
			<div className="InputPanel">
				<Input 
					placeholder={t('resource.card.comments.placeholder_message')}
					ref={refInputMessage}
					onKeyDown={onInputKeyDown}
				/>
				<div className="Button__Send" onClick={onClickSend}>
					<Icon icon="send-plane-fill" size="18px" />
				</div>
			</div>
		</div>
	);
});

function CommentRenderer({children, comment}: React.PropsWithChildren<{comment: Comment}>) {
	const { t } = useTranslation();
	const isDownvoted = comment.likes < 0;
	const isAdmin = comment.is_admin;
	const replies = Children.toArray(children);

	const comments = useComment();
	const commentReplyFor = comments(comment.reply_for ?? 0);

	const disclosureReplies = useDisclosure();
	const disclosureWriter = useDisclosure();

	return (
		<div className={classNames("Comment", isDownvoted && "Comment__downVoted")}>
			<div className="Post">
				<div className={classNames("Header", isAdmin && "Header__isAdmin")}>
					<CommentAvatar avatarUrl={comment.avatar_url} />
					<span className="Username">{comment.username}</span>
					<time>{'2 days ago'/*comment.created_at*/}</time>
				</div>
				<div className="Content">
					{commentReplyFor && <span className="Username">{commentReplyFor.username.split(' ')[0]}, </span>}
					{comment.content}
				</div>
				<div className="Footer">
					<a onClick={disclosureWriter.onToggle}>
						{disclosureWriter.isOpen ?
							t('resource.card.comments.button_reply_cancel')
							:
							t('resource.card.comments.button_reply')
						}
					</a>
					<div className="LikesPanel">
						<Icon icon="arrow-up-s-line" size="18px" />
						<span>{comment.likes}</span>
						<Icon icon="arrow-down-s-line" size="18px" />
					</div>
				</div>
			</div>
			<div className="Replies" data-opened={disclosureReplies.isOpen}>
				<CommentWriter className="CommentWriter__defaultHidden" data-opened={disclosureWriter.isOpen}/>
				{replies.length > 0 &&
					<>
						<a onClick={disclosureReplies.onToggle}><Icon icon="arrow-go-forward-fill" size="18px" /> 
							{t('resource.card.comments.replies', {
								count: replies.length
							})}
						</a>
						<div className="List">
							{replies}
						</div>
					</>
				}
			</div>
		</div>
	);
}

export function CommentTree({comments}: {comments: Comment[]}) {
	return (
		<contextComments.Provider value={comments}>
			<div className="CommentTree">
				<CommentWriter />
				{comments
					.filter(c => c.reply_for == null)
					.sort((a, b) => b.id - a.id)
					.map(c => {
						const repliesInside = new Set([c.id]);
						const repliesToRender: Comment[] = [];
						comments
							.forEach(r => {
								if(r.reply_for && repliesInside.has(r.reply_for)) {
									repliesInside.add(r.id);
									repliesToRender.push(r);
								}
							})					
 
						return (
							<CommentRenderer key={c.id} comment={c}>
								{repliesToRender
									.map(r => <CommentRenderer key={r.id} comment={r} />)
								}
							</CommentRenderer>
						)
					})
				}
			</div>
		</contextComments.Provider>
	);
}