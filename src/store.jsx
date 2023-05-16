import { createStore } from "redux";
export default createStore((state,action)=>{
    if(state === undefined){
        return {
            mode:'WELCOME',
            max_id:3,
            welcome:{title:'WELCOME', desc:'Hello, React'},
            contents:[
                {id:1,title:'html', desc:'html is ...'},
                {id:2,title:'css', desc:'css is ...'},
                {id:3,title:'jsx', desc:'jsx is ...'}
            ],
            id:null
        }
    }
    
    let newState={};
    if(action.type === 'WELCOME'){
        return newState = {...state, mode:'WELCOME', id:null};
    }
    if(action.type === 'READ'){
        return newState = {...state, mode:'READ', id:action.id};
    }
    if(action.type === 'CREATE'){
        return newState = {...state, mode:'CREATE'};
    }
    if(action.type === 'CREATE_PROCESS'){
        const newContents = [...state.contents];
        const newMaxId = state.max_id+1;
        const newContent = {id:newMaxId,title:action.title,desc:action.desc};
        newContents.push(newContent);

        return newState = {...state, contents:newContents, mode:'READ',max_id:newMaxId, id:newMaxId};
    }
    if(action.type === 'UPDATE'){
        return {...state, mode:'UPDATE'};
    }
    if(action.type === 'UPDATE_PROCESS'){
        const newContents = [...state.contents];
        const newContent = {id:action.id, title:action.title, desc:action.desc};
        for(let i=0;i<newContents.length;i++){
            if(newContents[i].id === action.id){
                newContents[i] = newContent;
                break; 
            }
        }
        return {...state, contents:newContents, mode:'READ'};
    }
    if(action.type === 'DELETE_PROCESS'){
        const newContents =state.contents.filter(item => item.id !== state.id );
        return newState = {...state, contents:newContents, mode:'WELCOME'}
    }

    console.log(action, state, newState);
    return newState;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());