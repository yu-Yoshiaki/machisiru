/* eslint-disable react/jsx-handler-names */
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";

export const Navigation = () => {
  const [value, setValue] = useState(0);
  const link = ["/", "/news", "/shopify"];
  const router = useRouter();

  return (
    <Box sx={{ width: 500 }}>
      <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(_event, newValue) => {
            setValue(newValue);
            router.push(link[newValue]);
          }}
        >
          <BottomNavigationAction label="HOME" icon={<HomeRoundedIcon />} />
          <BottomNavigationAction label="NEWS" icon={<ArticleRoundedIcon />} />
          {/* <BottomNavigationAction label="ABOUT" icon={<ArchiveIcon />} /> */}
          <BottomNavigationAction label="SHOP" icon={<ShoppingCartRoundedIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};
