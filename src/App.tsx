import { useState } from "react"
import { Modal } from "./cmps/modal/Modal"

export const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(true)
  const modalBoxs = ['1-9 lines', '10-99 lines', '100+ lines']

  const toggleModal = () => setIsModalOpen(!isModalOpen)

  return (
    <>
      {isModalOpen && <Modal boxs={modalBoxs} closeModal={toggleModal} />}
      {!isModalOpen && <button onClick={toggleModal}>Open modal</button>}
    </>
  )
}
