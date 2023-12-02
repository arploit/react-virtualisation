import React from "react";
import BigLists from "../../RandomBigList/books.json";
import BigLists1 from "../../RandomBigList/bookscopy.json";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const BigListComponent = () => {
 
  return (
    <>
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
     <List
     sx={{
       width: "100%",
       maxWidth: 360,
       bgcolor: "background.paper",
       position: "relative",
       overflow: "hidden",
       maxHeight: 300,
       "& ul": { padding: 0 },
     }}
     subheader={<li />}
   >
     {BigLists.map((_listItems, idx) => {
       return (
         <li key={`section-${idx}`}>
           {
             (
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
   </>
    
  );
};

export default BigListComponent;
