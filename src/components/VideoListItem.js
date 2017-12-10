import React, { Component } from 'react';

export default class VideoListItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { video, onVideoSelect } = this.props;
		const imgURL = video.snippet.thumbnails.default.url;
		return (
			<li onClick={() => onVideoSelect(video)} className="list-group-item">
				<div className="video-list media">
					<div className="media-left">
						<img className="media-object" src={imgURL} />
					</div>

					<div className="media-body">
						<div className="media-heading">{video.snippet.title}</div>
					</div>
				</div>
			</li>
		);
	}
}
