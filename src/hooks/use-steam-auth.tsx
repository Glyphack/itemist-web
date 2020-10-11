import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import Cookies from 'js-cookie'
import { api } from '../api'

import { userState } from '../recoil/user-state'

export const useSteamAuth = () => {
  const setUserState = useSetRecoilState(userState)

  // listen for response from steam
  useEffect(() => {
    window.addEventListener('message', event => {
      if (`${event.origin}/v1` !== process.env.REACT_APP_API_URL) return

      const { token, ok } = event.data
      if (ok) {
        Cookies.set('access_token', token)
        api.get('/profile').then(response => setUserState(response.data))
      }
    })
  }, [setUserState])

  const handleLogin = () => {
    const popupWindow = window.open(
      process.env.REACT_APP_API_URL + '/auth/steam',
      '_blank',
      'width=800, height=600'
    )
    if (popupWindow) popupWindow.focus()
  }

  return handleLogin
}
