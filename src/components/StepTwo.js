import React from "react";
import { useForm } from "react-hook-form";

const StepTwo = ({ onBack, onNext, formData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    onNext({ ...formData, ...data }); // Combine name and email data
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email:</label>
          <input {...register("email", { required: true })} />
          {errors.email && <span>This field is required</span>}
        </div>
        <div className="button-container">
          <button className="back" type="button" onClick={onBack}>
            Back
          </button>
          <button className="submit" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default StepTwo;
