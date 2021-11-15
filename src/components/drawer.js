import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import GridViewIcon from "@mui/icons-material/GridView";
import TaskIcon from "@mui/icons-material/Task";
import DescriptionIcon from "@mui/icons-material/Description";
import EventNoteIcon from "@mui/icons-material/EventNote";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import  PrimarySearchAppBar from "./header";
import Skeleton from '@mui/material/Skeleton';
import AddIcon from '@mui/icons-material/Add';
import "./drawer.css";
const drawerWidth = 240;
let toolbarStyle = { backgroundColor: "#6c5ce7" };
let listIconStyle = { color: "white" };
let belowListIconStyle = {color:"blue" , fontSize:10};
let listStyle = {marginTop:25,marginLeft:10};
let dividerStyle = {marginTop:20 ,marginLeft:20, marginRight:20};
let skeletonStyle = {marginLeft:15};
let smallListStyle = {marginLeft:10 , };
let belowSideMenu = {marginTop:5};
let listItemStyle = {marginTop:10};
function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="side-menu">
      <Toolbar style={toolbarStyle} sx={{p:3.135}}>
        <span>
          <Skeleton variant="circular" width={30} height={30} />
        </span>
        <span>
          <Skeleton variant="text" height={16} width={100} style={skeletonStyle}/>
        </span>
        
      </Toolbar>
      <Divider />
      <List style={listStyle}>
        {[
          { name: "Overview", icon: <GridViewIcon /> },
          { name: "Tasks", icon: <TaskIcon /> },
          { name: "Documents", icon: <DescriptionIcon /> },
          { name: "Notes", icon: <EventNoteIcon /> },
          { name: "Output", icon: <AssignmentTurnedInIcon /> },
          { name: "Support", icon: <SupportAgentIcon /> },
        ].map((text, index) => (
          <ListItem button key={text} style={listItemStyle}>
            <ListItemIcon style={listIconStyle}>{text.icon}</ListItemIcon>
            <ListItemText primary={text.name} />
          </ListItem>
        ))}
      </List>
      <Divider style={dividerStyle}/>
      <List style={smallListStyle}>
        {[{name:"Projects", icon:<FiberManualRecordIcon style={{width:10,color:"orange"}}/>}, {name:"Business",icon:<FiberManualRecordIcon style={{width:10,color:"yellow"}}/>}, {name:"Personal",icon:<FiberManualRecordIcon style={{width:10,color:"blue"}}/>}, {name:"Add new",icon:<AddIcon style={{width:15,color:"white"}}/>}].map((text, index) => (
          <ListItem button key={text} >
            <ListItemIcon>
              {text.icon}
            </ListItemIcon>
            <ListItemText primary={text.name} style={belowSideMenu}/>
          </ListItem>
        ))}
      </List>
      <Divider style={dividerStyle}/>
        <div className="footer">
            <div className="socialMediaIcon">
                    <div className="fb-icon">
                        <FacebookIcon style={listIconStyle}/>
                    </div>
                    <div className="twitter-icon">
                        <TwitterIcon style={listIconStyle}/>
                    </div>  
                    <div className="linkedin-icon">
                        <LinkedInIcon style={listIconStyle}/>
                    </div>
            </div>
            <div className="copyright">
                    <p>2021 All rights reserved</p>
            </div>
        </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
 
        <PrimarySearchAppBar />
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
    
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
       
      </Box>
    </Box>
  );
}



export default ResponsiveDrawer;
