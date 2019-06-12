import React from "react";

export const Status = props => {
  if (props.status === "won") return "You win! :D";
  if (props.status === "lost") return "You lose :/";
  return `Guess a letter or word! ${props.remaining} remaining.`;
};
