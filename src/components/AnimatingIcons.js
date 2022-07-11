import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpinner,
  faCircleNotch,
  faSync,
  faCog,
  faStroopwafel,
} from "@fortawesome/free-solid-svg-icons";

function AnimatingIcons() {
  return (
    <div className="fa-3x">
      <FontAwesomeIcon icon={faSpinner} pulse />
      &nbsp;
    </div>
  );
}
