import React from 'react';
import { gql, useQuery } from '@apollo/client';
import './App.css';

const GET_POKEMONS = gql`
  query GetPokemons($first: Int!) {
    pokemons(first: $first) {
      id
      number
      name
      image
      types
    }
  }
`;

const App = () => {
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: { first: 10 },  // Fetch first 10 Pokémon
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { pokemons } = data;

  return (
    <div className="app">
      <h1 className="title">Pokémon List</h1>
      <div className="pokemon-list">
        {pokemons.map((pokemon) => (
          <div key={pokemon.id} className="pokemon-card">
            <h2 className="pokemon-name">{pokemon.name}</h2>
            <img className="pokemon-image" src={pokemon.image} alt={pokemon.name} />
            <p className="pokemon-number">Number: {pokemon.number}</p>
            <p className="pokemon-types">Types: {pokemon.types.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
