import { FormEvent } from 'react'
import { ReplaceProps, BsPrefixProps } from 'react-bootstrap/helpers'
import { FormControlProps } from 'react-bootstrap'
import { RouteComponentProps } from 'react-router-dom'

export interface ILoginProps extends RouteComponentProps<any> {
  login: Function  
}
export interface IInputChangeEvent extends FormEvent<ReplaceProps<'input',
  BsPrefixProps<'input'> & FormControlProps>> { }