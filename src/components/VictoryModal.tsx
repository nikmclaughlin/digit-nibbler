import {
  Footer,
  Header,
  Heading,
  IconButton,
  Modal,
  ModalContent,
  PixelIcon,
  Spacer,
  Text,
} from 'nes-ui-react'

interface VictoryModalProps {
  isOpen?: boolean
  onClose?: () => void
}

export default function VictoryModal({ isOpen, onClose }: VictoryModalProps) {
  return (
    <Modal open={isOpen} onClose={() => onClose}>
      <Header>
        <Spacer />
        <Heading dense>You Win!</Heading>
        <Spacer />
        <IconButton color="error" size="small" onClick={() => onClose}>
          <PixelIcon name="pixelicon-close" size="small" />
        </IconButton>
      </Header>
      <ModalContent>
        This is written inside of a &lt;ModalContent&gt; component just to keep
        the correct distance to all sides of the modal: The &lt;Header&gt; which
        is above and the &lt;Footer&gt; which is holding the action buttons.
      </ModalContent>
      <Footer>
        <IconButton color="error" onClick={() => onClose}>
          <PixelIcon name="pixelicon-close" size="small" />
          <Text size="small">Cancel</Text>
        </IconButton>
        <Spacer />
        <IconButton color="success" onClick={() => onClose}>
          <Text size="small">Accept</Text>
          <PixelIcon name="pixelicon-checkmark" size="small" />
        </IconButton>
      </Footer>
    </Modal>
  )
}
