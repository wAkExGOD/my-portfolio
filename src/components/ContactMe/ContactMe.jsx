import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MainBlockContainer, LoadingSpinner } from '../';
import styles from './ContactMe.module.scss';

export function ContactMe({ active }) {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const formSubmit = async (e) => {
    e.preventDefault();
    // const data = { name, email, subject };
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const serviceId = process.env.REACT_APP_SERVICE_ID;

    setLoading(true);

    emailjs.sendForm(serviceId, templateId, form.current, 'IA0DzW2EkyatKJzp1')
      .then((result) => {
        setLoading(false);
        console.log(result)
        alert('Message sent. I will get back to you shortly');
      }, (error) => {
        setLoading(false);
        console.log(error);
        alert('An error occurred. Please try again');
      });
  }

  return (
    <MainBlockContainer active={active}>
      <form ref={form} onSubmit={formSubmit} className={[styles['contact-me'], loading ? styles.loading : null].join(' ')}>
        <label className={styles.block} htmlFor="name">
          <input
            className={styles.input}
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            required
            autoFocus
          />
          <span className={styles.label}>Name</span>
        </label>
        <label className={styles.block} htmlFor="email">
          <input
            className={styles.input}
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            required
          />
          <span className={styles.label}>Email</span>
        </label>
        <label className={styles.block} htmlFor="subject">
          <textarea
            className={styles.input}
            id="subject"
            name="subject"
            placeholder="Subject"
            required
            rows="10"
            resize="none"
          ></textarea>
          <span className={styles.label}>Subject</span>
        </label>

        <label className={styles.block}>
          {loading ?
            <LoadingSpinner />
            : (
              <input
                type="submit"
                className={[styles.submit, styles.input].join(' ')}
                value="Ask me" />
            )}
        </label>
      </form>
    </MainBlockContainer>
  )
}