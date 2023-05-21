import React from "react";
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout/Layout";
import './main.global.css'
import { Header } from "./shared/Header/Header";
import { Content } from "./shared/Content/Content";

function AppComponent() {
  return (
    <Layout>
      <Header />
      <Content>
        content
      </Content>
    </Layout>
  );
}

export const App = hot(AppComponent);
