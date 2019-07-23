import React from "react";
import useStyles from "../../styles/pages/FooterStyles";

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <p>&copy; 2019 Naoto Shiota</p>
    </div>
  );
}

export default Footer;
