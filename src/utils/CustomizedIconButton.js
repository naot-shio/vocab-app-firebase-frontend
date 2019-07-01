import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({
  title,
  placement,
  onClick,
  className,
  color,
  edge,
  ariaLabel,
  icon
}) => (
  <Tooltip title={title} placement={placement}>
    <IconButton
      onClick={onClick}
      className={className}
      edge={edge}
      aria-label={ariaLabel}
    >
      <FontAwesomeIcon icon={icon} color={color} />
    </IconButton>
  </Tooltip>
);
