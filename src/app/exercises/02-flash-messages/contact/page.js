'use client';
import React from 'react';
import {ToastContext} from '../../../../components/ToastProvider';
import { useRouter } from 'next/navigation';

function ContactPage() {
  const {createToast} = React.useContext(ToastContext)
  const router = useRouter()

  function handleFormSubmit(e) {
    e.preventDefault()

    // TODO: Send the data to the server

    router.push('/exercises/02-flash-messages')

    createToast(
      "Your message was received. We'll get back to you shortly!",
      'success'
    )
  }

  return (
      <main>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="name">Name:</label>
          <input id="name" required={true} />

          <label htmlFor="message">Message:</label>
          <textarea id="message" />

          <button>Submit</button>
        </form>
      </main>
  );
}

export default ContactPage;
