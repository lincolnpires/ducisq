import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import FetchData from './components/FetchData';
import Counter from './components/Counter';
import ProfilePage from './components/ProfilePage';
import './custom.css';

export default function App() {
  return (
    <Layout>
      <Route exact path="/" component={Home} />
      <Route path="/counter" component={Counter} />
      <Route path="/fetch-data" component={FetchData} />
      <Route path="/profile" component={ProfilePage} />
    </Layout>
  );
}
