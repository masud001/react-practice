import React from 'react';

export default function Text({ addEmoji }) {
	const text = 'I am javaScript language';
	return <div>{addEmoji ? addEmoji(text, ':not-smile') : text}</div>;
}
