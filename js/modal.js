(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      openModalBtn2: document.querySelector('[data-modal-open2]'),
      openModalBtn3: document.querySelector('[data-modal-open3]'),
      openModalBtn4: document.querySelector('[data-modal-open4]'),
      
      closeModalBtn: document.querySelector('[data-modal-close]'),
      closeModalBtn2: document.querySelector('[data-modal-close2]'),
       closeModalBtn3: document.querySelector('[data-modal-close3]'),
       closeModalBtn4: document.querySelector('[data-modal-close4]'),

      modal: document.querySelector('[data-modal]'),
      modal2: document.querySelector('[data-modal2]'),
      modal3: document.querySelector('[data-modal3]'),
      modal4: document.querySelector('[data-modal4]'),
    };
  
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  refs.openModalBtn2.addEventListener('click', toggleModal2);
  refs.closeModalBtn2.addEventListener('click', toggleModal2);

  refs.openModalBtn3.addEventListener('click', toggleModal3);
  refs.closeModalBtn3.addEventListener('click', toggleModal3);

  refs.openModalBtn4.addEventListener('click', toggleModal4);
  refs.closeModalBtn4.addEventListener('click', toggleModal4);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
  }
  
    function toggleModal2() {
      refs.modal2.classList.toggle('is-hidden2');
  }

   function toggleModal3() {
      refs.modal3.classList.toggle('is-hidden3');
  }

  function toggleModal4() {
    refs.modal4.classList.toggle('is-hidden4');
}
  
  })();
