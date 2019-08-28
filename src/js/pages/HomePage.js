import React, { useEffect } from "react";
import { connect } from "react-redux";

import "../../styles/App.css";
import { loadLatestPosts } from "../actions";
import Post from "../components/Post";
import MagazineHeader from "../components/MagazineHeader";
import MagazineFooter from "../components/MagazineFooter";
import banner from "../../assets/landscape_one_unsplash.jpg";

function HomePage({ latestPosts, loadLatestPosts }) {
  useEffect(() => {
    loadLatestPosts();
  }, []);

  return (
    <div className="App">
      <MagazineHeader />
      <div className="main-content">
        <div className="banner-image">
          <img src={banner} alt="banner" />
          <p>Latest Posts</p>
        </div>
        <div className="container" style={{ paddingBottom: "16px" }}>
          <div className="row" style={{ marginTop: "4px" }}>
            {latestPosts.map(post => {
              return (
                <div key={post.id} className="col-sm-12 col-md-12 col-lg-4">
                  <Post data={post} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <MagazineFooter />
    </div>
  );
}

const mapStateToProps = state => ({
  latestPosts: state.posts.latestPosts
});

export default connect(
  mapStateToProps,
  {
    loadLatestPosts
  }
)(HomePage);
