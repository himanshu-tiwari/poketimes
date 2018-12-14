import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import pokeball from '../pokeball.png';
import { connect } from 'react-redux';

class Home extends Component {
	render() {
		const { posts } = this.props;
		const postList = posts.length > 0 ? (
			posts.map(post => {
				return(
					<div className="post card" key={post.id}>
						<div className="card-content">
							<Link to={'/post/' + post.id }>
								<span className="card-title">{post.title}</span>
							</Link>

							<p>{post.body}</p>
							<img src={pokeball} className="pokeball" alt="pokeball" />
						</div>
					</div>
				);
			})
		) : (
			<div className="center">No posts yet</div>
		);
		return(
			<div className="container home">
				<h4 className="center">Home</h4>
				{postList}
			</div>
		);
	}
};

const mapStateToProps = (state) => {
	return {
		posts : state.posts
	};
};

export default connect(mapStateToProps)(Home);