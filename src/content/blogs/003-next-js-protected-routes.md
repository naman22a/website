---
title: How to make a Protected Route in Next Js ?
tags:
    - next
    - react
    - javascript
date: 06-02-2023
excerpt: In this blog I will show you how to fix .gitignore file not working
---

## Create a Next js application

With npx

```shell
$ npx create-next-app myapp
```

With npx(Typescript)

```shell
$ npx create-next-app myapp --ts
```

**or**

With yarn

```shell
$ yarn create next-app myapp
```

With yarn(Typescript)

```shell
$ npx create-next-app myapp --ts
```

## Create an IsAuth component

in components src/components/isAuth.tsx

```tsx
import React from 'react';
import { useRouter } from 'next/router';

function IsAuth<T>(Component: React.ComponentType<T>) {
    return (props: T) => {
        // make a api call to check if user is authenticated
        const { data, loading, error } = useMeQuery();
        const router = useRouter();

        if (loading) {
            return <div>Loading...</div>;
        }

        if (error || !data) {
            router.push('/login');
        }

        return (
            <>
                <Component {...props!} />
            </>
        );
    };
}

export default IsAuth;
```

This is a **higher order component** (HOC) learn more about it from <a href="https://reactjs.org/docs/higher-order-components.html" target="_blank">react docs</a>.

## Using IsAuth on a Protected route

Now we can use this component in src/pages/index.tsx

```tsx
import { NextPage } from 'next';
import Head from 'next/head';
import IsAuth from '../components/IsAuth';

const Index: NextPage = () => {
    return (
        <div>
            <h1>My protected route</h1>
        </div>
    );
};

export default IsAuth(Index);
```

Now this page is protected route it will redirect the user to login page if the user is not authenticated.
