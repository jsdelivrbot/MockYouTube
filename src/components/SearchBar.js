import React, { Component } from 'react';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = { term: '' };
	}

	onInputChange(e) {
		const term = e.target.value;
		this.setState({ term });
		this.props.onSearchTermChange(term);
	}

	render() {
		const { term } = this.state;
		return (
			<div className="search-bar">
				<input
					value={term}
					onChange={this.onInputChange.bind(this)}
					placeholder="Seach"
				/>
			</div>
		);
	}
}
