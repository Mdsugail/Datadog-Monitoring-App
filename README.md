# Note 
  I have attached the Datadog API key but its not working 
  You can use any other API Source to get the data
# Datadog Monitoring App

This is a React application that integrates with the Datadog API to display monitors and metrics, and allows users to create new monitors. It also includes a server component that listens for Datadog webhooks and updates the UI accordingly.

## Features

- Display a list of Datadog monitors
- Display a list of Datadog metrics
- Create new Datadog monitors
- Receive and handle Datadog webhooks

## Installation

1. Clone the repository:

git clone https://github.com/your-username/datadog-monitoring-app.git

2. Create a `.env` file in the root directory and add your Datadog API and application keys:

DATADOG_API_KEY=your_datadog_api_key
DATADOG_APP_KEY=your_datadog_app_key

3. Install dependencies:

npm install

4. Start the development server:

npm start

This will start the React development server and the Express server for handling webhooks.

5. Open your browser and navigate to `http://localhost:3000` to view the Datadog Monitoring App.

## Usage

To create a new monitor, click the "Create New Monitor" button and fill out the form.

To receive webhooks from Datadog, you'll need to configure a webhook in your Datadog account and point it to the appropriate URL (e.g., `http://your-server-url/webhook`).

## Project Structure

- `src/App.js`: The main React component that renders the application.
- `src/components/`: Contains reusable React components for displaying monitors, metrics, and the create monitor popup.
- `src/services/DatadogService.js`: Handles API calls to the Datadog API.
- `src/server.js`: An Express server that listens for Datadog webhooks and updates the UI accordingly.
- `src/App.css`: CSS styles for the application.

## Dependencies

- React
- Axios (for making API requests)
- Express (for the webhook server)

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.
