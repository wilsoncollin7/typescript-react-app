import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
// utils 
import { client } from './graphql/apollo-client/apollo-client';
// components
import Header from './components/header/header';
import Home from './pages/home/home';


const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Switch>
          <Route path="/"><Home /></Route>
        </Switch>
      </Router>
    </ApolloProvider>
  )
};

export default App;
