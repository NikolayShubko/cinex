import { useRouteError, isRouteErrorResponse } from "react-router";

export const MovieErrorBoundary = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404 || error.status === 500) {
      return <div>Movie not found!</div>;
    }
  }

  return <div>Something went wrong</div>;
};
