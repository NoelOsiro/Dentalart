import { Outlet } from "react-router-dom";
import HeaderBar from "../components/navbar/navbar";

export default function Root() {
  return (
    <>
    <HeaderBar/> 
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}