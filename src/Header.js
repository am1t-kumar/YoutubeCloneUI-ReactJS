import React,{useState} from 'react'
import "./Header.css";
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';
import NotificationsActiveSharpIcon from '@material-ui/icons/NotificationsActiveSharp';
import Avatar from "@material-ui/core/Avatar"
import { Link } from 'react-router-dom';

function Header() {

const [inputSeacrh,setInputSearch] = useState("");
    return (
    <div className="header">

       <div className="header__left" >
            <MenuSharpIcon />
            <Link to="/">
            <img className="header__logo" src="http://www.logoeps.com/wp-content/uploads/2011/02/youtube-logo-vector.png" alt="" />
            </Link>
        </div>

        <div className="header__input">
            <input onChange={e => setInputSearch(e.target.value)} value={inputSeacrh} placeholder="Search" type="text"/>
            <Link to={`/search/${inputSeacrh}`}>
                <SearchIcon className="header__inputButton" />
             </Link>
        </div>
            
        <div className="header__icons">
            <VideoCallSharpIcon className="header__icon"/>
            <AppsSharpIcon className="header__icon"/>
            <NotificationsActiveSharpIcon className="header__icon" />
            <Avatar alt="amit" src="https://i.redd.it/6du1k16dpwuy.jpg" />
        </div>    

    </div>
    )
}

export default Header