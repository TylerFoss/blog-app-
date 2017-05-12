import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchPosts} from "../actions";
import {Link} from "react-router-dom";
import _ from "lodash";
class PostsIndex extends Component{
  componentDidMount(){
    return(
      this.props.fetchPosts()
    )
  }
  renderPosts(){
  return _.map(this.props.posts, post => {
    return(
      <li className="list-group-item" key={post.id}>
        {post.title}
      </li>
    );
  });
  }

  render(){
    return(
      <div>
        <h1>Blog</h1>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post!
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{posts: state.posts};
}
// this is the same in nature as mapdispatch to props
export default connect(mapStateToProps, {fetchPosts})(PostsIndex);
