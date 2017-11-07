import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
const API_KEY = 'AIzaSyBKtZZ52n0CcHOXzded1wWN8t2d6Z6JpXA';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: []
		};

		YTSearch({ key: API_KEY, term: 'surfboards' }, videos => {
			this.setState({ videos });
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
