import React, { Component } from 'react';

class Post extends Component {

    render(){
        return (
            <a className="trivago-post-wrapper" href={`/p/${this.props.data.slug}`} target="_self">
            <div className="trivago-post">
                <img className="img img-fluid" src={this.props.data.thumbnail_url} alt={this.props.data.thumbnail.alt} />
                <h2>
                    <span>
                        {this.props.data.card_title}
                    </span>
                </h2>
                <p className="excerpt">
                    {this.props.data.excerpt}
                </p>

            </div>
            </a>
        )
    }
}


export default Post;