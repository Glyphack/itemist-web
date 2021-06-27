import React from 'react'
import { Tr, Td } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'
import { Schemas } from '../../api/schemas'

type HistoryRowProps = {
  productHistory: Schemas.History
}

export function HistoryProductRow({ productHistory }: HistoryRowProps) {
  const history = useHistory()

  const handleClick = () => {
    history.push(`/payment/history/${productHistory.orderId}`, { productHistory })
  }

  return (
    <Tr borderTop="1px" borderColor="gray.200" cursor="pointer" onClick={handleClick}>
      <Td textAlign="right">{productHistory.orderId}</Td>
      <Td isNumeric>{productHistory.amount}</Td>
      <Td>{productHistory.status}</Td>
    </Tr>
  )
}
