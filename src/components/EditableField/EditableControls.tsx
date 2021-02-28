import React from 'react'
import { ButtonGroup, IconButton, Flex } from '@chakra-ui/react'
import { HiCheck, HiX, HiPencilAlt } from 'react-icons/hi'

export type EditableControlsProps = {
  isEditing: boolean
  onSubmit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  onCancel: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  onEdit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export function EditableControls({ isEditing, onSubmit, onCancel, onEdit }: EditableControlsProps) {
  return isEditing ? (
    <ButtonGroup justifyContent="center" size="sm">
      <IconButton aria-label="confirm edit" icon={<HiCheck />} onClick={onSubmit} m={2} />
      <IconButton aria-label="cancel edit" icon={<HiX />} onClick={onCancel} m={2} />
    </ButtonGroup>
  ) : (
    <Flex justifyContent="center">
      <IconButton aria-label="edit field" size="sm" icon={<HiPencilAlt />} onClick={onEdit} />
    </Flex>
  )
}
