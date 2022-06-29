import { FC } from 'react'
import Button, { ButtonProps } from '../Button'
import Spinner from '../Spinner'

type Requirement = {
  requirement: boolean
  message: string
}
export interface TransactionButtonProps extends Omit<ButtonProps, 'disabled' | 'onClick'> {
  method: any
  args?: any[]
  name?: string
  requirements?: Requirement
}
const TransactionButton: FC<TransactionButtonProps> = ({
  method,
  args = [],
  name,
  requirements,
  ...rest
}) => {
  return (
    <Button
      disabled={
        (typeof requirements !== 'undefined' && requirements.requirement === false) ||
        method.state.status !== 'None'
      }
      onClick={() => {
        method.send(...args).then(() => {
          method.state.status === 'None' && method.resetState()
        })
      }}
      {...rest}
    >
      {typeof requirements !== 'undefined' && requirements.requirement === false ? (
        requirements.message
      ) : method.state.status === 'None' ? (
        name
      ) : (
        <Spinner />
      )}
    </Button>
  )
}

export default TransactionButton
