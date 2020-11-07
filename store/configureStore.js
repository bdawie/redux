import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import reducer from './bugs/reducer.js';
// import projectsReducer from './projects/projects';

import reducer from './reducer';
import logger from './middleware/logger';
// import thunk from './middleware/thunk';
import error from './middleware/error';

export default function() {
    return configureStore({reducer, middleware: [
        ...getDefaultMiddleware(),
        error,
        logger('console')]});
}
