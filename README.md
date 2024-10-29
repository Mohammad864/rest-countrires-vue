# Rest Countries Vue

## Overview

**Rest Countries Vue** is a Vue.js application that provides information about countries, including their names, populations, regions, and more. The application utilizes the REST Countries API to fetch data and displays it in a user-friendly manner. Users can view detailed information about each country by clicking on it.

## Features

- See all countries from the API on the homepage.
- Search for a country using an input field.
- Filter countries by region.
- Click on a country to see more detailed information on a separate page (client-side routing).
- Clicking on border countries on the detail page should link the user to the detail of those countries.
- **Project Bonuses** (except SSR, all features have been implemented) :
  - Toggle the color scheme between light and dark mode without using any 3rd party libraries.
  - Searching using the keywords "Germany" or "Grmny" should also work.
  - Add sort functionality for both Population and Country Name.
  - Make all content server-side rendered and also have a fallback if the server-side render faces an error.
  - Ensure the ratio for the country flags is 4:3 or any other ratio you find suitable.
  - Add unit tests for components.
  - Store the filters in the URL query strings and sync it with the component filter object.
  - Add lazy loading for country images and list.

## Technologies Used

- **Vue.js**: JavaScript framework for building user interfaces.
- **Vue Router**: For handling routing in the application.
- **Vite**: A fast build tool and development server for modern web applications.
- **REST Countries API**: An API to retrieve data about countries.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/rest-countries-vue.git
   cd rest-countries-vue
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm run serve
   ```

4. Open your browser and go to `http://localhost:8080` (or the port specified) to view the application.

## Building for Production

To build the application for production, run:

```bash
npm run build
```

This will create a `dist` directory with the production-ready files.

## Deployment

### Deploying to Vercel

1. Ensure you have the [Vercel CLI](https://vercel.com/docs/cli) installed globally:

   ```bash
   npm install -g vercel
   ```

2. Run the following command to deploy:

   ```bash
   vercel --prod
   ```

3. Follow the prompts to complete the deployment.

4. After deployment, you will receive a URL where your application is live.

### Vercel Configuration

Ensure you have a `vercel.json` file in the root directory with the following content:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

## Usage

- Navigate to the homepage to view a list of countries.
- Search for a specific country using the search bar.
- Filter countries by region.
- Click on any country to view detailed information about it.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to create a pull request or open an issue.

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Vue.js](https://vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Vite](https://vitejs.dev/)
- [REST Countries API](https://restcountries.com/)
