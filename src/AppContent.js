import React, { Component } from 'react';

export default class AppContent extends Component {

    constructor(props) {
        super(props);
        this.listRef = React.createRef();
    }

    anotherFunction = () => {
        console.log("another function")
    }

    leftParagraph = () => {
        console.log("left paragraph")
    }

    fetchList = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then(json => {
                console.log(json);
                // let posts = document.getElementById('post-list');
                const posts = this.listRef.current;

                json.forEach(function(obj){
                    let li = document.createElement('li');
                    li.appendChild(document.createTextNode(obj.title));
                    posts.appendChild(li);
                })
            })
        console.log("I was clicked");
    }

    render() {
        return (

            <div>
                This is the content.

                <br />
                <hr />
                <p onMouseEnter={this.anotherFunction} onMouseLeave={this.leftParagraph}>This is some text</p>

                <button onClick={this.fetchList} className="btn btn-primary">Fetch Data</button>

                <hr />

                <ul id="post-list" ref={this.listRef}></ul>
            </div>

        );
    }
}