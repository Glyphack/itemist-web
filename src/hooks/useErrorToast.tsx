import { useToast } from '@chakra-ui/toast'
import { useEffect } from 'react'
import { instance } from '../api'

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
    title,
    description: detail,
    status: 'error',
    duration: 900000,
    isClosable: true,
  })
}
