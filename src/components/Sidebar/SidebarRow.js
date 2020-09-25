import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarRow.css';
const SidebarRow = ({ src, Icon, title }) => {//here we can directly pass the props or we can destructure and pass the exact properties like src, icon and title.

    return (
        <div className="sidebarRow">
            {src && <Avatar src={src}/>}
            {Icon && <Icon />}

            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow;