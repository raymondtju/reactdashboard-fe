import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import { useSelector } from "react-redux";
import { useGetUsersQuery } from "../../redux/api";

export default function Layout() {
  const notMobile = useMediaQuery("(min-width:600px)");
  const [isSidebar, setIsSidebar] = useState(true);
  const userId = useSelector((state) => state.theme.userId);
  const { data } = useGetUsersQuery(userId);

  return (
    <Box display={notMobile ? "flex" : "block"} width="100%" height="100%">
      <Sidebar
        user={data || {}}
        notMobile={notMobile}
        isSidebar={isSidebar}
        setIsSidebar={setIsSidebar}
        drawerWidth="250px"
      />
      <Box flexGrow={1}>
        <Navbar
          isSidebar={isSidebar}
          setIsSidebar={setIsSidebar}
          user={data || {}}
        />

        <Outlet />
      </Box>
    </Box>
  );
}
