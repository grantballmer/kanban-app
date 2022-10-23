import React, { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { getUserData, setLoading } from "../../redux/auth";
import { Props } from "../../types/props";
import { useNavigate } from "react-router-dom";

const authContext = createContext(false);

const AuthProvider = ({ children }: Props) => {
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setAuthenticated(true);
        const uid = user.uid;
        await dispatch(getUserData(uid));
        dispatch(setLoading(false));
      } else {
        navigate("/login");
        dispatch(setLoading(false));
      }
    });
  }, []);

  return (
    <authContext.Provider value={authenticated}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
