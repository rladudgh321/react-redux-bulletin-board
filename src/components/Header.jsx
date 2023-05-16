import React, { Component } from 'react';
import { connect } from 'react-redux';
class Header extends Component {
    render() {
        return (
            <header>
                <h1><a href="#!/" onClick={function(){
                    this.props.onClick('WELCOME');
                }.bind(this)}>WEB</a></h1>
            </header>
        );
    }
}

export default connect(
    null
    ,
    dispatch=>{
        return {
            onClick: mode =>{
                dispatch({type:mode});
            }
        }
    }
)(Header);