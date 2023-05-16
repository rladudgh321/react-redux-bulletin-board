import React, { Component } from 'react';

class Create extends Component {
    render() {
        return (
            <div>
                <h2>Create</h2>
                <form onSubmit={function(e){
                    e.preventDefault();
                    this.props.onSubmit(e.target.title.value,e.target.desc.value);
                }.bind(this)}>
                    <p><input type="text" name="title" placeholder="title"></input></p>
                    <p><textarea name="desc" placeholder="desc"></textarea></p>
                    <p><input type="submit" value="Create"></input></p>
                </form>
            </div>
        );
    }
}

export default Create;