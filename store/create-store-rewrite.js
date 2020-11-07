export const createStore = reducer => {
    let state = [];
    let listeners = [];
    
    const getState = () => state;

    const dispatch = action => {
        // two things should happen
            // 1 call the reducer
            // 2 notify the subscribers that the action has happened
        state = reducer(state, action);

        for (let i = 0; i< listeners.length; i++) {
            listeners[i]();
        }
    }

    const subscribe = listener => {
        listeners.push(listener);
    }

    return {
        getState,
        subscribe,
        dispatch
    }
}
