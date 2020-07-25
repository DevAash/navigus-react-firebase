const initState={
    projects:[
        {id:'1',title:'hello',content:'content5'},
        {id:'2',title:'password',content:'content1'},
        {id:'3',title:'text',content:'content2'},
    ]
    
}
   const projectReducer = (state=initState,action) =>{
     switch(action.type){
         case 'CREATE_PROJECT':
             console.log('doneproject',action.project);
             return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('project error',action.err);
            return state;
        default:
            return state;
     }  
}
export default projectReducer