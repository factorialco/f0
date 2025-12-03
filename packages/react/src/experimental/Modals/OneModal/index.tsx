import { OneModal } from "./OneModal"
import { OneModalContent } from "./OneModalContent/OneModalContent"
import { OneModalFooter } from "./OneModalFooter/OneModalFooter"
import { OneModalHeader } from "./OneModalHeader/OneModalHeader"
import { useOneModal } from "./OneModalProvider"

type OneModalComponent = typeof OneModal & {
  Header: typeof OneModalHeader
  Content: typeof OneModalContent
  Footer: typeof OneModalFooter
}

const ComposedOneModal = OneModal as OneModalComponent

ComposedOneModal.Header = OneModalHeader
ComposedOneModal.Content = OneModalContent
ComposedOneModal.Footer = OneModalFooter

export { ComposedOneModal as OneModal, useOneModal }
