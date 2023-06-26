import * as React from 'react';
import Tooltip from "@mui/material/Tooltip";

export default function GetTooltip(props) {
    if (props.type === 'songs') {
        return (<>{props.children}</>)
    } else {
        return (<Tooltip className='tooltip' title={props.numOfSOngs + ' songs'} placement='top' arrow >
            {props.children}
        </Tooltip>)
    }
}