
import configureStore from './store/configureStore';
// import * as actions from './store/bugs/action-creators';

import { userAdded } from './store/users';
import {projectAdded, projectDeleted } from './store/projects';
import {bugAdded, bugRemoved, getUnresolvedBugs, bugAssignedToUser, getBugsByUser } from './store/bugs';

const store = configureStore();

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch((dispatch, getState) => {
    new Promise((res, rej) => {
        setTimeout(() => {
            res(dispatch(bugAdded({description: 'new bug'})));
            console.log('state', getState());
        }, 1000);

    });
});

store.dispatch({type: 'error', payload: {message: 'an error occurred'}});

// store.dispatch(userAdded({name: 'Badivi'}));

// store.dispatch(bugAdded({description: 'new bug 1'}));
// store.dispatch(bugAdded({description: 'new bug 2'}));
// store.dispatch(bugAdded({description: 'new bug 3'}));
// store.dispatch(bugAdded({description: 'new bug 4'}));

// store.dispatch(bugAssignedToUser({bugId: 1, userId: 1}))
// store.dispatch(bugAssignedToUser({bugId: 2, userId: 1}))

// const unresolvedBugs = getUnresolvedBugs(store.getState());
// const ibrahimsBugs = getBugsByUser(1)(store.getState());

// console.log('unresolved bugs', unresolvedBugs);
// console.log('Ibrahim Badiv s bugs', ibrahimsBugs);
