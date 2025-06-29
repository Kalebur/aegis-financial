import "./LoginBar.css";

export const LoginBar = () => {
  return (
    <section className="right-sidebar">
      <form action="" className="login-form">
        <p className="widget-title">Log In</p>
        <label htmlFor="email">E-Mail</label>
        <input type="email" name="email" id="email" />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />

        <a href="/" className="btn-action">
          Log In
        </a>
        <a href="/">Forgot Password?</a>
        <a href="/">Create An Account</a>
      </form>
    </section>
  );
};
