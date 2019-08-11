import { FormEvent } from "react";
import { ReplaceProps, BsPrefixProps } from "react-bootstrap/helpers";
import { FormControlProps } from "react-bootstrap";

export interface IProps {
  addUser: Function
}
export interface IInputChangeEvent extends FormEvent<ReplaceProps<"input",
  BsPrefixProps<"input"> & FormControlProps>> { }