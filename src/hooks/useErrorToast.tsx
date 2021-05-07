import { useToast } from '@chakra-ui/toast'
import React, { useEffect } from 'react'
import { instance } from '../api'
import { ErrorToast } from '../components/ErrorToast'

/**
 * Shows a toast whenever an api response is an error
 */
export const useErrorToast = () => {
  const toast = useToast()

  useEffect(() => {
    instance.interceptors.response.use(
      response => {
        return response
      },
      error => {
        handleResError(toast, error)
        return error
      }
    )
  }, [toast])
}

const handleResError = (toast: any, error: any) => {
  let errorData = error.response.data
  let title: string
  let detail: string

  if (errorData.type) {
    title = errorData.title
    detail = errorData.detail
  } else {
    title = 'خطا'
    detail = 'مشکلی پیش اومده!'
  }

  toast({
    render: ({ onClose }: { onClose: any }) => (
      <ErrorToast title={title} detail={detail} onClose={onClose} />
    ),
  })
}
