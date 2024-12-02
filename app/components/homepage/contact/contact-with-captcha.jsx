"use client";
// @flow strict
import { isValidEmail } from '@/utils/check-email';
import axios from 'axios';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { TbMailForward } from "react-icons/tb";
import { toast } from 'react-toastify';

function ContactWithCaptcha() {
  const [input, setInput] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [captcha, setCaptcha] = useState(null);
  const [error, setError] = useState({
    email: false,
    required: false,
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError({ email: false, required: false });

    if (!captcha) {
      toast.error('Please complete the captcha!');
      setLoading(false);
      return;
    }

    if (!input.name || !input.email || !input.message) {
      setError({ ...error, required: true });
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/telegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: `Nome: ${input.name}\nEmail: ${input.email}\nMensagem: ${input.message}`,
        }),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar a mensagem');
      }

      toast.success('Mensagem enviada com sucesso!');
      setInput({ name: '', email: '', message: '' });
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Seu Nome"
        value={input.name}
        onChange={(e) => setInput({ ...input, name: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Seu Email"
        value={input.email}
        onChange={(e) => setInput({ ...input, email: e.target.value })}
        required
      />
      <textarea
        placeholder="Sua Mensagem"
        value={input.message}
        onChange={(e) => setInput({ ...input, message: e.target.value })}
        required
      />
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        onChange={(code) => setCaptcha(code)}
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Enviando...' : 'Enviar Mensagem'}
        <TbMailForward />
      </button>
      {error.required && <p>Todos os campos são obrigatórios!</p>}
    </form>
  );
}

export default ContactWithCaptcha;