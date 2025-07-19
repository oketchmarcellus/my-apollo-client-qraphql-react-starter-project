import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './index.css';
import App from './App.jsx';

// Create Apollo client with Vite environment variable
const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHQL_ENDPOINT_URL, // Access the environment variable
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>,
);