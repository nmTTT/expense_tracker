import React from "react";

const Login = ({ hidden, handleChange, handleLogin, form }) => {
  console.log("form", form);
  return (
    <div
      className=" 
    flex justify-center items-center  gap-4 flex-col my-10"
    >
      <label
        className={` ${hidden} input input-bordered flex items-center gap-2`}
      >
        <input
          type="text"
          className="grow"
          placeholder="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          className="grow"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="password"
          className="grow"
          placeholder="Password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
      </label>
      <label>
        <input
          type="password"
          className="grow"
          placeholder="Re-password"
          name="re_password"
          value={form.re_password}
          onChange={handleChange}
        />
      </label>
      <button className="btn btn-primary btn-wide" onClick={handleLogin}>
        Log in
      </button>
    </div>
  );
};

export default Login;
