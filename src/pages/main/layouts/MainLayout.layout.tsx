/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Outlet } from "react-router"
import Header from "../Header/Header.component";
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../app/store";  
import { useEffect } from "react";
import { fetchUserFailure, fetchUserStart, fetchUserSuccess } from "../../../features/user/slices/user.slice";
import UserAPI from "../../../api/user.api";
function MainLayout() {
  const dispatch = useDispatch();
  const username = useSelector((state: RootState) => state.login.user?.username);

  useEffect(() => {
    const fetchData = async () => {
      if(username) {
        dispatch(fetchUserStart());
        try {
          const data = await UserAPI.getUser(username);
          dispatch(fetchUserSuccess(data));
        }
        catch(error: any) {
          dispatch(fetchUserFailure(error.message));
        }
      }
    }

    fetchData();
  }, [dispatch, username]);

  return (
    <main className="relative">
      <Header></Header>
      <div className="pt-[4rem]"></div>
      <Outlet/>
    </main>
  )
}

export default MainLayout