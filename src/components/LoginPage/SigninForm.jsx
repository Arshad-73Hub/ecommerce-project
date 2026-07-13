import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router";
import "./SigninForm.css";
import "./Commoncss.css";

function SignIn({ setSignUp }) {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const emailId = useRef(null);
  const password = useRef(null);
  function LoginUser(e) {
    e.preventDefault();
    const userDetails = JSON.parse(localStorage.getItem("userDetails")) || 0;
    let contain = 0;
    if (userDetails.length > 0) {
      userDetails.forEach((user) => {
        if (
          user.email == emailId.current.value &&
          user.password == password.current.value
        ) {
          contain++;
        }
      });
      if (emailId.current.value == "" || password.current.value == "") {
        alert("Fill all fields");
      } else {
        if (contain != 0) {
          contain = 0;
          const loggedInUser = userDetails.find(
            (user) => user.email == emailId.current.value,
          );
          localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
          if (loggedInUser) navigate("/home");
        } else {
          alert("Invalid credentials");
          emailId.current.value = "";
          password.current.value = "";
        }
      }
    } else {
      alert("Please Signup first and login");
      emailId.current.value = "";
      password.current.value = "";
    }
  }
  function hideShowPassword() {
    setToggle(!toggle);
  }

  return (
    <>
      <div className="mainbodyforlogin">
        <div className="container">
          <form method="post">
            <h2>Login</h2>

            <div className="input-box">
              <label>Email</label>
              <input
                ref={emailId}
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="input-box">
              <label>Password</label>
              <input
                ref={password}
                type={toggle == false ? "password" : "text"}
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="remember">
              <div className="togglebutton" onClick={hideShowPassword}>
                {toggle == false ? "Show" : "Hide"}
              </div>
              <Link to="/forgot" className="forgotbuttontext">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              onClick={(e) => {
                LoginUser(e);
              }}
            >
              Login
            </button>

            <div className="bottom-text">
              Don't have an account?
              <Link
                onClick={() => {
                  setSignUp(true);
                }}
                to="/signup"
              >
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default SignIn;
