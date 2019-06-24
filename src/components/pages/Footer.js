import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import IconButton from "@material-ui/core/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <BottomNavigation value="twitter">
      <a href="https://twitter.com/muchsalt1">
        <IconButton>
          <FontAwesomeIcon icon={faTwitter} color="#38A1F3" />
        </IconButton>
      </a>
      <p>お問い合わせはTwitterの方にお願いします。</p>
    </BottomNavigation>
  );
}

export default Footer;
