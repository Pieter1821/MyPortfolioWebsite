import { Link } from 'react-router-dom';

const Error = () => (
  <div className="error-container">
    <main className="grid min-h-full place-items-center bg-lime-200 px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-red-600">404</h2> 
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page Not Found</h1>
        <p className="mt-4 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for. Try searching for something else or go back to the homepage.</p>
        <div className="mt-8 flex items-center justify-center gap-x-6">
          <Link to="/" className="btn-primary">
            Go Back Home
          </Link>
          {/* TODO adding a search bar or other navigation aids here */}
        </div>
      </div>
    </main>
  </div>
);

export default Error;
