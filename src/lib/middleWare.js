import Cors from "cors";

// Initializing the cors middleware
export const initMiddleware = (middleware) => {
  return (req, res) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
};

// You can also directly use 'cors' instead of 'initMiddleware' in your API route.
export default Cors();
// Update your client-side code:
// Make sure your client-side code (the part that calls the uploadFile function) is configured to make a POST request to the new API route you created (/api/upload). Ensure that it sends the type parameter in the request body.

// With these steps, you should have CORS support added to your Next.js API route for file uploads. Make sure to adjust the CORS options to match your specific requirements.





