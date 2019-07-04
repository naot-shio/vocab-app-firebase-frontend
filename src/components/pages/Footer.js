import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import useStyles from "../../styles/pages/FooterStyles";

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <a href="https://twitter.com/muchsalt1">
        <IconButton className={classes.icon}>
          <FontAwesomeIcon icon={faTwitter} color="#38A1F3" />
        </IconButton>
      </a>
      <p className={classes.message}>お問い合わせはTwitterの方にお願いします。</p>
    </div>
  );
}

export default Footer;
