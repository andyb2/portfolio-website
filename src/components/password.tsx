import type { SetStateAction, Dispatch } from "react";
import { useForm } from "react-hook-form";
import { l } from "../data/project-zomboid";
import type { User } from "./login";

export default function Password({
  setIsAuthenticated,
  setUser,
}: {
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  setUser: Dispatch<SetStateAction<User>>;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onSubmit = (data: any) => {
    const passwordInput = data["password"] as string;
    const isValid = l.find((user) => user.p === passwordInput);

    if (isValid) {
      setIsAuthenticated(true);
      setUser(isValid);
      return;
    }

    setError("password", {
      type: "manual",
      message: "Incorrect password. Please try again.",
    });
  };

  return (
    <div className='password-container' data-anchor-location='rsvp'>
      <form onSubmit={handleSubmit(onSubmit)}>
        {errors.password && (
          <p className='error-message'>{String(errors.password.message)}</p>
        )}
        <div className='input-wrapper'>
          <input
            type='password'
            placeholder='Please enter your password'
            {...register("password", {
              min: 0,
            })}
          />
          <input type='submit' />
        </div>
      </form>
    </div>
  );
}
