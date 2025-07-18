import React, { useState } from "react";
import "./App.css";
import Builder from "./components/Builder";
import { basicForm } from "./schemas/basicForm";
import { IFormTypes } from "./utils/types";
const FORMTYPES: IFormTypes[] = [
  { value: "basic", label: "Basic" },
  { value: "nested", label: "Nested" },
];
function App() {
  const [active, setActive] = useState<string>(FORMTYPES[0].value);
  const BASICFORM = basicForm();
  return (
    <div className="w-full p-6">
      {FORMTYPES.map((type) => {
        return (
          <button
            className={`btn-form-type ${type.value === active ? "active" : ""}`}
            key={type.value}
            onClick={() => setActive(type.value)}
          >
            {type.label}
          </button>
        );
      })}
      {active === "basic" && <Builder json={BASICFORM} />}
      {active === "nested" && <Builder json={BASICFORM} />}
    </div>
  );
}

export default App;
