import React, { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { getUserData, setLoading } from "../../redux/auth";
import { Props } from "../../types/common";
import { redirect, useNavigate, useParams } from "react-router-dom";

const authContext = createContext(false);

const AuthProvider = ({ children }: Props) => {
  const [authenticated, setAuthenticated] = useState(false);
  const { boards } = useSelector((state: RootState) => state.boards);
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setAuthenticated(true);
        const uid = user.uid;
        await dispatch(getUserData(uid));
      } else {
        navigate("/login");
        dispatch(setLoading(false));
      }
    });
  }, []);

  useEffect(() => {
    if (authenticated && boards.length > 0) {
      // const board = params.id
      //   ? boards.find((board) => String(board.id) === params.id)
      //   : boards[0];
      const board = boards[0];

      navigate(board.href);
      dispatch(setLoading(false));
    }
  }, [boards]);

  return (
    <authContext.Provider value={authenticated}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
