import React from 'react'
import Avatar from "@material-ui/core/Avatar";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import "./ChannelRow.css";

function ChannelRow({image,Channel,verified,subs,noofVideos,description}) {
    return (
        <div className="channelRow">
            <Avatar classname="channelRow__logo" alt={Channel} src={image} />
    <div className="channelRow__text">
        <h4>{Channel} {verified && <CheckCircleOutlineIcon/> }</h4>
        <p>{subs} subscribers . {noofVideos} videos</p>
        <p>{description}</p>

    </div>
        </div>
    )
}

export default ChannelRow
