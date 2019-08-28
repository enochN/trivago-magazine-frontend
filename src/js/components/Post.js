import React from "react";

function Post({ data }) {
  return (
    <a className="trivago-post-wrapper" href={`/p/${data.slug}`} target="_self">
      <div className="trivago-post">
        <img
          className="img img-fluid"
          src={data.thumbnail_url}
          alt={data.thumbnail.alt}
        />
        <h2>
          <span>{data.card_title}</span>
        </h2>
        <p className="excerpt">{data.excerpt}</p>
      </div>
    </a>
  );
}

export default Post;
