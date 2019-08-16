1. What problem does the context API help solve?

Prevents the need for prop drilling.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store is the gatekeeper, it ensures that no state data changes unless it passes through the store, this means state cannot be effected except by the one location.

Actions are instructions that a certion action should occur, they get passed to the reducer when they are dispatched by events.

Reducers take in the previous state and the action type and updates state determined by which action it recieved. 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other? 

Application state is global to all the components, while component state is only local to that component.  It's a good idea to use application state when you have lots of different actions in components that your state can be changed by. 


1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`

Redux-Thunk allows synchronous react to be used asynchronously.  This also means that we can make API calls from our action creators.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux, because it's fun.