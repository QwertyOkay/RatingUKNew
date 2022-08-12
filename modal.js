(() => {
    const refs = {
      openModalBtn2: document.querySelector('[data-modal-open2]'),
      openModalBtn3: document.querySelector('[data-modal-open3]'),
      openModalBtn4: document.querySelector('[data-modal-open4]'),
      openModalBtn5: document.querySelector('[data-modal-open5]'),
      
      closeModalBtn2: document.querySelector('[data-modal-close2]'),
       closeModalBtn3: document.querySelector('[data-modal-close3]'),
       closeModalBtn4: document.querySelector('[data-modal-close4]'),
       closeModalBtn5: document.querySelector('[data-modal-close5]'),

      modal2: document.querySelector('[data-modal2]'),
      modal3: document.querySelector('[data-modal3]'),
      modal4: document.querySelector('[data-modal4]'),
      modal5: document.querySelector('[data-modal5]'),
    };

  refs.openModalBtn2.addEventListener('click', toggleModal2);
  refs.closeModalBtn2.addEventListener('click', toggleModal2);

  refs.openModalBtn3.addEventListener('click', toggleModal3);
  refs.closeModalBtn3.addEventListener('click', toggleModal3);

  refs.openModalBtn4.addEventListener('click', toggleModal4);
  refs.closeModalBtn4.addEventListener('click', toggleModal4);

  refs.openModalBtn5.addEventListener('click', toggleModal5);
  refs.closeModalBtn5.addEventListener('click', toggleModal5);
  
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

function toggleModal5() {
  refs.modal5.classList.toggle('is-hidden5');
}
  
  })();
