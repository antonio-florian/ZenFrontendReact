function Register() {
  return (
    <section className="page register-page">
      <h2>Register</h2>
      <p>
        Create a Zen account to start publishing your stories, receive feedback, and connect with other amateur writers.
      </p>
      {/* registration form */}
      <form className="registration-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="btn">Register</button>
      </form>
    </section>
  );
}

export default Register;
