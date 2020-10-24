import React, {useRef, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
    input: {
        display: "none"
    },
    fileInputGrid: {
        width: "calc(82% + 16px)",
        margin: "0 0 0 68px"
    }
});

const FileInput = ({onChange, name}) => {
    const classes = useStyles();
    const inputRef = useRef();
    const [filename, setFilename] = useState("");

    const activateInput = () => {
        inputRef.current.click();
    };

    const onFileChange = e => {
        if(e.target.files[0]) {
            setFilename(e.target.files[0].name);
        } else {
            setFilename("");
        }
        onChange(e);
    };

    return (
        <>
            <input
                type="file"
                name={name}
                ref={inputRef}
                className={classes.input}
                onChange={onFileChange}
            />
                <Grid container direction="row" spacing={2} alignItems="center" className={classes.fileInputGrid}>
                    <Grid item xs>
                        <TextField
                        variant="outlined"
                        disabled
                        fullWidth
                        value={filename}
                        onClick={activateInput}
                        />
                    </Grid>
                    <Grid>
                        <button onClick={activateInput} className="Browse">
                            Browse
                        </button>
                    </Grid>
                </Grid>
        </>
    );
};

export default FileInput;
