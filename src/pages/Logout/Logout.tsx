import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const [, , removeCookie] = useCookies(["authData"]);
  const navigate = useNavigate();

  useEffect(() => {
    removeCookie("authData");
    navigate("/login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div></div>;
};
