import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import BigLists from "../../RandomBigList/books.json";
import BigLists1 from "../../RandomBigList/bookscopy.json";
import React from "react";

const BigMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Big List
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {BigLists.map((_listItems, idx) => {
          return (
            <li key={`section-${idx}`}>
              {
                (BigLists.map((listItems, index) => {
                  return (
                    <MenuItem
                      onClick={handleClose}
                      key={`menu-item-${index}`}
                    >{`item-${index}-${listItems.title}`}</MenuItem>
                  );
                }),
                BigLists1.map((listItems, index) => {
                  return (
                    <MenuItem
                      onClick={handleClose}
                      key={`menu-item1-${index}`}
                    >{`item-${index}-${listItems.authors}`}</MenuItem>
                  );
                }))
              }
            </li>
          );
        })}
      </Menu>
    </>
  );
};

export default BigMenu;

/*
         <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        position: "relative",
        overflow: "hidden",
        maxHeight: 10000,
        "& ul": { padding: 0 },
      }}
      subheader={<li />}
    >
      {BigLists.map((_listItems, idx) => {
        return (
          <li key={`section-${idx}`}>
            {
              (BigLists.map((listItems, index) => {
                return (
                  <ListItem key={`item-${index}-${listItems}`}>
                    <ListItemText
                      primary={`${index}. ----- ${listItems.title}
                  ${listItems.author}`}
                    />
                  </ListItem>
                );
              }),
              BigLists1.map((listItems, index) => {
                return (
                  <ListItem key={`item1-${index}`}>
                    <ListItemText
                      primary={`${index}. ----- ${listItems.title}
                  ${listItems.author}`}
                    />
                  </ListItem>
                );
              }))
            }
          </li>
        );
      })}
    </List>


*/
