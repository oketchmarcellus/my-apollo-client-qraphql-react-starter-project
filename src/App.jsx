import { useState } from 'react'
import { useQuery, gql } from '@apollo/client';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import apolloClientLogo from './assets/apollo-client.svg'
import graphqlLogo from './assets/graphql.svg'
import './App.css'

const GET_DATA = gql`
  query GetLocations {
      country(code: "KE") {
        name
        native
        capital
        emoji
        currency
        languages {
          code
          name
        }
      }
    }
`;

function App() {
  const { loading, error, data } = useQuery(GET_DATA);
  const {name, currency, capital, native, emoji, languages} = data?.country || {};

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://www.apollographql.com/" target="_blank">
          <img src={apolloClientLogo} className="logo apollo-client" alt="Apollo Client logo" />
        </a>
        <a href="https://graphql.org/" target="_blank">
          <img src={graphqlLogo} className="logo graphql" alt="GraphQL logo" />
        </a>
      </div>
      <h1>Vite + React + Apollo Client + GraphQL</h1>
      <div className="card">
        <div key={name}>
          <h2>Let's Know Our Countries 🌐🇰🇪</h2>
          <h2>Country: {name}</h2>
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <tbody>
              <tr>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>About this location:</th>
                <td style={{ border: '1px solid #ddd', padding: '8px' }} colSpan="2">
                  <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li><strong>Capital:</strong> {capital}</li>
                    <li><strong>Symbol:</strong> {emoji}</li>
                    <li><strong>Native:</strong> {native}</li>
                    <li><strong>Currency:</strong> {currency}</li>
                    {languages?.map((lang) => (
                      <li key={lang.code}>
                        <strong>Language:</strong> {lang.name} <br />
                        <strong>Code:</strong> {lang.code}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p>You can fork this project from <a href="https://github.com/oketchmarcellus/my-apollo-client-qraphql-react-starter-project">here</a></p>
      <p className="read-the-docs">
        Click on the Vite, React , Apollo Client and QraphQL logos to learn more
      </p>
    </>
  )
}

export default App
