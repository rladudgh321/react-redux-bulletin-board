import React, { Component } from 'react';

class Nav extends Component {
    render() {
        const list =[];
        for(let i=0;i<this.props.data.length;i++){
            const d = this.props.data[i];
            list.push(<li key={d.id}><a href={'#!/READ'+ d.id} data-id={d.id}
            onClick={function(e){
                this.props.onClick(Number(e.target.dataset.id));
            }.bind(this)}
            >{d.title}</a></li>)
        }
        return (
            <nav>
                <ol>
                    {list}
                </ol>
            </nav>
        );
    }
}

export default Nav;