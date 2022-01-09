import React, { Component } from 'react';

export default class AppContent extends Component {

    // state = {posts: []};

    constructor(props) {
		super(props);
		this.handlePostChange = this.handlePostChange.bind(this);
	}

	handlePostChange(posts) {
		this.props.handlerPostChange(posts);
	}

    // constructor(props) {
    //     super(props);
    //     this.listRef = React.createRef();
    // }

    // anotherFunction = () => {
    //     console.log("another function")
    // }

    // leftParagraph = () => {
    //     console.log("left paragraph")
    // }

    fetchList = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then(json => {
                this.handlePostChange(json);
                // this.setState({posts: json});

                // console.log(json);
                // // let posts = document.getElementById('post-list');
                // const posts = this.listRef.current;

                // json.forEach(function(obj){
                //     let li = document.createElement('li');
                //     li.appendChild(document.createTextNode(obj.title));
                //     posts.appendChild(li);
                // })
            })
        // console.log("I was clicked");
    }

    clickedItem = (x) => {
        console.log("clicked", x)
    }

    render() {
        return (

            <div>
                This is the content.

                <br />
                <hr />
                {/* <p onMouseEnter={this.anotherFunction} onMouseLeave={this.leftParagraph}>This is some text</p> */}

                <button onClick={this.fetchList} className="btn btn-primary">Fetch Data</button>

                <hr />

                {/* <ul id="post-list" ref={this.listRef}></ul> */}

                {/* <p>Posts is {this.state.posts.length} items long</p> */}
                <p>Posts is {this.props.posts.length} items long</p>

                <ul>
                    {this.props.posts.map((c) => (
                        <li key={c.id}>
                            <a href="#!" onClick={() => this.clickedItem(c.id)}>
                                {c.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

        );
    }
}