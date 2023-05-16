import React, { Component } from 'react';

class Article extends Component {
    render() {
        return (
            <article>
                <h2>{this.props.title}</h2>
                <p>{this.props.desc}</p>
            </article>
        );
    }
}

export default Article;