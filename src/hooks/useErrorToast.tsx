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
        console.log(error.response.status)
        handleResError(toast, error)

        return error
      }
    )
  }, [toast])
}

const handleResError = (toast: any, error: any) => {
  let description: string

  if (error.response.detail) {
    description = error.response.detail
  } else if (error.response.status === 401) {
    description = 'لطفا با حساب کاربری وارد شوید!'
  } else {
    description = 'مشکلی پیش اومده'
  }

  toast({
    description: description,
    title: 'خطا',
    status: 'error',
    duration: 900000,
    isClosable: true,
  })
}
