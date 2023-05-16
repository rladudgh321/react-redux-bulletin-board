import { Component } from "react";
import Header from "./components/Header";
import Nav from "./containers/Nav";
import Article from "./containers/Article";
import Control from "./containers/Control";
import Create from "./containers/Create";
import Update from "./containers/Update";
import { connect } from "react-redux";
class App extends Component{
    render(){
        let content = null;
        if(this.props.mode === 'WELCOME'){
            content = <Article></Article>
        } else if(this.props.mode === 'READ'){
            content = <Article></Article>
        } else if(this.props.mode === 'CREATE'){
            content = <Create></Create>
        } else if(this.props.mode === 'UPDATE'){
            content = <Update></Update>
        }
        return(
            <div>
                <Header></Header>
                <Nav></Nav>
                {content}
                <Control></Control>
                
            </div>
        );
    }
}

export default connect(
    state=>{
        return {
            mode : state.mode
        }
    }
)(App);