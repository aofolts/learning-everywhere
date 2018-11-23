import React from 'react'
import css from '../less/form-contact.module.less'

const ContactForm = () => {
  return (
    <form id='contactForm' name='contact' method='post' className={css.form} data-netlify='true' action='/submission' data-netlify-honeypot='honeypot'>
      <div className={css.field}>
        <label htmlFor='contactFormNameField' hidden>Your Name</label>
        <input 
          id='contactFormNameField' 
          type='text'
          name='name'
          placeholder='Name'
          className={css.input}
        />
      </div>
      <div className={css.field}>
        <label htmlFor='contactFormNameField' hidden>Your Name</label>
        <input 
          id='contactFormNameField' 
          type='text'
          name='email'
          placeholder='Email'
          className={css.input}
        />
      </div>
      <div className={css.field}>
        <label htmlFor='contactFormNameField' hidden>Your Name</label>
        <textarea 
          id='contactFormNameField' 
          placeholder='Your message...'
          name='message'
          className={css.textarea}
        />
      </div>
      <input type="hidden" name="form-name" value="contact"/>
      <input type='hidden' name="honeypot"/>
      <button type='submit' className={['primaryButton',css.submit].join(' ')}>Send it</button>
    </form>
  )
}

export default ContactForm