import { Table, Thead, Tr, Th, Tbody } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { api } from '../api'
import { Schemas } from '../api/schemas'
import { HistoryProductRow } from '../components/History/HistoryProductRow'
import { loadingState } from '../recoil/loading-state'

export function SellsHistory() {
  const [histories, setHistories] = useState<Schemas.History[] | null>(null)
  const setLoading = useSetRecoilState(loadingState)

  const renderHistoryRows = () => {
    return histories?.map(history => (
      <HistoryProductRow key={history._id} productHistory={history} />
    ))
  }

  useEffect(() => {
    const getHistories = async () => {
      setLoading({ isLoading: true })
      const response = await api.get('/payment/history')
      setLoading({ isLoading: false })
      const histories = response.data as Schemas.History[]
      return histories
    }

    getHistories().then(histories => setHistories(histories))
  }, [setLoading])

  if (!histories) return null

  return (
    <Table variant="unstyled" bgColor="gray.900" borderRadius={2}>
      <Thead>
        <Tr color="gray.400">
          <Th textAlign="right">سفارش ID</Th>
          <Th isNumeric>قیمت</Th>
          <Th>وضعیت سفارش</Th>
        </Tr>
      </Thead>
      <Tbody fontFamily="arial">{renderHistoryRows()}</Tbody>
    </Table>
  )
}
