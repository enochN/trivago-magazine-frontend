import React, { Component } from 'react';
import '../../styles/App.css';
import {loadLatestPosts} from "../actions";
import {connect} from "react-redux";
import Post from "../components/Post";
import MagazineHeader from "../components/MagazineHeader";

class HomePage extends Component {

    componentDidMount(){
        this.props.loadLatestPosts();
    }

    render() {
        return (
            <div className="App">
                <MagazineHeader />
                <div className="container">
                    <div className="row" style={{marginTop: "4px"}}>
                    {
                        this.props.latestPosts.map((post) => {
                            return <div key={post.id}  className="col col-sm-12 col-md-6 col-lg-4"><Post data={post} /></div>
                        })
                    }
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    latestPosts: state.posts.latestPosts
});

export default connect(
    mapStateToProps,
    {
        loadLatestPosts
    }
)(HomePage)