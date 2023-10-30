import React from "react";
import "./styles.modules.css";
import { useActionData, useLoaderData, useNavigation } from "react-router";
import { Form } from "react-router-dom";
import { loginUser } from "/src/api";
import { redirect } from "../../api";

export const loader = ({ request }) => {
  return new URL(request.url).searchParams.get("message");
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const pathName =
    new URL(request.url).searchParams.get("redirectTo") || "/host";
  try {
    const data = await loginUser({ email, password });
    console.log(data, pathName);
    localStorage.setItem("loggedIn", true);
    return redirect(pathName);
  } catch (err) {
    return err;
  }
};

export default function Login() {
  const message = useLoaderData();
  const error = useActionData();
  const status = useNavigation().state;

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {message && <h3 className="red">{message}</h3>}
      {error && <h3 className="red">{error.message}</h3>}
      <Form method="post" replace className="login-form">
        <input name="email" type="email" placeholder="Email address" />
        <input name="password" type="password" placeholder="Password" />
        <button disabled={status === "submitting"}>
          {status === "submitting" ? "Logging in..." : "Log in"}
        </button>
      </Form>
    </div>
  );
}
