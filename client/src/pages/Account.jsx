import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { logoutAction } from "../redux/actions/auth";
import Places from "./Places";
import AccountNav from "../components/AccountNav";

const Account = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state?.auth?.auth?.user);
  let {subpage} = useParams();
  if (subpage === undefined) {
    subpage = 'profile';
  }

  const logout = () => {
    dispatch(logoutAction(navigate));
  };

  return (
    <div>
      <AccountNav />
      {subpage === "profile" && (
        <div className="text-center max-w-lg mx-auto">
          Logged in as {userInfo?.name} {userInfo?.email}
          <button onClick={logout} className="primary max-w-sm mt-2">
            Logout
          </button>
        </div>
      )}
      {subpage === "places" && <Places />}
    </div>
  );
};

export default Account;
