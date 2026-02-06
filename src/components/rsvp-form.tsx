import { useState } from "react";
import { useForm } from "react-hook-form";
import type { User } from "./login";

export default function RSVPForm({ user }: { user: User }) {
  const [successfulSubmission, setSuccessfulSubmission] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: any) => {
    const res = await fetch("https://formspree.io/f/mzdapyqg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setSuccessfulSubmission(true);
      localStorage.setItem("rsvpSubmitted", "true");
    }
  };

  return (
    <>
      {successfulSubmission ? (
        <div className='thank-you-container'>
          <div className='success-wrapper'>
            <svg className='checkmark' viewBox='0 0 52 52' aria-hidden='true'>
              <circle
                className='checkmark-circle'
                cx='26'
                cy='26'
                r='25'
                fill='none'
              />
              <path
                className='checkmark-check'
                fill='none'
                d='M14 27l7 7 16-16'
              />
            </svg>
          </div>
          <p>
            Thank you for your RSVP! <br />
            We look forward to celebrating with you.
          </p>
        </div>
      ) : (
        <form className='rsvp-form' onSubmit={handleSubmit(onSubmit)}>
          <fieldset className='members'>
            <legend>Select attending family members</legend>

            {user &&
              user.members.map((member) => (
                <label key={member.fullName}>
                  <input
                    type='checkbox'
                    value={member.fullName}
                    {...register("peopleAttending", {})}
                  />
                  {member.fullName}
                </label>
              ))}
          </fieldset>
          <label className='form-field textarea-field'>
            <span>Please list full name(s)</span>
            <textarea {...register("fullNames")} />
          </label>

          <label className='form-field textarea-field'>
            <span>Dietary restrictions (if any)</span>
            <textarea {...register("dietaryRestrictions")} />
          </label>
          <label className='form-field'>
            <span>
              Please confirm the total number of guests attending (including
              yourself)
            </span>
            <input
              type='number'
              min={0}
              {...register("totalGuests", {
                required: "Please confirm the total number of guests",
                valueAsNumber: true,
              })}
            />
          </label>

          <input type='submit' />
        </form>
      )}
    </>
  );
}
