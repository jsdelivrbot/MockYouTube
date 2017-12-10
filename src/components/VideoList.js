import React from 'react';
import VideoListItem from './VideoListItem';

export default props => (
	<ul className="col-md-4 list-group">
		{props.videos.map(video => {
			return (
				<VideoListItem
					key={video.etag}
					video={video}
					onVideoSelect={props.onVideoSelect}
				/>
			);
		})}
	</ul>
);
