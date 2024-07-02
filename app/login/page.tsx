"use client";

import { Auth } from "@supabase/auth-ui-react";

import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClient } from "@/app/lib/supabase/client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

/**
 * Initialize the Supabase client
 */

const supabase = createClient();

/**
 * Login component that handles user authentication using Supabase.
 */
export default function Login() {
  const router = useRouter();
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN") {
        router.push("/dashboard"); // Redirect to dashboard
      }
    });

    /**
     * Check the user's preferred color scheme and set the theme accordingly
     */
    const isDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    setTheme(isDarkMode ? "dark" : "light");

    return () => {};
  }, []);
  return (
    <div className="mt-52 w-1/2 rounded-3xl border p-10 [box-shadow:0_0_100px_rgba(0,_0,_0,_0.3)] dark:[box-shadow:0_0_100px_rgba(255,_255,_255,_0.2)]">
      <Auth
        supabaseClient={supabase}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {},
            },
          },
        }}
        theme={theme}
        providers={[]}
      />
    </div>
  );
}
