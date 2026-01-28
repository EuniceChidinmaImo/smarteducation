import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-purple-600 mb-6">
        The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
      >
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
