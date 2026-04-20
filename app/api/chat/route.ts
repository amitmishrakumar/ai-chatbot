// import { streamText, UIMessage, convertToModelMessages } from "ai";
// import { google } from "@ai-sdk/google";

// export async function POST(req: Request) {
//   const { messages }: { messages: UIMessage[] } = await req.json();

//   const result = streamText({
//     model: google("gemini-2.0-flash"),
    
//     messages:await convertToModelMessages(messages),
//   });

//   return result.toUIMessageStreamResponse(); 
// }






// import { streamText, UIMessage, convertToModelMessages } from 'ai';
// import { groq } from "@ai-sdk/groq";

// export async function POST(req: Request) {
//   const { messages }: { messages: UIMessage[] } = await req.json();

//   const result = streamText({
//     model: groq("llama3-8b-8192"),
//     messages: await convertToModelMessages(messages),
//   });

//   return result.toUIMessageStreamResponse();
// }








import { streamText, UIMessage, convertToModelMessages } from 'ai';
import { groq } from '@ai-sdk/groq';

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: groq("llama-3.3-70b-versatile"), // ✅ working model
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}