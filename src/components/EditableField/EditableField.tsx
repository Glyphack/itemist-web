import React, { useState } from 'react'
import { Editable, EditablePreview, EditableInput } from '@chakra-ui/core'

import { EditableControls, EditableControlsProps } from './EditableControls'
import { api } from '../../api'

type EditableFieldProps = {
  defaultTradeUrl: string
}

export function EditableField({ defaultTradeUrl }: EditableFieldProps) {
  const [tradeUrl, setTradeUrl] = useState(defaultTradeUrl)

  return (
    <Editable
      textAlign="center"
      defaultValue={defaultTradeUrl}
      fontSize="2xl"
      isPreviewFocusable={false}
      submitOnBlur={false}
      onSubmit={() => api.put('/profile', tradeUrl)}
      value={tradeUrl}
      onChange={newUrl => setTradeUrl(newUrl)}
    >
      {(props: EditableControlsProps) => (
        <>
          <EditablePreview />
          <EditableInput />
          <EditableControls {...props} />
        </>
      )}
    </Editable>
  )
}
