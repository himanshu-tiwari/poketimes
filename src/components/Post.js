import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {
	render() {
		this.handleClick = () => {
			this.props.deletePost(this.props.post.id);
			this.props.history.push('/');
		};

		const post = this.props.post ? (
			<div className="post">
					<h4 className="center">{this.props.post.title}</h4>
					<h6>{this.props.post.body}</h6>

					<div className="right">
						<button className="btn grey" onClick={this.handleClick}>Delete Post</button>
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

const mapDispatchToProps = (dispatch) => {
	return {
		deletePost : (id) => { dispatch({type : 'DELETE_POST', id : id}) }
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);