const fname = document.querySelector("#Name");
const email = document.querySelector("#Email");
const phone = document.querySelector("#phoneNumber");
const message = document.querySelector("#Message");
const inputs = document.querySelectorAll("input");
// add event listener on form container...

const submit = document.querySelector("#form-contact");

submit.addEventListener("submit", (e) => {
  e.preventDefault(); // to prevent auto submission of form
  // formatting email template
  let emailTemplate = `
  <b>Name: </b>${fname.value}
  <br />
  <b>Email: </b>${email.value}
  <br />
  <b>Phone number: </b>${phone.value}
  <br />
  <b>Message: </b>${message.value}
  <br />
  `;

  // email code from smtp site...
  Email.send({
    SecureToken: "868ed47a-826f-4783-8dcd-ae1e2c6b7dc4",
    To: "codewithd034@gmail.com",
    From: "codewithd034@gmail.com",
    Subject: "New Contact form email from " + email.value,
    Body: emailTemplate,
  })
    .then((message) =>
      alert("Thank you for contacting, Submitted successfully")
    )
    .catch((err) => {
      alert("Sorry there was error in submitting form");
    });
  // to reset the input fields in the form after submitting
  submit.reset();
});
