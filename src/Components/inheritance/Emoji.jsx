import React, { Component } from 'react';

export default class Emoji extends Component {
	addEmoji = (text, emoji) => ` ${emoji}  ${text} ${emoji}`;
	render(override) {
		let text = 'this is text';
		if (override) text = override;
		return <div>{text}</div>;
	}
}
