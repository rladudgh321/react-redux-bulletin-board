import React, { Component } from 'react';

class Update extends Component {
    state ={
        id:this.props.id,
        title:this.props.title,
        desc:this.props.desc
    }
    onChangeHandler(e){
        // debugger;
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render() {
        return (
            <div>
                <h2>Update</h2>
                <form onSubmit={function(e){
                    e.preventDefault();
                    this.props.onSubmit(Number(e.target.id.value),e.target.title.value,e.target.desc.value);
                }.bind(this)}>
                    <input type="hidden" name="id" value={this.state.id}></input>
                    <p><input type="text" name="title" placeholder="title" value={this.state.title} onChange={this.onChangeHandler.bind(this)}></input></p>
                    <p><textarea name="desc" placeholder="desc" value={this.state.desc} onChange={this.onChangeHandler.bind(this)}></textarea></p>
                    <p><input type="submit" value="Update"></input></p>
                </form>
            </div>
        );
    }
}

export default Update;