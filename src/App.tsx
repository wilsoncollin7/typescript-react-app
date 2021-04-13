import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// components
import Header from './components/header/header';
import TestBtn from './components/testBtn';
import Home from './pages/home/home';
import { client } from './utils/apollo-client';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <TestBtn />
        <Switch>
          <Route path="/"><Home /></Route>
        </Switch>
      </Router>
    </ApolloProvider>
  )
};

export default App;
