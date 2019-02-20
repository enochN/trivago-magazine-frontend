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
                        <img className="img img-fluid" style={{width: "100%", height: "550px"}}
                             src={this.props.postDetails.thumbnail_url} alt={this.props.postDetails.thumbnail.alt}/>
                    }

                    {!this.props.postDetails ? null :
                        <div className="container">
                            <div className="row" style={{paddingTop: "24px"}}>
                                <div className="col col-lg-8 col-sm-12" style={{minHeight: "600px", padding: "8px"}}>
                                    <h1 style={{fontSize: "44px", lineHeight: "1.25", fontWeight: "700", color: "#303030"}}>
                                        {this.props.postDetails.title}
                                    </h1>
                                    <div style={{fontSize:"20px", lineHeight:"30px", color:"#303030", fontWeight: "400", textAlign:"justify"}}
                                         dangerouslySetInnerHTML={{__html: this.props.postDetails.content[0].text}} />
                                </div>
                                <div className="col col-lg-4"
                                     style={{minHeight: "600px"}}/>
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