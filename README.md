# Movie-Explorer

This is a React and NodeJs based movie application that allows users to browse trending movies, search for movies by title or genre, and view detailed information about each movie.

# Technologies Used

- **React**: For building the user interface and managing component state.	
- **React Router**: For handling routing between different pages.
- **CSS**: For styling the components.
- **Fetch API**: For making API calls to the Node.js backend to retrieve movie data.
- **Node.js**: For the backend server to handle API requests.
- **Express**: For building the API endpoints in the Node.js backend.
- **TMDB API**: For accessing movie data.
- **Thunder Client**: For testing API endpoints during development.
- **VPN**: For bypassing ISP restrictions on TMDB API access.

# Development Process

## Backend Development

1. **Setup TMDB API**:

- Configured The Movie Database (TMDB) API to access movie data.
- Encountered issues with ISP blocking TMDB API, so used a VPN for testing.

2. **Setup Node.js Application**:

- Initialized a Node.js project and installed necessary dependencies.
- Used Express.js to build the server and set up routing.

3. **Routing**:

- Defined routes to handle API requests for fetching trending movies, searching by title, and searching by genre.

4. **Controllers**:

- Created controllers to handle the logic for each route.
- Wrote API transaction calls within controllers to fetch data from the TMDB API.

5. **Middleware**:

- Added built-in middleware `express.json()` for parsing JSON bodies.
- Added `cors()` middleware to enable Cross-Origin Resource Sharing.

6. **Testing API**:

- Tested the API endpoints using Thunder Client to ensure they returned the expected data.

## Frontend Development

1. **Setup Frontend**:

- Initialized a React project using `create-react-app`.
- Organized the project structure with components, pages, and styles.

2. **Components**:

- Developed reusable components such as:
  - `Header`:Contains navigation links, search bar, and logo.
  - `MovieCard`: Displays a movie's poster, title, and year.
  - `MovieList`: Renders a list of `MovieCard` components.
  - `GenreCard`: Represents a selectable genre for filtering movies.

3. **Pages**:

- Created main pages for the application:
  - `Home`: Fetches and displays trending movies.
  - `SearchResult`: Shows results based on search queries.
  - `ShowMoviePage`: Displays detailed information about a specific movie.

4. **Routing**:

- Used React Router to set up navigation between pages (`Home`, `SearchResult`, `ShowMoviePage`).

5. **Integrating Frontend and Backend**:

- Connected the React frontend with the Node.js backend API.
- Implemented API calls in React components to fetch movie data from the backend.
