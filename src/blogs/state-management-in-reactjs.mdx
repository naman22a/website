---
title: State Management in React JS ?
tags:
    - react
    - javascript
date: 03-06-2023
excerpt: In this blog I will show you how to efficiently manage state in react
---

## There are two types of state in a React App

-   **Client side state**: the state is only limited to client side such as a global menu which is open or closed.

-   **Server side state**: this state is both on client and server side such as user's posts, currently logged in user
    etc.

### Client Side State Management

I like to use library <a href="https://zustand-demo.pmnd.rs" target="_blank">zustand</a> for state management on client
side.

Firstly install zustand

```shell
npm install zustand
```

or if you are using yarn

```shell
yarn add zustand
```

Now in src/store/index.ts

```typescript
import { create } from 'zustand';

interface GlobalState {
    count: number;
    increment: () => void;
}

const useStore = create<GlobalState>((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 }))
}));
```

**Note: zustand also supports async functions for api requests**

Now we can access these state and functions in our react app.

```tsx
const Header: React.FC = () => {
    const count = useStore((state) => state.count);
    const increment = useStore((state) => state.increment);

    // or

    const { count, increment } = useState();
    // this will result in more rerenders so avoid this

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => increment()}>Increment</button>
        </div>
    );
};
```

To know more about zustand check out <a href="https://github.com/pmndrs/zustand" target="_blank">
zustand's github page </a>

### Server Side State Management

I like to use <a href="https://tanstack.com/query/latest">tanstack react query</a> for server side state management when using rest apis.

**Note: tanstack react query can also be used with GraphQL APIs.**

Install tanstack react query

```shell
npm i @tanstack/react-query @tanstack/react-query-devtools
```

or if you are using yarn

```shell
yarn add @tanstack/react-query @tanstack/react-query-devtools
```

set up Query Client Provider in index.tsx

```tsx
import React from 'react';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// Create a client
const queryClient = new QueryClient();

const Root: React.FC = () => {
    return (
        // Provide the client to your App
        <QueryClientProvider client={queryClient}>
            <App />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};

render(<Root />, document.getElementById('root'));
```

Now we can make queries and mutations in App.tsx

```tsx
import React from 'react';
import { getTodos, postTodo } from './api';

const App: React.FC = () => {
    // Access the client
    const queryClient = useQueryClient();

    // Queries
    const { data: todos, isLoading, isError } = useQuery(['todos'], getTodos);

    // Mutations
    const { mutate: addTodo } = useMutation(['addTodo'], postTodo, {
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ['todos'] });
        }
    });

    if (isLoading || isError || !todos) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>

            <button
                onClick={() => {
                    addTodo({
                        id: Date.now(),
                        title: 'New Todo'
                    });
                }}
            >
                Add Todo
            </button>
        </div>
    );
};
```

You should strongly type your getTodos, postTodo from api folder to get better typescript intellisense.

To know more about React Query check out <a href="https://github.com/tanstack/query" target="_blank">
React Query's github page </a>
