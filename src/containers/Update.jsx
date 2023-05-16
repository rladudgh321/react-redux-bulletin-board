import Update from "../components/Update";
import { connect } from "react-redux";

export default connect(
    state=>{
        let id,title,desc;
        for(let i=0;i<state.contents.length;i++){
            const d = state.contents[i];
            if(d.id === state.id){
                id = d.id;
                title = d.title;
                desc = d.desc;
                break;
            }
        }
        return {
            id,title,desc
        }
    },
    dispatch=>{
        return {
            onSubmit : (id,title, desc)=>{
                dispatch({type:'UPDATE_PROCESS', id,title,desc});
            }
        }
    }
)(Update);