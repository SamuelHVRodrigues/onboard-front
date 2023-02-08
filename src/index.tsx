import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({ uri: 'https://template-onboarding-node-sjz6wnaoia-uc.a.run.app/graphql' });

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');

  return { headers: { ...headers, authorization: token ? token.split(' ')[1].slice(0, -1) : '' } };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
);
