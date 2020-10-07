import React from 'react'
import { Editable, EditablePreview, EditableInput } from '@chakra-ui/core'

import { EditableControls, EditableControlsProps } from './EditableControls'

export function EditableField() {
  return (
    <Editable
      textAlign="center"
      defaultValue="Steam Trade URL"
      fontSize="2xl"
      isPreviewFocusable={false}
      submitOnBlur={false}
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
