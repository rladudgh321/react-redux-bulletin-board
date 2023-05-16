import { connect } from "react-redux"
import Control from "../components/Control"

export default connect(
    state=>{
        return {
            id:state.id
        }
    }
    ,
    dispatch=>{
        return {
            onClick : mode =>{
                if(mode === 'DELETE_PROCESS'){
                    if(!window.confirm('REAL?')){
                        return;
                    }
                }
                dispatch({type:mode});
            }
        }
    }
    )(Control);