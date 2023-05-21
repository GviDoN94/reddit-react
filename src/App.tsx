import React from "react";
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout/Layout";
import './main.global.css'

function AppComponent() {
  return (
    <Layout>
      content
    </Layout>
  );
}

export const App = hot(AppComponent);
