import { createClient } from "@/app/lib/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";

/**
 * A button that displays the user's email if they are logged in and a logout button.
 * If the user is not logged in, a login button is displayed.
 * @returns {JSX.Element} The rendered AuthButton component
 */
export default async function AuthButton() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  /** Signs the user out and redirects to the login page. */
  const signOut = async () => {
    "use server";

    const supabase = await createClient();
    await supabase.auth.signOut();
    return redirect("/login");
  };

  return user ? (
    <div className="flex items-center gap-4">
      Hey, {user.email}!
      <form action={signOut}>
        <button className="rounded-md bg-btn-background px-4 py-2 no-underline hover:bg-btn-background-hover">
          Logout
        </button>
      </form>
    </div>
  ) : (
    <Link
      href="/login"
      className="flex rounded-md bg-btn-background px-3 py-2 no-underline hover:bg-btn-background-hover"
    >
      Login
    </Link>
  );
}
