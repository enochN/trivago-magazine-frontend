import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import "../../styles/App.css";
import { connect } from "react-redux";
import { loadPostDetails } from "../actions";
import MagazineHeader from "../components/MagazineHeader";
import MagazineFooter from "../components/MagazineFooter";

function PostDetailsPage({
  loadPostDetails,
  postDetails,
  match: {
    params: { slug }
  }
}) {
  useEffect(() => {
    loadPostDetails(slug);
  }, []);

  return (
    <div className="App">
      <MagazineHeader />
      {!postDetails ? null : (
        <Helmet>
          <meta charSet="utf-8" />
          <title>{postDetails.seo_meta.title}</title>
          <meta name="description" content={postDetails.seo_meta.metadesc} />
          <link rel="canonical" href={postDetails.seo_meta.canonical} />
          <meta
            name="keywords"
            content={`${postDetails.seo_meta.focuskw}, ${postDetails.seo_meta.metakeywords}`}
          />
          <meta
            name="og:site_name"
            property="og:site_name"
            content={postDetails.seo_meta.opengraph_site_name}
          />
          <meta
            name="og:locale"
            property="og:locale"
            content={postDetails.seo_meta.opengraph_locale}
          />
          <meta
            name="og:type"
            property="og:type"
            content={postDetails.seo_meta.opengraph_type}
          />
          <meta
            name="og:title"
            property="og:title"
            content={postDetails.seo_meta.opengraph_title}
          />
          <meta
            name="og:description"
            property="og:description"
            content={postDetails.seo_meta.opengraph_description}
          />
          <meta
            name="og:url"
            property="og:url"
            content={postDetails.seo_meta.opengraph_url}
          />
          <meta
            name="og:image"
            property="og:image"
            content={postDetails.seo_meta.opengraph_image}
          />
          <meta
            name="twitter:title"
            content={postDetails.seo_meta.twitter_title}
          />
          <meta
            name="twitter:description"
            content={postDetails.seo_meta.twitter_description}
          />
          <meta
            name="twitter:image"
            content={postDetails.seo_meta.twitter_image}
          />
        </Helmet>
      )}
      <div className="main-content">
        {!postDetails ? null : (
          <div className="banner-image">
            <img
              className="img img-fluid"
              src={postDetails.thumbnail_url}
              alt={postDetails.thumbnail.alt}
            />
          </div>
        )}

        {!postDetails ? null : (
          <div className="container">
            <div className="row" style={{ padding: "8px" }}>
              <div
                className="col-lg-8 col-sm-12 col-md-12"
                style={{ minHeight: "600px", padding: "8px" }}
              >
                <h1 className="post-title">{postDetails.title}</h1>
                <div
                  className="post-content"
                  dangerouslySetInnerHTML={{
                    __html: postDetails.content[0].text
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <MagazineFooter />
    </div>
  );
}

const mapStateToProps = state => ({
  postDetails: state.posts.postDetails
});

export default connect(
  mapStateToProps,
  { loadPostDetails }
)(PostDetailsPage);
