import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <h1>An Error Occured </h1>
      <pre>
        {error.status || "Unknown"} - {error.statusText || error.message}
      </pre>
    </>
  );
};
export default ErrorPage;
