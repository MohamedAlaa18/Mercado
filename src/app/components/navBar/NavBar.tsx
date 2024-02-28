import { Accordion, AccordionSummary, Box, Button, Container, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Stack, Typography, useMediaQuery, useTheme } from "@mui/material"
import { useState } from "react";
import WindowIcon from "@mui/icons-material/Window";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import { SportsEsportsOutlined, ElectricBikeOutlined, LaptopChromebookOutlined, MenuBookOutlined, Close } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HeaderLinks from "../navBar/NavBarLinks";
import { useTranslation } from "react-i18next";

const mobileNavigation = [
  { mainLink: "Home", subLinks: ["Link 1", "Link 2", "Link 3"] },
  { mainLink: "Mega menu", subLinks: ["Link 1", "Link 2", "Link 3"] },
  {
    mainLink: "Full screen menu",
    subLinks: ["Link 1", "Link 2", "Link 3"],
  },
  { mainLink: "Pages", subLinks: ["Link 1", "Link 2", "Link 3"] },
  {
    mainLink: "User account",
    subLinks: ["Link 1", "Link 2", "Link 3"],
  },
  {
    mainLink: "Vendor account",
    subLinks: ["Link 1", "Link 2", "Link 3"],
  },
];

const menuItems = [
  { text: "Bikes", Icon: ElectricBikeOutlined },
  { text: "Electronics", Icon: LaptopChromebookOutlined },
  { text: "Books", Icon: MenuBookOutlined },
  { text: "Games", Icon: SportsEsportsOutlined },
];

function NavBar() {
  const theme = useTheme();
  const { t } = useTranslation();

  const desktop = useMediaQuery('(min-width:1200px)');
  const mobile = useMediaQuery('(max-width:1200px)');

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor: 'top' | 'left' | 'bottom' | 'right', open: boolean) => (event: React.MouseEvent<HTMLButtonElement>) => {
    setState({ ...state, [anchor]: open });
  };

  return (
    <Container sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            width: 222,
            // @ts-ignore
            bgcolor: theme.palette.header.main,
            color: theme.palette.text.secondary,
          }}
        >
          <WindowIcon />
          <Typography
            sx={{
              padding: "0",
              textTransform: "capitalize",
              mx: 1,
            }}
          >
            Categories
          </Typography>
          <Box flexGrow={1} />

          <KeyboardArrowRightOutlinedIcon />
        </Button>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{
            ".MuiPaper-root": {
              width: 220,
              // @ts-ignore
              bgcolor: theme.palette.header.main,
            },
          }}
        >
          {menuItems.map(({ text, Icon }, index) => (
            <MenuItem key={index} onClick={handleClose}>
              <ListItemIcon>
                <Icon fontSize="small" />
              </ListItemIcon>
              <ListItemText>{text}</ListItemText>
            </MenuItem>
          ))}
        </Menu>
      </Box>

      {desktop &&
        <Stack direction={"row"} gap={4} alignItems={"center"}>
          <HeaderLinks title={t('Home')} />
          <HeaderLinks title={t("Mega Menu")} />
          <HeaderLinks title={t("Full Screen Menu")} />
          <HeaderLinks title={t("Pages")} />
          <HeaderLinks title={t("User Account")} />
          <HeaderLinks title={t("Vendor Account")} />
        </Stack>
      }

      {mobile &&
        <IconButton onClick={toggleDrawer("top", true)}>
          <MenuIcon />
        </IconButton>
      }

      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{
          ".MuiPaper-root": {
            minHeight: "100%",
          },
        }}
      >
        <Box
          sx={{ width: "100%", mx: "auto", mt: 6, position: "relative", pt: 10 }}
        >
          <IconButton
            sx={{
              ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
              position: "absolute",
              top: 0,
              right: 10,
            }}
            onClick={toggleDrawer("top", false)}
          >
            <Close />
          </IconButton>

          {mobileNavigation.map((item) => (
            <Accordion
              key={item.mainLink}
              elevation={0}
              sx={{ bgcolor: "initial" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{item.mainLink}</Typography>
              </AccordionSummary>

              <List sx={{ py: 0, my: 0 }}>
                {item.subLinks.map((link) => {
                  return (
                    <ListItem key={link} sx={{ py: 0, my: 0 }}>
                      <ListItemButton>
                        <ListItemText primary={link} />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            </Accordion>
          )
          )}
        </Box>
      </Drawer>
    </Container>
  )
}

export default NavBar
