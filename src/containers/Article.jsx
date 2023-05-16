import Article from "../components/Article";
import { connect } from "react-redux";

export default connect(
    state=>{
        let title,desc;
        if(state.mode === 'WELCOME'){
            title = state.welcome.title;
            desc = state.welcome.desc;
        } else {
            for(let i=0;i<state.contents.length;i++){
                const d = state.contents[i];
                if(d.id === state.id){
                    title = d.title;
                    desc = d.desc;
                }
            }
        }
        return {
            title,
            desc
        }
    }
)(Article);