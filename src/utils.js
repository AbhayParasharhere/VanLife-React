import { redirect } from "./api";

export async function requireAuth(request) {
  const pathName = new URL(request.url).pathname;
  const isLoggedIn = localStorage.getItem("loggedIn");

  if (!isLoggedIn) {
    throw redirect(
      `/login?message=You must log in first.&redirectTo=${pathName}`
    );
  }
  return null;
}
