import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NAVITEMS } from "./index";
import Link from "next/link";
import { Logo } from "@root/assets/svg";
import { useTheme } from "@mui/material";
import { createGradient } from "@root/theme/palette";
import { useRouter } from "next/router";

const drawerWidth = 240;

export default function TopNavbar() {
  const token =
    typeof localStorage !== "undefined"
      ? localStorage.getItem("loginToken") || null
      : null;
  const theme: any = useTheme();
  const Router = useRouter();
  const { pathname } = Router;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  /* Drawer For Mobile View */
  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <Box
        onClick={() => {
          Router.push("/home");
        }}
        sx={{ py: 1.5, textAlign: "start", cursor: "pointer" }}
      >
        <Logo {...styles.mobLogo} />
      </Box>
      <Divider />

      <List>
        {NAVITEMS.map((item: any) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton>
              <Link
                href={item.link}
                style={{
                  textDecoration: "none",
                  color:
                    pathname === item.link
                      ? theme.palette.primary.main
                      : theme.palette.grey[700],
                }}
              >
                <ListItemText
                  primary={
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: pathname === item.link ? 500 : 500,
                        fontSize: "14px",
                        color:
                          pathname === item.link
                            ? theme.palette.primary.main
                            : theme.palette.grey[700],
                        "&:hover": {
                          backgroundColor: theme.palette.primary.lighter,
                          color: theme.palette.primary.main,
                        },
                      }}
                    >
                      {item.title}
                    </Typography>
                  }
                />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      
       
      </List>
    </Box>
  );

  return (
    <>
      <CssBaseline />
      <AppBar component="nav" elevation={0} sx={styles.appBarStyling}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: "none" } }}
          >
            <MenuIcon sx={{ color: theme.palette.grey[700] }} />
          </IconButton>
          <Box sx={styles.mainWrapper}>
            <Box
              onClick={() => {
                Router.push("/home");
              }}
              sx={{
                cursor: "pointer",
              }}
            >
              <Logo {...styles.logo} />
            </Box>
            <Box>
              {NAVITEMS.map((item: any, index: any) => (
                <Link
                  href={item.link}
                  key={item.id}
                  style={{
                    textDecoration: "none",
                    marginRight: index !== item.length - 1 ? "50px" : "0",
                  }}
                >
                  <Button
                    sx={{
                      fontWeight: pathname === item.link ? 600 : 600,
                      fontSize: { xs: "15px", lg: "15px", xl: "18px" },
                      color: pathname === item.link ? "#F02D46" : "white",
                      "&:hover": {
                        backgroundColor: "#b02D46",
                        color: "#F02D46,",
                      },
                    }}
                  >
                    {item.title}
                  </Button>
                </Link>
              ))}
            </Box>
            {/* <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Link href={"/"} style={{ textDecoration: "none" }}>
                <Typography variant="subtitle2" sx={styles.contactButton}>
                  Become an Excort
                </Typography>
              </Link>
              <Link
                href={"/"}
                style={{ textDecoration: "none" }}
              >
                <Typography variant="subtitle2" sx={styles.contactButton}>
                  Logout
                </Typography>
              </Link>
            </Box> */}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={styles.mobileDrawer}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}

/* Styling is Here */

const styles: any = {
  logo: {
    iconHeight: 40,
    iconWidth: 250,
    variant: "theme",
    margin: { md: "10px 0", lg: 0 },
  },
  appBarStyling: (theme: any) => ({
    py: 2.5,
    background: "#000000",
    position: "sticky",
    boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2)",
  }),
  mainWrapper: {
    display: { xs: "none", lg: "flex" },
    alignItems: "center",
    justifyContent: "space-between",
    flexGrow: 1,
    flexDirection: { xs: "row", md: "column", lg: "row" },
  },
  contactButton: (theme: any) => ({
    fontWeight: 600,
    color: theme.palette.grey[0],
    background: "#F02D46",
    // createGradient(
    //   theme.palette.primary.dark,
    //   theme.palette.primary.light
    // ),
    padding: "10px 30px",
    borderRadius: "26px",
    margin: { md: "10px 0 0 0", lg: 0 },
    fontSize: { xs: "15px", lg: "20px", xl: "23px" },
  }),
  mobileDrawer: {
    display: { xs: "block", lg: "none" },
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: drawerWidth,
    },
  },
  mobContactButton: {
    textDecoration: "none",
    display: "inline-block",
    marginTop: "20px",
    justifyContent: "start",
    marginLeft: "15px",
  },
  mobLogo: {
    iconHeight: 35,
    iconWidth: 180,
    variant: "theme",
  },
  delegateMember: (theme: any) => ({
    fontWeight: 500,
    color: theme.palette.primary.main,
    padding: "10px 30px",
    margin: { md: "10px 0 0 0", lg: 0 },
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: "10px",
    fontSize: { xs: "14px", lg: "12px", xl: "14px" },
  }),
  mobDelegateMember: {
    textDecoration: "none",
    display: "inline-block",
    marginTop: "20px",
    justifyContent: "start",
    marginLeft: "15px",
  },
};
