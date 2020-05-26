import React from "react";
import classes from "./Backdrop.module.css";

const backdrop = (props) => {
    console.log(props.show);

    return (
        <div>
            {props.show ? (
                <div className={classes.Backdrop} onClick={props.clicked}></div>
            ) : null}
        </div>
    );
};

export default backdrop;
