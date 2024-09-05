# work flow

# 1. Create an ApolloClient instance and wrap your app with ApolloProvider to provide the client to your React components.
# 1.1 initialize the Apollo Client with the GraphQL endpoint https://graphql-pokemon2.vercel.app and set up an in-memory cache.

# 2. Create the main component where you'll fetch and display Pokémon data.

# 3. define a GraphQL query GET_POKEMON to fetch Pokémon data by name. The useQuery hook is used to execute the query, passing the variable name: 'Pikachu'.

# 3.1 If the data is successfully fetched, we display the Pokémon's name, image, number, and types. Loading and error states are handled appropriately.


# Pokémon List App
![image](https://github.com/user-attachments/assets/87569bfc-87ec-4aa0-9fd0-97108f7989d9)


This is a simple React application that fetches and displays a list of Pokémon using the GraphQL API. The application is built using React and Apollo Client to interact with a GraphQL endpoint.

## Features

- Fetches a list of Pokémon from a GraphQL API.
- Displays Pokémon name, number, image, and types.
- Styled with CSS for a clean and responsive interface.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Apollo Client**: A comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL.
- **GraphQL**: A query language for your API, used to interact with the Pokémon API.
- **CSS**: Basic styles for layout and presentation.

## Usage

When you open the app, the list of Pokémon will load automatically. The app fetches the first 10 Pokémon from the GraphQL API and displays their details, including their name, number, image, and types.
