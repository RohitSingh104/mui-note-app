import React from 'react';
import { useState } from 'react';
import './headerMenu.css';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { addNote } from '../actions/index';
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
                    <img id="add-logo" src="https://pngimage.net/wp-content/uploads/2018/05/add-logo-png-5.png" alt="" />
                </div>
                <div className="add-notes">
                    <Button aria-describedby={id} variant="contained" onClick={handleClick}>
                        Add a note
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
                                    <input type="date" id="date" onChange={handleChangeDate} value={date}/>
                                </div>   
                               <div className="title">
                                    <input type="textarea" id="title1" placeholder="Title" onChange={handleChangeTitle} value={title}/>
                                </div>
                                <div className="description">
                                    <textarea id="desc1" placeholder="Description" onChange={handleChangeDesc} value={desc}> </textarea>
                                    {/* <input type="textarea" id="desc1" placeholder="Description" onChange={handleChangeDesc} value={desc}/> */}
                                </div>
                                <div className="submit-btn">
                                    <input type="submit" id="submit-btn" onClick={()=>dispatch(addNote(date,title,desc),setDate(''),setTitle(''),setDesc(''))}/>
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