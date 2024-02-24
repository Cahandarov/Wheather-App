Weather App Readme

This Weather App is a web application built with HTML, CSS, and JavaScript. It leverages the Axios library for making HTTP requests and fetching weather data from the WeatherAPI service. The app provides a visual representation of current weather conditions, a 3-day forecast, and hourly forecasts for the next four hours.

Getting Started
To run the Weather App, follow these steps:

Clone the repository:

bash
Copy code
git clone <repository-url>
Open the forecast.html file in a web browser.

bash
Copy code
cd path/to/cloned/repo
open forecast.html
The app will load with the weather information for Baku as default. You can use the search bar to look up weather data for different locations.

Dependencies
The app relies on the following dependencies:

Axios: Axios is used for making HTTP requests to the WeatherAPI to fetch weather data.
File Structure
forecast.html: The main HTML file that defines the structure of the web page.
forecast.css: The CSS file containing styles for the application.
forecast.js: The JavaScript file with all the logic for fetching and displaying weather data.
image: A directory containing images used in the application.
How to Use
The app loads with the weather information for Baku by default.
Use the search input to enter the name of a location you want to get weather information for.
The app will fetch and display the current weather, a 3-day forecast, and hourly forecasts for the next four hours for the specified location.
Hover over the search input to reveal a dropdown with recent searches.
Code Structure
Data Retrieval: The window load event triggers an initial API request using Axios to fetch weather data for Baku. The fetched data is then passed to various functions for rendering different parts of the UI.

Render Functions: There are several functions (getData_Part1, getData_Part2, getData_Part3, getData_Part4) responsible for rendering different sections of the UI with the fetched data.

Search Functionality: The search input has event listeners (mouseover, mouseout, change) that control the display of a dropdown (local) and trigger a new API request based on the user's input.

Recent Searches: The app keeps track of recent searches, displaying them in a dropdown when the user hovers over the search input.

Future Improvements
Add error handling for failed API requests.
Enhance the user interface for a better user experience.
Implement caching to improve performance and reduce redundant API calls.
Feel free to contribute to this project and make it even better!

Contact

If you have any questions, suggestions, or need support, you can contact me through the following:
cahandarov@gmail.com




## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-projectygujhkj
```
    