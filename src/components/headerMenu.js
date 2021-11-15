import React from 'react';
import { useState } from 'react';
import './headerMenu.css';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { addNote } from '../actions/index';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import TextField from '@mui/material/TextField';




let addIconStyle = {color:"#6c5ce7",marginTop:8};
let addButtonStyle = {color:"#6c5ce7" ,fontWeight:700 };
const HeaderMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [date , setDate] = useState('');
    const [title , setTitle] = useState('');
    const [desc , setDesc] = useState('');
    const [toggleState , setToggleState] = useState(1);
   
    
    let dispatch = useDispatch();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChangeDate = (e) =>{
        const value = e.target.value;
        const resDate = value.split("-").reverse().join("-")
        setDate(resDate);
    }

    const handleChangeTitle = (e) =>{
        setTitle(e.target.value);
    }
    
    const handleChangeDesc = (e) =>{
        setDesc(e.target.value);
    }

    const changeState = (index) =>{
        setToggleState(index);
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div className="header-menu">
            <div className="menu-list">
                <div className={toggleState === 1 ? "all-menu active" : "all-menu inactive"}
                    onClick={() => changeState(1)}
                >
                    All
                </div>
                <div className={toggleState === 2 ? "all-menu active" : "all-menu inactive"}
                    onClick={() => changeState(2)}
                >
                    Projects
                </div>
                <div className={toggleState === 3 ? "all-menu active" : "all-menu inactive"}
                    onClick={() => changeState(3)}
                >
                    Business
                </div>
                <div className={toggleState === 4 ? "all-menu active" : "all-menu inactive"}
                    onClick={() => changeState(4)}
                >
                    Personal
                </div>
            </div>
            <div className="add-note">
                <div className="add-logo">
                    <AddCircleOutlineIcon  style={addIconStyle}/>
                </div>
                <div className="add-notes">
                    <Button  onClick={handleClick} style={addButtonStyle}>
                        Add new note
                    </Button>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                        }}
                    >
                        <Typography sx={{ p: 2 }}>
                            <div className="addNoteWrapper">    
                                <div className="date">

                                     <TextField
                                        id="date"
                                        label="Date"
                                        type="date"
                                        onChange={handleChangeDate} value={date}
                                        defaultValue="2017-05-24"
                                        sx={{ width: 200 }}
                                        InputLabelProps={{
                                        shrink: true,
                                        }}
                                    />
                                </div>   
                               <div className="title">
                                   
                                    <TextField
                                        id="outlined-multiline-flexible"
                                        label="Title"
                                        multiline
                                        maxRows={2}
                                        onChange={handleChangeTitle} value={title}
                                        style={{marginTop:20}}
                                    />
                                </div>
                                <div className="description">
                                    
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Description"
                                        multiline
                                        rows={4}
                                        defaultValue="Description"
                                        onChange={handleChangeDesc} value={desc}
                                        style={{marginTop:20}}
                                    />
                                    
                                </div>
                                <div className="submit-btn">
                                    
                                    <Button variant="outlined" id="submit-btn" onClick={()=>dispatch(addNote(date,title,desc),setDate(''),setTitle(''),setDesc(''))}>
                                        Submit
                                    </Button>
                                </div>
                            </div>
                        </Typography>
                    </Popover>
                </div>

            </div>
        </div>
    )
}

export default HeaderMenu;