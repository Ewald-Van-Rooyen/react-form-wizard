import { useFormWizard } from "./hooks/useFormWizard";

import "./form.css";
import { UserForm } from "./components/forms/UserForm";
import { AddressForm } from "./components/forms/AddressForm";
import { AccountForm } from "./components/forms/AccountForm";
import { FormEvent, useState } from "react";

type FormData = {
  firstName: string,
  lastName: string,
  age: number,
  street: string,
  city: string,
  state: string,
  zip: string,
  email: string,
  password: string
}

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: 1,
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: ""
}

function App() {
  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields: Partial<FormData>) {
    setData(previous => {
      return { ...previous, ...fields };
    })
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, navigateToPreviousStep, navigateToNextStep } = useFormWizard(
    [<UserForm {...data} updateFields={updateFields} />,
    <AddressForm {...data} updateFields={updateFields} />,
    <AccountForm {...data} updateFields={updateFields} />]);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if(!isLastStep) navigateToNextStep();
    // POST data 
  }

  return (
    <div className="App">
      <div className="card-container">
        <form onSubmit={onSubmit}>
          <div className="page-number-container">
            {currentStepIndex + 1}/{steps.length}
          </div>
          {step}
          <div className="buttons-container">
            {!isFirstStep && <button type="button" onClick={navigateToPreviousStep}>Previous</button>}
            <button type="submit">
              {isLastStep ? "Finish" : "Next"}</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
