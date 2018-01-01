import './style/style.css';
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import { API_KEY } from './config/keys.js';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('');
	}

	videoSearch(term) {
		YTSearch({ key: API_KEY, term: term }, videos => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {
		const { videos, selectedVideo } = this.state;
		const videoSearch = _.debounce(term => {
			this.videoSearch(term);
		}, 500);

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={selectedVideo} />
				<VideoList
					videos={videos}
					onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
				/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
