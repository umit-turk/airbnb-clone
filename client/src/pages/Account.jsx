import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { logoutAction } from "../redux/actions/auth";

const Account = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userInfo = useSelector((state) => state?.auth?.auth?.user);
    const { subpage = "profile" } = useParams();


    const linkClasses = (type = null) => {
        let classes = "p-2 px-6";
        if (type === subpage) {
            classes += " bg-primary text-white rounded-full";
        }
        return classes;
    };

    const logout = () => {
        dispatch(logoutAction(navigate))
    }

    return (
        <div>
            <nav className="w-full flex justify-center mt-8 gap-2">
                <Link className={linkClasses("profile")} to={"/account"}>
                    My profile
                </Link>
                <Link className={linkClasses("bookings")} to={"/account/bookings"}>
                    My bookings
                </Link>
                <Link className={linkClasses("places")} to={"/account/places"}>
                    My accomandations
                </Link>
            </nav>
            {subpage === "profile" && (
                <div className="text-center max-w-lg mx-auto">
                    Logged in as {userInfo?.name} {userInfo?.email}
                    <button onClick={logout} className="primary max-w-sm mt-2">Logout</button>
                </div>
            )}
        </div>
    );
};

export default Account;
