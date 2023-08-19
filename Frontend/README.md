# work-manager project using NextJs

prerquisite for Next JS
1. Basics of React
2. Basics of Web Development
3. Basics of Http Requests.


**Server Side Components and Client Side Components**
Instead of rendering whole application on client side, React now gives you flexibility to where to
render your components based on their purpose.

**What are Server Side Components?**
If we split the page into smaller components we will find that most of the components are not interactive and can be rendered on the server as server components.
The components which are rendered on server side are known as server side components.

**Why use Server Side Components**
Server Side components allow developers to better leverage server infrastructure.
For eg. We can move data fetching to server side, closer to database, and keep large dependencies
that previously would impact the client javascript bundle size on server, leading to improved performance.
Advantages:
1. Initial page loads faster and client side javascript bundle size is reduced.
2. The base client-side runtime is cacheable and predictable in size, and does not increase as your application grows.

**What are Client Side Components?**
Client components enable you to add client-side interactivity to your application.
For eg. If in a component we want to perform some client side events like button click,onChange(), then we should use client side components.

**When to use Server Side Components and Client Side Components**
Next js recommends using server side components until we have specific use case for client components.

What do you need to do?	Server Component	Client Component

1. Fetch data.		Server Component
2. Access backend resources (directly)		Server Component
3. Keep sensitive information on the server (access tokens, API keys, etc)		Server Component
4. Keep large dependencies on the server / Reduce client-side JavaScript		Server Component
5. Add interactivity and event listeners (onClick(), onChange(), etc)		Client Component
6. Use State and Lifecycle Effects (useState(), useReducer(), useEffect(), etc)		Client Component
7. Use browser-only APIs		Client Component
8. Use custom hooks that depend on state, effects, or browser-only APIs		Client Component
9. Use React Class components		Client Component
