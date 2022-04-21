import React from 'react';

import "./App.css";

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { setContext } from "@apollo/client/link/context";
import Home from "./pages/Home";
import RuneFarm from "./pages/RuneFarm";
import BradMerch from "./pages/BradMerch";
import GavinMerch from "./pages/GavinMerch";
import JakeMerch from "./pages/JakeMerch";
import KyleMerch from "./pages/KyleMerch";
import PeterMerch from "./pages/PeterMerch";
import "bootstrap/dist/css/bootstrap.min.css";

//kyles container for login codegen


// import Navbar from "./components/Navbar";

const httpLink = createHttpLink({
  uri: "/graphql",
});
const authLink = setContext((_, { headers }) => {
  // auth token from local storage if exists
  const token = localStorage.getItem("id_token");
  //return headers to context so httplink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>

      <Router>
        <>
          <Routes>
            {/* home page */}
            <Route path="/" element={<Home />} />
            {/* rune farm */}
            <Route path="/runefarm" element={<RuneFarm />} />
            {/* merch pages */}
            <Route path="/bradmerch" element={<BradMerch />} />
            <Route path="/gavinmerch" element={<GavinMerch />} />
            <Route path="/jakemerch" element={<JakeMerch />} />
            <Route path="/kylemerch" element={<KyleMerch />} />
            <Route path="/petermerch" element={<PeterMerch />} />
            {/* need a 404 page */}
          </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
