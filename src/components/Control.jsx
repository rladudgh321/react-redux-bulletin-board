import React, { Component } from 'react';

class Control extends Component {
    render() {
        let context =null;
        if(this.props.id){
            context = <div>
                <li><a href="#!Update" onClick={function(e){
                    e.preventDefault();
                    this.props.onClick('UPDATE');
                }.bind(this)}>Update</a></li>
                <li><input type="button" value="Delete" onClick={function(e){
                    e.preventDefault();
                    this.props.onClick('DELETE_PROCESS');
                }.bind(this)}></input></li>
            </div>
        } else {
            context = null;
        }
        return (
            <div>
                <ul>
                    <li><a href="#!Create" onClick={function(e){
                        e.preventDefault();
                        this.props.onClick('CREATE');
                    }.bind(this)}>Create</a></li>
                    {context}
                </ul>
            </div>
        );
    }
}

export default Control;