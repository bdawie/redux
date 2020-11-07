import { createSlice } from '@reduxjs/toolkit';

let counter = 1;
const projectsSlice = createSlice({
    name: 'projects',
    initialState: [],
    reducers: {
        projectAdded: (projects, action) => {
            projects.push({
                id: counter++,
                name: action.payload.name
            });
        },
        projectDeleted: (projects, action) => {
            projects.splice(projects.findIndex(project => project.id === action.payload.id));
        }
    }
});

export const {projectAdded, projectDeleted} = projectsSlice.actions;

export default projectsSlice.reducer;