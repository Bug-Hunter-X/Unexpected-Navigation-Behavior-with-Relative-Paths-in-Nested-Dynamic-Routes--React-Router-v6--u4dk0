# Unexpected Navigation Behavior with Relative Paths in Nested Dynamic Routes (React Router v6)

This repository demonstrates a common issue with relative path navigation in nested dynamic routes when using React Router v6.  When navigating within nested routes that have a dynamic parent segment, relative links may not behave as expected.

## Problem

Relative paths in nested routes with dynamic parent paths do not resolve to the correct absolute path leading to unexpected behavior or 404 errors. 

## Solution

To fix this, always use absolute paths for navigation to ensure consistent and predictable routing behavior.

This can be achieved by using the `useNavigate` hook and constructing the full path manually.  Or with `Link` and the absolute path of the target. 