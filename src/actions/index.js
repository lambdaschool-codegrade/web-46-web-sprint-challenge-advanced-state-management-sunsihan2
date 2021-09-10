import axios from 'axios';

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
export const FETCH_START = "FETCH_START"
export const FETCH_SUCCESS = "FETCH_SUCCESS"
export const FETCH_FAIL="FETCH_FAIL"
export const ADD_MEMBER= "ADD_MEMBER"
export const ADD_ERROR_MESSAGE ="ADD_ERROR_MESSAGE"

export const fetchSmurfs=() => dispatch => {
    dispatch(fetchStart())
    axios.get('http://localhost:3333/smurfs')
        .then(res => {
            console.log('action index fetch smurfs: ',res.data)
            dispatch(fetchSuccess(res.data))
        })
        .catch(err => {
            dispatch(fetchFail(err))
        })
}

export const fetchStart=()=> ({type: FETCH_START})
export const fetchSuccess=(smurfs)=> {
    return ({type: FETCH_SUCCESS, payload: smurfs})
}
export const fetchFail =(err)=> {
    return({type:FETCH_FAIL, payload:err })
}
export const addSmurf=(name, nickname, position, summary)=> {
    return({
        type: ADD_MEMBER, payload: name, nickname,position,summary
    })
}
export const setErrorMessage=(err)=> {
    return({type: ADD_ERROR_MESSAGE, payload: err})
}