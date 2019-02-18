import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import '../../styles/App.css';
import {loadLatestPosts} from "../actions";
import {connect} from "react-redux";
import Post from "../components/Post";

class HomePage extends Component {

    componentDidMount(){
        this.props.loadLatestPosts();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
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