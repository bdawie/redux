// Middleware are used to intercept actions before they get handled by the reducer.

// For logging, authenticating, etc..

// const logger = store => next => action => {
//     console.log(store);
//     console.log(next);
//     console.log('Action dispatched', action);

//     // call next to procceed to the next middleware or call the reducer if no other
//     // middleware is set!

//     next(action);
// };

// we can  parametrize our middleware like this:

const logger = param => store => next => action => {
    console.log('logging', param);
    next(action);
} 

export default logger;
