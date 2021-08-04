import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    "& div": {
      background: "#81B29A",
      color: "#3D405B",
      font: "12px 'opensans-bold', sans-serif"
    }
  },
};

function EmailSent(props) {
    const {classes, emailSentOpen, closeEmailSent} = props;
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      closeEmailSent();
    };

    return(
        <Snackbar
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            }}
            classes={{root: classes.root, elevation6: classes.elevation6}}
            open={emailSentOpen}
            autoHideDuration={3000}
            onClose={handleClose}
            message="Contact Information Sent. Thank you!"
            className={classes.root}
            >
        </Snackbar>
    )
}

export default withStyles(styles)(EmailSent);