In React Router Dom v6, navigating with a relative path in a nested route can sometimes lead to unexpected behavior if the parent route's path is dynamic. For example, consider this scenario:

```jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users/:userId" element={<User />}>
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function User() {
  return (
    <div>
      <h1>User Page</h1>
      <Link to="profile">Go to Profile</Link>
    </div>
  );
}

function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
    </div>
  );
}
```

If the `userId` is dynamic, the `Link` to `profile` in the `User` component will resolve relative to `/users/:userId` resulting in a path like `/users/:userId/profile` instead of `/users/<userId>/profile`. This could lead to a 404 error if your backend doesn't account for this dynamic segment.