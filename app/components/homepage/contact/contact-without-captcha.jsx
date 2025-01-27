"use client";
// @flow strict
import { isValidEmail } from '@/utils/check-email';
import { useState } from 'react';
import { TbMailForward } from "react-icons/tb";
import { toast } from 'react-toastify';

function ContactWithoutCaptcha() {
  const [input, setInput] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [error, setError] = useState({
    email: false,
    required: false,
  });
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const checkRequired = () => {
    if (input.email && input.message && input.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.email || !input.message || !input.name) {
      setError({ ...error, required: true });
      return;
    }
  
    try {
      const response = await fetch('https://portfolio-hbv-backend.vercel.app/api/telegram', { // Alterado para /api/telegram
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: input.name,
          email: input.email,
          message: input.message,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Erro ao enviar a mensagem');
      }
  
      setFeedbackMessage('Mensagem enviada com sucesso!');
      setInput({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      setFeedbackMessage(error.message || 'Erro ao enviar a mensagem');
    }
  };

  return (
    <div className="">
      <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
        Entre em contato comigo
      </p>
      <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
        <p className="text-sm text-[#d3d8e8]">
          {"Não hesite em entrar em contato comigo. Estou aberto a oportunidades de trabalho que estejam alinhadas com minhas habilidades e interesses."}
        </p>
        <div className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-base">Seu Nome: </label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              type="text"
              maxLength="100"
              required={true}
              onChange={(e) => setInput({ ...input, name: e.target.value })}
              onBlur={checkRequired}
              value={input.name}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base">Seu Email: </label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              type="email"
              maxLength="100"
              required={true}
              value={input.email}
              onChange={(e) => setInput({ ...input, email: e.target.value })}
              onBlur={() => {
                checkRequired();
                setError({ ...error, email: !isValidEmail(input.email) });
              }}
            />
            {error.email &&
              <p className="text-sm text-red-400">Por favor, forneça um email válido!</p>
            }
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base">Sua Mensagem: </label>
            <textarea
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              maxLength="500"
              name="message"
              required={true}
              onChange={(e) => setInput({ ...input, message: e.target.value })}
              onBlur={checkRequired}
              rows="4"
              value={input.message}
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            {error.required &&
              <p className="text-sm text-red-400">
                Todos os campos são obrigatórios!
              </p>
            }
            <button
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
              role="button"
              onClick={handleSendMessage}
            >
              <span>Enviar Mensagem</span>
              <TbMailForward className="mt-1" size={18} />
            </button>
            {feedbackMessage && (
              <p className="text-sm text-green-400">{feedbackMessage}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactWithoutCaptcha;