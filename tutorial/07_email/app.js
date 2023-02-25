const form = document.querySelector('#contact-form')
const dimm = document.querySelector('.dimm')
const modal = document.querySelector('.modal')

function sendEmail() {
  form.addEventListener('submit', function (event) {
    event.preventDefault()
    this.contact_number.value = (Math.random() * 100000) | 0

    dimm.classList.add('active')

    emailjs.sendForm('service_e8j4p91', 'template_bpiokrp', this).then(
      function () {
        console.log('SUCCESS!')
        modal.classList.add('active')
      },
      function (error) {
        console.log('FAILED...', error)
      }
    )
  })
}

sendEmail()
