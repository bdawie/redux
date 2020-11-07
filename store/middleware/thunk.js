// this is available under redux dev-tools. 
// if we don't use that we need to install redux-thunk
const thunk = ({dispatch, getState}) => next => action => {
    if (typeof action === 'function') {
        action(dispatch, getState);
    }
    else {
        next(action);
    }
}

export default thunk;