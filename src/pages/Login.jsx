
// Login page component displays the login form for user authentication
function Login() {
  return (
    <section className="page login-page">
      <h2>Login</h2>
      <p>
        Log in to your Zen account to publish stories, give feedback, and join the community of amateur writers.
      </p>
      {/* login form */}
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="btn">Login</button>
      </form>
    </section>
  );
}

export default Login;
