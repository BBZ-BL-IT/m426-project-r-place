"use client";

import { Auth } from "@supabase/auth-ui-react";

import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClient } from "@/app/lib/supabase/client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const supabase = createClient();

export default function Login({}: {}) {
  const router = useRouter();
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_IN") {
          router.push("/dashboard"); // Redirect to dashboard
        }
      },
    );

    const isDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    setTheme(isDarkMode ? "dark" : "light");

    return () => {};
  }, []);
  return (
    <div className="w-full">
      <div className="auth-container w-1/3 mt-52 light-mode">
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

      <div className="auth-container w-1/3 mt-52 dark-mode">
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
    </div>
  );
}
