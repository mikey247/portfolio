# Portfolio

This project is a personal portfolio web application built with React. It showcases projects, a short biography, and contact information.

## Project Purpose

The application serves as a place to highlight development work and provide visitors with ways to reach out. It is meant to be deployed as a static site that can be served by any standard web host.

## Setup Instructions

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm start
   ```

   The site will be available at `http://localhost:3000` and reload as you modify files.

3. Run the test suite:

   ```bash
   npm test -- --watchAll=false
   ```

4. Create a production build:

   ```bash
   npm run build
   ```

   The optimized build output will be in the `build` directory.

## Deployment

Any static hosting service can serve the contents of the `build` directory. After running `npm run build`, upload the files in `build/` to your hosting provider or configure your deployment pipeline to serve that directory.
