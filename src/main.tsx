import { createRoot } from 'react-dom/client'
import { ApolloProvider } from '@apollo/client';
import client from './ApolloClient.ts';
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client} >
    <App />
  </ApolloProvider>,
)
