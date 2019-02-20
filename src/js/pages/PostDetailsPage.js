import React, { Component } from 'react';
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