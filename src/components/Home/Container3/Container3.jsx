import React from "react";
import arrow from "../../../assets/arrow2.png";
import classes from "./Container3.module.css";

export default function Container3() {
  return (
    <div className={classes.wrapper}>
      <div></div>
      <p>TITLE LINE H2</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum
        augue sed tellus accumsan, nec congue quam lacinia. Duis ornare congue
        ante a facilisis. Vestibulum sed magna in ligula aliquam luctus non in
        ante. Nullam egestas, nunc at rutrum tincidunt, purus metus malesuada
        ante, at cursus massa turpis sit amet nulla. Quisque non ante quis lorem
        fermentum auctor sed sed ligula. Aenean turpis sapien, efficitur quis
        placerat at, facilisis bibendum erat. Aliquam quis mattis leo, sed
        egestas augue. Phasellus vitae vulputate nisi, vitae eleifend enim.
        Aenean rutrum tristique purus,
      </p>
      <p>
        Learn More <img src={arrow} alt="" />
      </p>
    </div>
  );
}