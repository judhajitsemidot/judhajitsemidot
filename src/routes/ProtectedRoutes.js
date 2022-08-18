/**
 * This file only for protect Routing
 * with auth access route
 */
import { getUserData } from "../Authentication/Auth";
import { getProfile } from "../../store/actions";
import {
  is_browser,
  routesList,
  unProtectedRoutes,
  userLoginPath,
} from "../common";
import { connect, useDispatch } from "react-redux";
import { useEffect } from "react";
/**
 *
 * @param {router,childred}
 * router for give all information related to browswer
 * @returns component
 */

const ProtectedRoutes = ({ router, children, ...rest }) => {
  const { userProfile, onGetUserProfile } = rest;
  const dispatch = useDispatch();
  let isUserLoginPath = userLoginPath.indexOf(router.pathname) > -1;
  let pathIsProtected = unProtectedRoutes.indexOf(router.pathname) === -1;
  const isUserAuthenticated = is_browser() && getUserData().isUserAuthenticated;

  useEffect(() => {
    if (!userProfile) {
      onGetUserProfile();
    }
  }, [userProfile]);

  useEffect(() => {
    if (is_browser() && !isUserAuthenticated && pathIsProtected) {
      router.push(routesList.homePage);
    } else if (isUserLoginPath && isUserAuthenticated) {
      router.push(routesList.homePage);
    } else {
    }
  }, [children, isUserLoginPath]);
  return children;
};
const mapStateToProps = ({ Profile }) => ({
  userProfile: Profile.data?.data,
});

const mapDispatchToProps = (dispatch) => ({
  onGetUserProfile: () => dispatch(getProfile()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoutes);
