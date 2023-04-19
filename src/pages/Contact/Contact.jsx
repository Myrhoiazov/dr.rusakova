import { useState } from 'react';
import Container from 'components/container';
import { contactList } from './contactList';
import s from './Contact.module.scss';
import Modal from 'components/modal';
import Button from 'components/Button';

const Contact = () => {
  const [isOpenModal, setIasOpenModal] = useState(false);

  const handleOpenModal = () => {
    setIasOpenModal(!isOpenModal);
  };

  return (
    <>
      <Container>
        <div className={s.inner_wrapper}>
          <div className={s.data}>
            <h1 className={s.title}>Contacts</h1>
            <p className={s.text}>
              Want to know more or just chat? <br /> You are welcome!
            </p>
            <Button onClick={handleOpenModal}>
              Send message
            </Button>
            <ul className={s.socialList}>
              {contactList.map(({name, icon, link}) => (
                <li key={name} className={s.socialIcon}><a href={link} target='blank'>{icon}</a></li>
              ))}
            </ul>
          </div>
        </div>
        {isOpenModal && (
          <Modal onClose={handleOpenModal}>
            <h1>Sorry soon i do it ...</h1>
          </Modal>
        )}
      </Container>
    </>
  );
};

export default Contact;
