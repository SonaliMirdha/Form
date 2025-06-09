import React from "react";
import { createRoot } from "react-dom/client";
import FormComponent from "./Components/FormComponent"; // Ensure file name matches exactly
import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<FormComponent />);



