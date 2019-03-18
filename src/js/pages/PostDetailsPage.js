import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import '../../styles/App.css';
import {connect} from "react-redux";
import {loadPostDetails} from "../actions";
import MagazineHeader from "../components/MagazineHeader";
import MagazineFooter from "../components/MagazineFooter";

class PostDetailsPage extends Component {

    componentWillMount(){
        this.props.loadPostDetails(this.props.match.params["slug"]);
    }

    render() {
        return (
            <div className="App">
                <MagazineHeader />
              { !this.props.postDetails ? null : 
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>{this.props.postDetails.seo_meta.title}</title>
                        <meta name="description" content={this.props.postDetails.seo_meta.metadesc} />
                        <link rel="canonical" href={this.props.postDetails.seo_meta.canonical} />
                        <meta name="keywords" content={`${this.props.postDetails.seo_meta.focuskw}, ${this.props.postDetails.seo_meta.metakeywords}`} />
                        <meta name="og:site_name" property="og:site_name" content={this.props.postDetails.seo_meta.opengraph_site_name} />
                        <meta name="og:locale" property="og:locale" content={this.props.postDetails.seo_meta.opengraph_locale} />
                        <meta name="og:type" property="og:type" content={this.props.postDetails.seo_meta.opengraph_type} />
                        <meta name="og:title" property="og:title" content={this.props.postDetails.seo_meta.opengraph_title} />
                        <meta name="og:description" property="og:description" content={this.props.postDetails.seo_meta.opengraph_description} />
                        <meta name="og:url" property="og:url" content={this.props.postDetails.seo_meta.opengraph_url} />
                        <meta name="og:image" property="og:image" content={this.props.postDetails.seo_meta.opengraph_image} />
                        <meta name="twitter:title" content={this.props.postDetails.seo_meta.twitter_title} />
                        <meta name="twitter:description" content={this.props.postDetails.seo_meta.twitter_description} />
                        <meta name="twitter:image" content={this.props.postDetails.seo_meta.twitter_image} />

                    </Helmet>
             }
                <div className="main-content">
                    {!this.props.postDetails ? null :
                        <div className="banner-image">
                            <img className="img img-fluid" src={this.props.postDetails.thumbnail_url} alt={this.props.postDetails.thumbnail.alt}/>
                        </div>
                    }

                    {!this.props.postDetails ? null :
                        <div className="container">
                            <div className="row" style={{padding: "8px"}}>
                                <div className="col-lg-8 col-sm-12 col-md-12" style={{minHeight: "600px", padding: "8px"}}>
                                    <h1 className="post-title">
                                        {this.props.postDetails.title}
                                    </h1>
                                    <div className="post-content" dangerouslySetInnerHTML={{__html: this.props.postDetails.content[0].text}} />
                                </div>

                            </div>
                        </div>
                    }
                </div>
                <MagazineFooter />
            </div>
        );
    }
}


const mapStateToProps = state => ({
    postDetails: state.posts.postDetails
});

export default connect(mapStateToProps, {loadPostDetails})(PostDetailsPage)