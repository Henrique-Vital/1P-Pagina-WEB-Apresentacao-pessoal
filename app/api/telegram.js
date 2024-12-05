import axios from 'axios';
import { NextResponse } from 'next/server';

const groupUsername = process.env.GROUP_USERNAME;
const botToken = process.env.TELEGRAM_BOT_TOKEN;

export async function POST(request) {
  const reqBody = await request.json();
  const message = reqBody.message;

  try {
    const response = await axios.post(`https://api.telegram.org/bot<YOUR_BOT_TOKEN>/sendMessage`, {
      chat_id: groupUsername,
      text: message,
    });

    return NextResponse.json({
      message: "Mensagem enviada com sucesso!",
      success: true,
    });
  } catch (error) {
    console.error("Erro ao enviar mensagem para o Telegram:", error.response ? error.response.data : error.message);
    return NextResponse.json({
      error: "Falha ao enviar a mensagem.",
      success: false,
    }, { status: 500 });
  }
}