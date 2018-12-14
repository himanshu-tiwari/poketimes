import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {
	render() {
		const post = this.props.post ? (
			<div className="post card">
				<div className="card-content">
					<h4 className="center card-title">{this.props.post.title}</h4>
					<p>{this.props.post.body}</p>
				</div>
			</div>
		) : (
			<div className="center">Loading post...</div>
		) ;

		return(
			<div className="container">
				<h4>{post}</h4>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	let id = Number(ownProps.match.params.post_id);
	return {
		post : state.posts.find(post => post.id === id)
	};
};

export default connect(mapStateToProps)(Post);