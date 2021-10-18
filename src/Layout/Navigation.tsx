/* eslint-disable react/jsx-handler-names */
import ArchiveIcon from "@mui/icons-material/Archive";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useState } from "react";

export const Navigation = () => {
  const [value, setValue] = useState(0);
  // eslint-disable-next-line no-console
  console.log(value);

  return (
    <Box sx={{ width: 500 }}>
      <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(_event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Home" icon={<HomeRoundedIcon />} />
          <BottomNavigationAction label="NEWS" icon={<ArticleRoundedIcon />} />
          <BottomNavigationAction label="ABOUT" icon={<ArchiveIcon />} />
          <BottomNavigationAction label="ABOUT" icon={<ShoppingCartRoundedIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};
