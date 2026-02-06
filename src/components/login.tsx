import RSVPForm from "./rsvp-form";
import Password from "./password";
import { useState } from "react";

export type User = {
  name: string;
  p: string;
  members: { fullName: string }[];
} | null;

export default function Login() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  return (
    <>
      {!isAuthenticated ? (
        <Password setIsAuthenticated={setIsAuthenticated} setUser={setUser} />
      ) : (
        <RSVPForm user={user} />
      )}
    </>
  );
}
