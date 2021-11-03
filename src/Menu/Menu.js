import React, { useState } from "react";
import { Toolbar, IconButton, AppBar, Drawer, List, ListItem, ListItemText, Typography, Button } from "@material-ui/core"
import { MdHome } from "react-icons/md";
import { IconContext } from "react-icons/lib";
import "./Menu.css";
import { useHistory } from "react-router-dom";
import { BsPersonSquare } from "react-icons/bs";
import { ImBooks } from "react-icons/im";
import { FiMenu } from "react-icons/fi";
import { isAuthenticated } from "../services/auth";


function Menu(props) {

    const history = useHistory();
    const [currentPage, setCurrentPage] = useState("/home");
    const [open, setOpen] = useState(false);

    function handleClick(pathName) {
        history.push(pathName);
        setCurrentPage(pathName);
    }
    function handleDrawer(isOpen) {
        setOpen(isOpen);


    }

    const pages = [
        {
            pathName: "/home",
            icon: <MdHome />,
            text: "Home",
            iconSize: "1.5em"

        },
        {
            pathName: "/perfil",
            icon: <BsPersonSquare />,
            text: "Perfil",
            iconSize: "1.3em"

        },
        {
            pathName: "/biblioteca",
            icon: <ImBooks />,
            text: "Biblioteca",
            iconSize: "1.5em"
        }
    ];
    return (
        <>
            <AppBar position="static" >
                <Toolbar style={{ backgroundColor: "#333333" }}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={() => handleDrawer(!open)}
                        marginLeft="100px"

                    >
                        <FiMenu />
                    </IconButton>
                    <div className="conjunto">
                        <img src="/images/saturno.png" alt="Logo" className="Saturno"></img>
                        <p className="Logo">Planet Books</p>

                    </div>
                    {!isAuthenticated() && 
                    <div className="buttons">
                        <Button style={{ backgroundColor: "#E5E5E5", color: "#000000", fontFamily: "Overlock SC" }} onClick={() => {
                            handleClick("/cadastro");
                        }}>Cadastro</Button>
                        <Button style={{ backgroundColor: "#E5E5E5", color: "#000000", fontFamily: "Overlock SC", marginLeft: "10px", marginRight: "100px" }} onClick={() => {
                            handleClick("/login");
                        }}>login</Button>
                    </div>
                    }

                </Toolbar>
            </AppBar>
            {props.children}


            <Drawer open={open} onClose={() => handleDrawer(false)}>
                <List className="list">
                    {pages.map((listItem) => {
                        return (
                            <ListItem
                                button
                                selected={currentPage === listItem.pathName}
                                onClick={() => {
                                    handleClick(listItem.pathName);
                                }}>
                                <IconContext.Provider value={{ color: "#000000", size: listItem.iconSize }}>
                                    {listItem.icon}
                                </IconContext.Provider>
                                <ListItemText >
                                    <p style={{ fontFamily: "Overlock SC", marginLeft: "16px", marginBottom: 0 }}>{listItem.text}</p>
                                </ListItemText>
                            </ListItem>
                        );
                    })}
                </List>

            </Drawer>
        </>
    );

}

export default Menu;