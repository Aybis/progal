import { useState } from 'react';
import { Modal, ModalMessage } from '../../Components/atoms';
import Layout from '../../Layouts/Layout';

export default function Index() {
  const [showModal, setshowModal] = useState(false);
  const [showModalMessage, setshowModalMessage] = useState(false);

  return (
    <Layout textHeading="Dashboard">
      <div className="relative grid">
        <button onClick={() => setshowModal(true)}>showModal</button>
        <button onClick={() => setshowModalMessage(true)}>
          show Modal Mesage
        </button>
      </div>
      <Modal onClose={(arg) => setshowModal(arg)} isShow={showModal}>
        Testing Modals
      </Modal>

      <ModalMessage
        isShow={showModalMessage}
        typeModal="assign"
        onClose={(arg) => setshowModalMessage(arg)}>
        Testing Modals Message
      </ModalMessage>
    </Layout>
  );
}
