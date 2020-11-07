import { createSlice } from '@reduxjs/toolkit';

let idCounter = 0;

const slice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        userAdded: (users, action) => {
            users.push({
                id: ++idCounter,
                name: action.payload.name
            });
        },
        userRemoved: (users, action) => {
            const userIndex = users.findIndex(user => user.id === action.payload.id);
            users.splice(userIndex, 1);
        }
    }
});

export const { userAdded, userRemoved } = slice.actions;

export default slice.reducer;
