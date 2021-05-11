export default function initModal(){

  const btnOpenModal = document.querySelector('[data-modal="openModal"]');
  const btnCloseModal = document.querySelector('[data-modal="close"]');
  const activeModal = document.querySelector('[data-modal="container"]');

  if(btnOpenModal && btnCloseModal && activeModal){

    function toggleModal(event){
      event.preventDefault();
      activeModal.classList.toggle('active');
    }

    function closeModalOutside(event){
      if(event.target === this){
        toggleModal(event);
      }
    }

    btnOpenModal.addEventListener('click', toggleModal);
    btnCloseModal.addEventListener('click', toggleModal);
    activeModal.addEventListener('click', closeModalOutside);

  }

}
