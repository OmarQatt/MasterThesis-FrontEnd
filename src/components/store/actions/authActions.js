import axios from "axios";

import {
  authRequest,
  authFail,
  signupSuccess,
  loginSuccess,
  logoutSuccess,
  setPreviewImage,
} from "../features/authSlicer";


import base64 from "base-64";




export const signUp = (dispatch, payload, toast) => {
  payload.preventDefault();

  if (payload.target.password.value === payload.target.confirmPassword.value) {
    dispatch(authRequest());

    const data = {
        userName: payload.target.studentName.value,
        studentNumber: payload.target.studentNumber.value,
        teacherName: payload.target.supervisorName.value,
        academicYear: payload.target.academicYear.value,
        semesterYear: payload.target.semester.value,
        collegeName: payload.target.college.value,
        departmentName: payload.target.section.value,
        LetterName: payload.target.aboutThesis.value,
        LetterNameinEnglish: payload.target.LetterNameinEnglish.value,
    };
    console.log("data", data);

    try {
      if (payload.error) {
        dispatch(authFail(payload.error));
      } else {
        dispatch(authRequest());
        axios
          .post(`${process.env.REACT_APP_RENDER_URL}/signup`, data)
          .then((res) => {
            dispatch(signupSuccess(res.data));

            toast({
              title: "Account created.",
              description: "We've sent a verification email to your email address. Please verify your account.",
              status: "success",
              duration: 5000,
              isClosable: true,
            });
          })
          .catch((err) => {
            dispatch(authFail(err.response.data));
            toast({
              title: "Something went wrong.",
              description: `${err.response.data}` || "Please try again.",
              status: "error",
              duration: 5000,
              isClosable: true,
            });
          });
      }
    } catch (error) {
      dispatch(authFail(error.response.data));
      toast({
        title: "Something went wrong.",
        description: `${error.response.data}` || "Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  } else {
    dispatch(authFail("The password entered does not match! Please try again."));
    toast({
      title: "Something went wrong.",
      description: "The password entered does not match! Please try again.",
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  }
};

export const login = (dispatch, payload, toast) => {
  payload.preventDefault();

  const user = {
    userName: payload.target.userName.value,
    userEmail: payload.target.email.value,
    password: payload.target.password.value,
  };

  const encodedUser = base64.encode(`${user.email}:${user.password}`);

  try {
    if (payload.error) {
      dispatch(authFail(payload.error));
    } else {
      dispatch(authRequest());
      axios
        .post(
          `${process.env.REACT_APP_RENDER_URL}/login`,
          {},
          {
            headers: {
              Authorization: `Basic ${encodedUser}`,
            },
          }
        )
        .then((res) => {
          dispatch(loginSuccess(res.data));
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("userInfo", JSON.stringify(res.data));
          localStorage.setItem("username", res.data.userName);
          localStorage.setItem("userID", res.data.id);

          toast({
            title: `Welcome back ${res.data.userName} !`,
            description: "You are now logged in.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        })
        .catch((err) => {
          dispatch(authFail(err.response.data));
          console.log(err.response.data);
          toast({
            title: "Something went wrong.",
            description: `${err.response.data}` || "Please try again.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        });
    }
  } catch (error) {
    dispatch(authFail(error));
    toast({
      title: "Something went wrong.",
      description: `${error.response.data}` || "Please try again.",
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  }
};

export const logout = (dispatch) => {
  try {
    dispatch(logoutSuccess());
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    localStorage.removeItem("username");
    localStorage.removeItem("userID");
  } catch (error) {
    dispatch(authFail(error));
  }
};

export const verifyEmail = (dispatch, payload, toast) => {
  payload.preventDefault();

  const user = {
    email: payload.target.email.value,
    password: payload.target.password.value,
  };

  const encodedUser = base64.encode(`${user.email}:${user.password}`);

  try {
    if (payload.error) {
      dispatch(authFail(payload.error));
    } else {
      dispatch(authRequest());

      const url = window.location.href;
      const urlArray = url.split("/");
      const id = urlArray[urlArray.length - 1];

      axios
        .post(
          `${process.env.REACT_APP_RENDER_URL}/verification/${id}`,
          {},
          {
            headers: {
              Authorization: `Basic ${encodedUser}`,
            },
          }
        )
        .then((res) => {
          dispatch(loginSuccess(res.data));
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("userInfo", JSON.stringify(res.data));
          localStorage.setItem("username", res.data.userName);
          localStorage.setItem("userID", res.data.id);
          toast({
            title: "Verification successful.",
            description: `Welcome to eMazad ${res.data.userName}, you are now logged in.`,
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        })
        .catch((err) => {
          dispatch(authFail(err.response.data));
          toast({
            title: "Something went wrong.",
            description: `${err.response.data}` || "Please try again.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        });
    }
  } catch (error) {
    dispatch(authFail(error));
    toast({
      title: "Something went wrong.",
      description: `${error.response.data}` || "Please try again.",
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  }
};
