import React from "react";
import { App } from "./App";
import "./index.css";

export default {
  title: "App",
  component: App,
  argTypes: {
    isLokiTest: {
      options: [true, false],
      control: { type: "radio" },
    },
  },
};

export const Primary = () => <App isLokiTest={false} sleepMs={2000} />;
