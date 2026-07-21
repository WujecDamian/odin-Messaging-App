import { useState } from "react";
import { useCookies } from "react-cookie";

const Login = () => {
  const [cookies, setCookie] = useCookies(["user", "token"]);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const formData = new FormData(form);
    const username = formData.get("username");
    const password = formData.get("password");
    const bodyData = {
      username,
      password,
    };

    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bodyData }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      //store user and token
      setCookie("token", JSON.stringify(data.token), { path: "/" });
      setCookie("user", JSON.stringify(data.user));
    } catch (error) {
      setError(error.message || error);
    } finally {
      setLoading(false);
      window.location.href = "/";
    }
  };
  if (loading) {
    return <span>Loading...</span>;
  }
  if (error) {
    return <span>{error?.message ? error.message : String(error)}</span>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        id="username"
        autoComplete="username"
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        autoComplete="password"
      />
      <input type="submit" value="Login" />
    </form>
  );
};

export default Login;
