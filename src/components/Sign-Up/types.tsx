import { FormEvent } from 'react'
import { ReplaceProps, BsPrefixProps } from 'react-bootstrap/helpers'
import { FormControlProps } from 'react-bootstrap'
import { RouteComponentProps } from 'react-router-dom'
import { INewUser, ILoginCredentials } from '../../common-types/user'

export interface IProps extends RouteComponentProps {
  addUser: (user: INewUser) => void,
  login: (creds: ILoginCredentials) => void
}
export interface IInputChangeEvent extends FormEvent<ReplaceProps<'input',
  BsPrefixProps<'input'> & FormControlProps>> { }