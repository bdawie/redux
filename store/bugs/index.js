import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

let counter = 1;

const slice = createSlice({
    name: 'bugs',
    initialState: [],
    reducers: {

        bugAssignedToUser: (bugs, action) => {
            const { bugId, userId } = action.payload;
            const bugIndex = bugs.findIndex(bug => bug.id === bugId);
            bugs[bugIndex].userId = userId;
        },

        bugAdded: (bugs, action) => {
            bugs.push({
                id: counter++,
                description: action.payload.description,
                resolved: false
            });
        },
        bugRemoved: (bugs, action) => {
            bugs.splice(bugs.findIndex(bug => bug.id === action.payload.id), 1);
        },
        bugResolved: (bugs, action) => {
            const index = bugs.findIndex(bug => bug.id === action.payload.id);
            bugs[index].resolved = true;
        }
    }
});

export const { bugAdded, bugRemoved, bugResolved, bugAssignedToUser } = slice.actions;

export default slice.reducer;

// secletor fucntion
// uneffective selectore since it returns new array each time!
// we use reselect library for memoization
// export const unresolvedBugsSelector = state => state.entities.bugs.filter(bug => !bug.resolved);

// first argument is a selector function: we are selecting the bugs.
const bugsSelector = state => state.entities.bugs;

// the second argument, is what we want to do with recieved state, i.e bugs, items, reports...
export const getUnresolvedBugs = createSelector(
    bugsSelector,
    bugs => bugs.filter(bug => !bug.resolved)
);

export const getBugsByUser = userId => createSelector(
    bugsSelector,
    bugs => bugs.filter(bug => bug.userId === userId)
);

