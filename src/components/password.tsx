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
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    const passwordInput = data["password"] as string;
    const isValid = l.find((user) => user.p === passwordInput);

    if (isValid) {
      setIsAuthenticated(true);
      setUser(isValid);
    } else {
      alert("Invalid password");
    }
  };

  return (
    <div className='password-container'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type='password'
          placeholder='Please enter your password provided via mail'
          {...register("password", {
            min: 0,
          })}
        />
        <input type='submit' />
      </form>
    </div>
  );
}
