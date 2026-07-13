import "./SignupForm.css";
import { Link } from "react-router";
import { useRef, useState } from "react";
import "./Commoncss.css";

function Signup({ setSignUp }) {
  const [userDetails, setUserDetails] = useState(() => {
    const storedUsers = localStorage.getItem("userDetails");
    return storedUsers ? JSON.parse(storedUsers) : [];
  });
  const emailId = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const passwordshowref = useRef(null);
  const accountshowref = useRef(null);

  function setUserDetailsInfo(event) {
    let temp = [];
    let contain = 0;
    event.preventDefault();
    if (
      emailId.current.value == "" ||
      password.current.value == "" ||
      confirmPassword.current.value === ""
    ) {
      alert("Please fill all fields");
    } else {
      if (
        emailId.current.value.endsWith("@gmail.com") &&
        emailId.current.value.length >= 13 &&
        password.current.value.length > 5
      ) {
        userDetails.forEach((user) => {
          if (user.email === emailId.current.value) {
            contain++;
          }
        });
        if (contain == 0) {
          if (password.current.value === confirmPassword.current.value) {
            const obj = {
              email: emailId.current.value,
              password: password.current.value,
            };
            temp = [...userDetails, obj];
            setUserDetails(temp);
            localStorage.setItem("userDetails", JSON.stringify(temp));
            accountshowref.current.style.display = "block";
            emailId.current.value = "";
            password.current.value = "";
            confirmPassword.current.value = "";
            setTimeout(() => {
              accountshowref.current.style.display = "none";
            }, 3000);
          } else {
            passwordshowref.current.style.display = "block";
            setTimeout(() => {
              passwordshowref.current.style.display = "none";
            }, 3000);
          }
        } else {
          alert(
            "The user with this email already exist , Login using this email",
          );
          contain = 0;
          emailId.current.value = "";
          password.current.value = "";
          confirmPassword.current.value = "";
        }
      } else {
        alert(
          "Enter proper email Id and password must be greater than 5 digits",
        );
        emailId.current.value = "";
        password.current.value = "";
        confirmPassword.current.value = "";
      }
    }
  }

  return (
    <div className="mainbodyforlogin">
      <div className="signup-container">
        <div className="signup-box">
          <h2>Create Account</h2>
          <p className="subtitle">Create your account to get started</p>

          <form>
            <div className="input-group">
              <label>Email</label>
              <input
                ref={emailId}
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                ref={password}
                type="password"
                placeholder="Create password"
                required
              />
            </div>

            <div className="input-group">
              <label>Confirm Password</label>
              <input
                ref={confirmPassword}
                type="password"
                placeholder="Confirm password"
                required
              />
            </div>

            <span ref={passwordshowref} className="passwordshowingdiv">
              Password and Confirm Password should be same.
            </span>
            <span ref={accountshowref} className="accountshowingdiv">
              Account Created
            </span>

            <button
              type="submit"
              className="signup-btn"
              onClick={(event) => {
                setUserDetailsInfo(event);
              }}
            >
              Create Account
            </button>
          </form>

          <p className="signin-link">
            Already have an account?{" "}
            <Link
              onClick={() => {
                setSignUp(false);
              }}
              to="/"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
