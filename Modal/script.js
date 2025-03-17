'use strict';
//page elements
const bntsShowModal = document.querySelectorAll('.show-modal')
const overlay = document.querySelector('.overlay')
const modal = document.querySelector('.modal')
const btnCloseModal = document.querySelector('.close-modal')


const openModal = () => {
   modal.classList.remove('hidden')
   overlay.classList.remove('hidden')
}

const closeModal = () => {
   modal.classList.add('hidden')
   overlay.classList.add('hidden')
}

bntsShowModal.forEach((b) => b.addEventListener('click', openModal))

btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', (e) => {

   if (e.key === 'Escape' || !modal.classList.contains('hidden')) {
      closeModal();
   }
})

