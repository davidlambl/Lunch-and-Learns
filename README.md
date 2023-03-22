# React-State-Management-Lunch-and-Learn
## Intro
https://frontendmastery.com/posts/the-new-wave-of-react-state-management/
https://dev.to/workshub/state-management-battle-in-react-2021-hooks-redux-and-recoil-2am0

- "The general advice is to only reach for global state management solutions when needed."
- Tradeoffs
- React itself does not provide strong guidelines for solving this for shared global application state. As such, the React ecosystem has collected numerous approaches and libraries to solve this problem over time.This can make it confusing when assessing which library or pattern to adopt.The common approach is to outsource this and use whatever is most popular. Which as we’ll see, was the case with the widespread adoption of Redux early on, with many applications not needing it.
- By the end, we should be more equipped to accurately assess libraries’ trade-offs when choosing one that makes sense for our application’s needs.

The problems global state management libraries need to solve:
1. Ability to read stored state from anywhere in the component tree. 

- avoid the issues prop drilling has at scale. Early on in the React ecosystem we often reached for Redux unnecessarily to solve this pain point.
- useState, useRef or useReducer combined with React context to propagate a shared value around. The main challenge here is optimizing re-renders correctly.
- It’s often easier to optimize re-renders through subscriptions that opt-in to re-rendering when the state changes. However, because it’s a single value in memory, you can’t have different states for different subtrees.

2. Ability to write to stored state.

- Often times clashes in mental models can cause friction in adoption or increase a learning curve. A common clashing of mental models in React is mutable versus immutable state.
- React’s model of UI as a function of state lends itself to concepts that rely on referential equality and immutable updates to detect when things change so it can re-render correctly. But Javascript is a mutable language.
- Redux follows this model and requires all state updates to be done in an immutable way. There are trade-offs with choices like this. In this case a common gripe is the amount of boilerplate you have to write to make updates for those used to mutable style updates.

3. Provide mechanisms to optimize rendering.

- With this model, a global state management library needs to both detect when to re-render when its state gets updated, and only re-render what is necessary.Optimizing this process is one of the biggest challenges a state management library needs to solve.
- With this model, a global state management library needs to both detect when to re-render when its state gets updated, and only re-render what is necessary.Optimizing this process is one of the biggest challenges a state management library needs to solve.
- An example of a manual optimization would be subscribing to a piece of stored state through a selector function. Components that read state through a selector will only re-render when that specific piece of state updates.The second is handling this automatically for consumers so they don’t have to think about manual optimizations.
- 
4. Provide mechanisms to optimize memory usage.

- For very large frontend applications, not managing memory properly can silently lead to issues at scale.
- Hooking into the React lifecycle to store state means it’s easier to take advantage of automatic garbage collection when the component unmounts.For libraries like Redux that promote the pattern of a single global store, you will need to manage this yourself.
## Local State Management
https://react.dev/learn/managing-state

- useState, useReducer

## Redux
https://redux.js.org/tutorials/essentials/part-1-overview-concepts#when-should-i-use-redux
https://goshacmd.com/redux-vs-mobx-vs-flux-etoomanychoices/
https://www.freecodecamp.org/news/how-to-use-flux-in-react-example/

- "By increasing the predictablity of your state, you decrease the amount of bugs in your application"
https://ui.dev/c/redux/what-is-the-redux-store

Restart an app whenever something is wrong

- Make state more predictable

- All of our state in one location
  - All state in "state tree", Benefits of State Tree
- Closer to goal because 
  shared cache, 
  predictable state changes, 
  improved developer tooling
  pure functions
  server rendering
  
![Screenshot 2023-03-20 at 11 20 31 PM](https://user-images.githubusercontent.com/989849/226510395-6b52e630-12dc-4038-8db6-a67be7d4e16e.png)

## MobX