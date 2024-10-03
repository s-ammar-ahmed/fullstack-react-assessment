import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = (data) => {
    const completeData = { ...formData, ...data };

    // Dispatch the full user data (name + email) after completing both steps
    const userId = Date.now(); // Unique ID for the user
    dispatch(addUser({ id: userId, ...completeData }));

    // Reset the form to the first step after submission
    setStep(1);
    setFormData({});
  };

  return (
    <div>
      {step === 1 && <StepOne onNext={handleNext} />}
      {step === 2 && (
        <StepTwo
          formData={formData}
          onNext={handleSubmit}
          onBack={handleBack}
        />
      )}
    </div>
  );
};

export default MultiStepForm;
