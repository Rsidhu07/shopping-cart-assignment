import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Portal from './Portal';
import css from './Modal.module.css'

const Modal = ({ usePortal = true, children, title='', onClose }) => {
  const [portalRoot, setPortalRoot] = useState(null);
  useEffect(()=>{
    const portalRootEl = document.getElementById('portal-root');
   setPortalRoot(portalRootEl)
  //  console.log('portalRoot********', {portalRootEl})
  },[]);

  const header = (
    <header className={css.header}>
      <div className={css.headerTitle}>{title}</div>
      <div className={css.modalCloseBtn} onClick={onClose}> X </div>
    </header>
  )
  return (
    usePortal ?
    (portalRoot &&
      <Portal portalRoot={portalRoot}>
        <div className={css.ModalContainer}>
          {header}
          <div className={css.contentContainer}>{children}</div>   
        </div>
      </Portal> ):
      <div className={css.ModalContainer}>
        <div className={css.contentContainer}>{children}</div>   
      </div>
  )
}

Modal.propTypes = {}

export default Modal
