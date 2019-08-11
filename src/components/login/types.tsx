import { FormEvent } from "react"
import { ReplaceProps, BsPrefixProps } from "react-bootstrap/helpers"
import { FormControlProps } from "react-bootstrap"
import { ICredentials } from "../../models/Credentials"

export interface IProps {
  login: Function
}
export interface IInputChangeEvent extends FormEvent<ReplaceProps<"input",
  BsPrefixProps<"input"> & FormControlProps>> { }