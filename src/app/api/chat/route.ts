import { Configuration, OpenAIApi } from 'openai'
import { NextResponse } from 'next/server'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

const SYSTEM_PROMPT = `You are a helpful assistant for Naga Balm, a Cambodian company that produces traditional balms and remedies.
Your role is to help customers with product information, usage guidelines, and general inquiries.
Keep responses concise, friendly, and focused on Naga Balm products.

IMPORTANT: For any health-related questions or symptoms mentioned, always suggest relevant Naga Balm products that could help, while being clear that they should consult a healthcare professional for medical advice.

Available Products:
1. Traditional Naga Balm - Our signature product for muscle aches, headaches, and cold symptoms
2. Extra Strength Naga Balm - More potent formula for deep muscle pain and tension
3. Gentle Naga Balm - Milder formula suitable for sensitive skin and children
4. Naga Oil - Liquid form for easier application and massage

When responding:
1. Always mention specific products that are relevant to the user's query
2. Include brief usage instructions
3. Highlight the natural ingredients when relevant
4. Maintain a professional and helpful tone
5. If unsure about specific details, suggest contacting customer service`

interface Message {
  role: 'user' | 'assistant'
  content: string
}

interface ChatRequest {
  messages: Message[]
  language: 'en' | 'km'
}

const RESPONSES = {
  en: {
    muscle_pain: "For muscle pain, I recommend Naga Balm Fire. It provides deep, long-lasting heat that helps relieve muscle pain and improve circulation.",
    headache: "For headaches, try our Original Naga Balm. Its gentle formula is perfect for temple and forehead application.",
    purchase: "You can find Naga Balm products in major pharmacies across Cambodia, or order directly through our website.",
    difference: "Original Naga Balm provides gentle relief without intense heat, while Fire Balm offers stronger, longer-lasting heat for deep muscle pain.",
    default: "I'm here to help you learn about Naga Balm products. Feel free to ask about specific products or uses."
  },
  km: {
    muscle_pain: "សម្រាប់ការឈឺសាច់ដុំ ខ្ញុំសូមណែនាំ Naga Balm Fire។ វាផ្តល់នូវកម្តៅជ្រាលជ្រៅ និងយូរអង្វែង ដែលជួយបន្ធូរការឈឺចាប់សាច់ដុំ និងកែលម្អការរត់ឈាម។",
    headache: "សម្រាប់ការឈឺក្បាល សូមសាកល្បង Original Naga Balm របស់យើង។ រូបមន្តទន់ភ្លន់របស់វាល្អឥតខ្ចោះសម្រាប់ការប្រើប្រាស់នៅថ្ងាស និងថ្ងាស។",
    purchase: "អ្នកអាចរកទិញផលិតផល Naga Balm នៅឱសថស្ថានធំៗទូទាំងប្រទេសកម្ពុជា ឬបញ្ជាទិញដោយផ្ទាល់តាមរយៈគេហទំព័ររបស់យើង។",
    difference: "Original Naga Balm ផ្តល់ការបន្ធូរបន្ថយទន់ភ្លន់ដោយគ្មានកម្តៅខ្លាំង ខណៈដែល Fire Balm ផ្តល់កម្តៅខ្លាំង និងយូរជាងសម្រាប់ការឈឺចាប់សាច់ដុំជ្រាលជ្រៅ។",
    default: "ខ្ញុំនៅទីនេះដើម្បីជួយអ្នកស្វែងយល់អំពីផលិតផល Naga Balm។ សូមសួរអំពីផលិតផលជាក់លាក់ ឬការប្រើប្រាស់។"
  }
}

function getResponse(message: string, language: 'en' | 'km'): string {
  const lowerMessage = message.toLowerCase()
  
  if (lowerMessage.includes('muscle') || lowerMessage.includes('សាច់ដុំ')) {
    return RESPONSES[language].muscle_pain
  }
  if (lowerMessage.includes('headache') || lowerMessage.includes('ឈឺក្បាល')) {
    return RESPONSES[language].headache
  }
  if (lowerMessage.includes('buy') || lowerMessage.includes('purchase') || lowerMessage.includes('ទិញ')) {
    return RESPONSES[language].purchase
  }
  if (lowerMessage.includes('difference') || lowerMessage.includes('ភាពខុសគ្នា')) {
    return RESPONSES[language].difference
  }
  
  return RESPONSES[language].default
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()
    
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages
      ],
    })

    return new Response(JSON.stringify(completion.data))
  } catch (error) {
    console.error('Error in chat API:', error)
    return new Response(JSON.stringify({ error: 'Failed to process request' }), { status: 500 })
  }
} 