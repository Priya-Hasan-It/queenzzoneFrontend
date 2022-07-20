import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
import eShopLogo from "../../asset/logo/eShopLogo4.png";
import globeVar from "../../GlobalVar";

export default function Login() {
  // let history = useHistory();

  // default email and password
  const [defoldEmailAndPassword, setDefoldEmailAndPassword] = useState({
    email: "rony13647@gmail.com",
    pass: "roni1122",
  });

  // is error show
  const [isError, setIsError] = useState(false);

  // is rember click
  const [isrember, setIsrember] = useState(true);

  // get email
  const [getEmail, setGetEmail] = useState();

  // get Password
  const [getPass, setGetPass] = useState();

  // btn for get email and pasword
  const GetEmailAndPass = () => {
    // condition for email and password
    if (
      getEmail !== defoldEmailAndPassword.email ||
      getPass !== defoldEmailAndPassword.pass
    ) {
      setIsError(true);
    } else {
      console.log("Successfull");
      if (isrember === true) {
        localStorage.setItem("email", globeVar.Gmail);
        localStorage.setItem("password", globeVar.Pass);
      }
      //  history.push("/dashboard");
    }
  };

  // useEffect for Local storage
  useEffect(() => {
    if (localStorage.length) {
      if (
        localStorage.getItem("email") === globeVar.Gmail ||
        localStorage.getItem("password") === globeVar.Pass
      ) {
        //   history.push("/dashboard");
      }
    }
  }, []);

  return (
    <div>
      <div
        className="pt-5"
        style={{
          backgroundColor: "#03045E",
          textAlign: "center",
          height: "100vh",
        }}
      >
        <div className="" style={{ margin: "0px", paddingTop: "215px" }}>
          <div>
            <img
              style={{ width: "130px" }}
              src={eShopLogo}
              className="img-fluid"
              alt="eShop Logo"
            />
          </div>
          <div>
            <div className="" style={{ width: "300px", margin: "auto" }}>
              <div className="mb-3" style={{ textAlign: "left" }}>
                <label
                  for="exampleInputEmail1"
                  className="form-label"
                  style={{ color: "#90E0EF", fontSize: "15px" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => setGetEmail(e.target.value)}
                  style={{
                    backgroundColor: "#CAF0F8",
                    border: "1px solid #48CAE4",
                  }}
                />
              </div>
              <div className="mb-3" style={{ textAlign: "left" }}>
                <label
                  for="exampleInputPassword1"
                  className="form-label"
                  style={{ color: "#90E0EF", fontSize: "15px" }}
                >
                  Password
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="form-control"
                  onChange={(e) => setGetPass(e.target.value)}
                  id="exampleInputPassword1"
                  style={{
                    backgroundColor: "#CAF0F8",
                    border: "1px solid #48CAE4",
                  }}
                />
              </div>
              <div
                className="mb-3 form-check"
                style={{ textAlign: "left", display: "none" }}
              >
                <input
                  onClick={() => {
                    setIsrember(!isrember);
                  }}
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  style={{ cursor: "pointer" }}
                />
                <label
                  className="form-check-label"
                  for="exampleCheck1"
                  style={{
                    cursor: "pointer",
                    color: "#90E0EF",
                    fontSize: "12px",
                  }}
                >
                  Remember
                </label>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <Button
                    style={{
                      width: "105px",
                      height: "32px",
                      fontSize: "18px",
                      backgroundColor: "#EF233C",
                      fontFamily: "poppins",
                    }}
                    variant="contained"
                  >
                    Cancel
                  </Button>
                </div>
                <div>
                  <Button
                    onClick={(e) => GetEmailAndPass()}
                    style={{
                      width: "105px",
                      height: "32px",
                      fontSize: "18px",
                      backgroundColor: "#90E0EF",
                      color: "#03045E",
                      fontFamily: "poppins",
                      fontWeight: "600",
                    }}
                    variant="contained"
                  >
                    Submit
                  </Button>
                </div>
              </div>
              <div
                className="mt-3"
                style={{ display: `${isError === true ? "block" : "none"}` }}
              >
                <Alert severity="error">Wrong Email or Password</Alert>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
