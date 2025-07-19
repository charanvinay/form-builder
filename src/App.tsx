import { useState } from "react";
import "./App.css";
import Builder from "./components/Builder";
import { basicForm } from "./schemas/basicForm";
import { nestedForm } from "./schemas/nestedForm";
import { IFormTypes } from "./utils/types";
import { advancedForm } from "./schemas/advanced";
const FORMTYPES: IFormTypes[] = [
  { value: "basic", label: "Basic" },
  { value: "nested", label: "Nested" },
  { value: "advanced", label: "Advanced" },
];
function App() {
  const [active, setActive] = useState<string>(FORMTYPES[0].value);
  const BASICFORM = basicForm();
  const NESTEDFORM = nestedForm();
  const ADVANCEDFORM = advancedForm();
  return (
    <div className="w-full p-4 sm:p-6">
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
      {active === "nested" && <Builder json={NESTEDFORM} />}
      {active === "advanced" && <Builder json={ADVANCEDFORM} />}
    </div>
  );
}

export default App;
