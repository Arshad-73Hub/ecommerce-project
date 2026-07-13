import { useRef } from "react";
import { Link } from "react-router";
import "./SignupForm.css";
import "./Commoncss.css";

function Forgot({ setSignUp }) {
  const emailId = useRef(null);
  const newPassword = useRef(null);
  const confirmNewPassword = useRef(null);
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));

  function ResetUserPassword(e) {
    let contain = 0;
    e.preventDefault();
    if (
      emailId.current.value == "" ||
      newPassword.current.value == "" ||
      confirmNewPassword == ""
    ) {
      alert("Fields cannot be empty");
    } else {
      if (userDetails.length == 0 || userDetails.length == "") {
        alert("First signup and then login");
      } else {
        userDetails.forEach((user) => {
          if (user.email === emailId.current.value) {
            contain++;
          }
        });
        if (contain != 0) {
          if (
            newPassword.current.value == confirmNewPassword.current.value &&
            newPassword.current.value.length > 5
          ) {
            const obj = {
              email: emailId.current.value,
              password: newPassword.current.value,
            };
            const updatedUser = userDetails.filter(
              (user) => user.email !== emailId.current.value,
            );
            const temp = [...updatedUser, obj];
            localStorage.clear();
            localStorage.setItem("userDetails", JSON.stringify(temp));
            alert("Password changed");
            contain = 0;
            emailId.current.value = "";
            newPassword.current.value = "";
            confirmNewPassword.current.value = "";
          } else {
            alert(
              "newPassword and confirmNewPassword should be same and password must be greater than 5 digits",
            );
          }
        } else {
          alert(
            "The user with this Email doesn't exist. Try entering correct email",
          );
          emailId.current.value = "";
          newPassword.current.value = "";
          confirmNewPassword.current.value = "";
        }
      }
    }
  }

  return (
    <>
      <div className="mainbodyforlogin">
        <div className="signup-container">
          <div className="signup-box">
            <h2>Reset Account Password</h2>
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
                <label>New Password</label>
                <input
                  ref={newPassword}
                  type="password"
                  placeholder="Create New Password"
                  required
                />
              </div>

              <div className="input-group">
                <label>Confirm New Password</label>
                <input
                  ref={confirmNewPassword}
                  type="password"
                  placeholder="Confirm New Password"
                  required
                />
              </div>

              <button
                type="submit"
                className="signup-btn"
                onClick={(e) => {
                  ResetUserPassword(e);
                }}
              >
                Reset Password
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
    </>
  );
}
export default Forgot;
