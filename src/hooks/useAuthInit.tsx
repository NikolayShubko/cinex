import { useEffect } from "react";
import { useLazyRefreshQuery } from "../store/api/auth/authApiSlice";
import { useAppDispatch } from "./reduxHooks";
import { setIsLogin, setToken } from "../store/api/auth/authSlice";

export function useAuthInit() {
  const isPersistLogin = localStorage.getItem("rememberMe");
  const dispatch = useAppDispatch();
  const [refresh] = useLazyRefreshQuery();
  useEffect(() => {
    const getToken = async () => {
      try {
        const result = await refresh().unwrap();
        console.log(result);
        if (result?.accessToken) {
          dispatch(setIsLogin(true));
          dispatch(setToken(result?.accessToken));
        }
      } catch (err) {
        console.log(err);
      }
    };
    if (isPersistLogin) {
      getToken();
    }
  }, [isPersistLogin, dispatch, refresh]);
  return null;
}
