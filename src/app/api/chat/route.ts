import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

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

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()
    
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages
      ],
    })

    // Make sure we have a response
    if (!completion.choices[0]?.message) {
      throw new Error('No response from OpenAI')
    }

    // Return the message directly
    return Response.json(completion.choices[0].message)
  } catch (error) {
    console.error('Error in chat API:', error)
    return Response.json(
      { 
        error: 'Failed to process request',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
} 