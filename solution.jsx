To avoid this issue, always use absolute paths when navigating within nested routes.  Here's how you can modify the code using the `useNavigate` hook:

```jsx
import { BrowserRouter, Routes, Route, useNavigate, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users/:userId" element={<User />} >
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function User() {
  let { userId } = useParams();
  let navigate = useNavigate();
  return (
    <div>
      <h1>User Page</h1>
      <button onClick={() => navigate(`/users/${userId}/profile`)}>Go to Profile</button>
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

Alternatively, you can use the `Link` component with an absolute path:

```jsx
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

function User() {
  let { userId } = useParams();
  return (
    <div>
      <h1>User Page</h1>
      <Link to={`/users/${userId}/profile`}>Go to Profile</Link>
    </div>
  );
}
```
By explicitly constructing the full path, you ensure that the navigation works correctly regardless of the dynamic parent route.