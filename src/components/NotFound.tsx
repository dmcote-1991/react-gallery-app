// Component to display a "Page Not Found" message for unmatched routes
const NotFound: React.FC = () => {
  return (
    <div className="not-found">
      {/* Heading for the 404 error message */}
      <h2>404 - Page Not Found</h2>
      
      {/* Informational message for users */}
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;