import { useState } from "react";
import { useForm } from "react-hook-form";
import type { User } from "./login";
import HeartSVG from "./assets/heartSVG";

export default function RSVPForm({ user }: { user: User }) {
  const [successfulSubmission, setSuccessfulSubmission] = useState(false);

  const keyFromName = (name: string) =>
    name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^_+|_+$/g, "");

  const defaultPeopleAttending =
    user &&
    Object.fromEntries(
      user.members.map((m) => [keyFromName(m.fullName), false]),
    );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      peopleAttending: defaultPeopleAttending,
      fullNames: "",
      dietaryRestrictions: "",
      totalGuests: "",
    },
  });

  const onSubmit = async (data: any) => {
    const attendanceByName =
      user &&
      Object.fromEntries(
        user.members.map((m) => {
          const key = keyFromName(m.fullName);
          return [m.fullName, data.peopleAttending?.[key] ? "Yes" : "No"];
        }),
      );

    const normalized = {
      ...data,
      peopleAttending: attendanceByName,
      totalGuests:
        data.totalGuests === "0" || data.totalGuests === 0
          ? "None"
          : data.totalGuests,
    };

    const res = await fetch("https://formspree.io/f/mzdapyqg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(normalized),
    });

    if (res.ok) {
      console.log(true);
      setSuccessfulSubmission(true);
    }
  };

  return (
    <>
      {successfulSubmission ? (
        <div className='thank-you-container'>
          <div className='success-wrapper'>
            <div className='svg-container'>
              <svg
                className='checkmark'
                viewBox='-2 -2 56 56'
                aria-hidden='true'
              >
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
          </div>
          <p>
            Thank you for your RSVP! <br />
            We look forward to celebrating with you.
          </p>
        </div>
      ) : (
        <div className='form-container' data-anchor-location='rsvp'>
          <HeartSVG />
          <h2 className='form-title'>RSVP</h2>
          <p>Please let us know if you'll be joining us for our special day.</p>
          <form className='rsvp-form' onSubmit={handleSubmit(onSubmit)}>
            <fieldset className='members'>
              <legend>
                Select all attending (if no one is attending leave blank)
              </legend>
              {user &&
                user.members.map((member) => {
                  const key = keyFromName(member.fullName);
                  return (
                    <label key={key}>
                      <input
                        type='checkbox'
                        {...register(`peopleAttending.${key}`)}
                      />
                      {member.fullName}
                    </label>
                  );
                })}
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
                yourself). If NO ONE is attending, please enter "0" and submit
                the form.
              </span>
              <input
                type='text'
                {...register("totalGuests", {
                  required:
                    "Please enter the number of guests (0 if no one is attending)",
                })}
              />

              {errors.totalGuests && (
                <p className='error'>{String(errors.totalGuests.message)}</p>
              )}
            </label>
            <input type='submit' />
          </form>
        </div>
      )}
    </>
  );
}
