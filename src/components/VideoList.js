import React, { Component } from 'react';
import VideoListItem from './VideoListItem';

class VideoList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { videos, onVideoSelect } = this.props;
		return (
			<ul className="col-md-4 list-group">
				{videos.map(video => {
					return (
						<VideoListItem
							key={video.etag}
							video={video}
							onVideoSelect={onVideoSelect}
						/>
					);
				})}
			</ul>
		);
	}
}

export default VideoList;
