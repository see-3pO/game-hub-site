4th June 2024
### ColorModeScript
The `ColorModeScript` component in Chakra UI is a utility that ensures the initial color mode (light or dark) is correctly set when your application first loads. It helps to avoid a flash of incorrect color mode by synchronizing the color mode between the server-side rendering (SSR) and the client-side. 

Usage:
```tsx
// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import App from './App';
import theme from './theme'; // If you have a custom theme

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
```

5th June 2024
The design smell concept in parent_platforms

A code design smell is a tangible and observable violations of code design/ development fundamentals that can lead to poor quality code and technical debt.
- **Technical debt:** Debt that accrues when you intentionally or unintentionally make non-optimal technical solutions.

Common code smells include:
* Duplicate code
Duplications can include copy-paste code, repetitive code structures.
* Improper names

* Dead code
A dead code is a section of code in the source code of a program that is of no use and is never reached or called. This is due to changes in requirements or corrections, making some parts of code obsolete.
* Middle man
Middle man refers to the class that delegates work to another class and doesn't have any independent functionality. For instance, most of the methods of this class just call the methods of other classes.
* Long parameter list
This hinders code readability and reusability and makes it prone to bugs and errors. In general, it is best to limit the number of parameters in a method to three or four. 
* Data Clumps
Data clumps occur when a set of data items always appear together in multiple places, as fields in multiple classes or as parameters in multiple functions. 
* Long Functions
When a function gets too long, it means that it is responsible for too many tasks. 
* Primitive obsession

* Feature Envy
* Comments
 Leaving the commented-out code in place is a code smell Because the commented-out code would be a complete mystery for other developers and they would have no idea about what conditions should bring it back into the program.

[Source]("https://www.opsera.io/blog/what-is-code-smell")


Possible correction


6th June 2024
## Using Tanstack Query(React Query)

From [Documentation]("https://tanstack.com/query/latest/docs/framework/react/overview")

TanStack Query (FKA React Query) is often described as the missing data-fetching library for web applications, but in more technical terms, it makes fetching, caching, synchronizing and updating server state in your web applications a breeze.

**Step-by-Step Guide to Using React Query**

1. Install React Query:
- This library provides hooks to fetch, cache, and synchronize server state in your React applications.
- First, you need to install React Query and its dependencies:

```bash
npm install @tanstack/react-query

```

2. Set Up the QueryClient:
- You need to set up a QueryClient and wrap your application with the QueryClientProvider.
- `QueryClient` instance is a central place where all queries are stored.

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
  document.getElementById('root')
);

```
3. Create a Query to Fetch Data:
Use the useQuery hook from React Query to fetch and cache data. Update your component to use useQuery.

```tsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { apiClient } from './api'; // Ensure this is correctly imported

const fetchGames = async () => {
  const response = await apiClient.get("/games");
  return response.data.results;
};

const GamesComponent = () => {
  const { data, error, isLoading } = useQuery(['games'], fetchGames);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <ul>
        {data.map(game => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GamesComponent;

```



UseGames V1

```tsx
// custom hook for fetching the games

import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform} []
}

// response object interface
interface GamesResponse {
  count: number;
  results: Game[];
}

const UseGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  const controller = new AbortController();
  console.log("Fetching games data...");

  const startTime = performance.now();

  useEffect(() => {
    apiClient
      .get<GamesResponse>("/games", { signal: controller.signal })
      .then((response) => {
        const endTime = performance.now();
        console.log("Games data fetched successfully");
        console.log(`Fetch duration: ${(endTime - startTime).toFixed(2)} ms`);
        setGames(response.data.results);
      })
      .catch((err) => {
        const endTime = performance.now();
        if (err instanceof CanceledError) {
          console.log("Request canceled:", err.message);
          return;
        }
        console.log(`Error duration: ${(endTime - startTime).toFixed(2)} ms`);
        setError(err.message);
      });

    // clean up function
    return () => {
      console.log("Aborting fetch request...");
      controller.abort();
    };
  }, []);

  return { games, error };
};

export default UseGames;

```