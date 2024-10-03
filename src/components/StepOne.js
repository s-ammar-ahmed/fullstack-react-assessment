import React from "react";
import { useForm } from "react-hook-form";

const StepOne = ({ onNext }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    onNext(data); // Pass the name data to the parent component
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name:</label>
          <input {...register("name", { required: true })} />
          {errors.name && <span>This field is required</span>}
        </div>
        <div className="button-container">
          <button className="next" type="submit">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default StepOne;
