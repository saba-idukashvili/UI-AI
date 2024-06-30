"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { SendIcon } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";
import { Input } from "../ui/input";
import { PriceCard } from "./price-card";

export function Chat() {
  const [message, setMessage] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const [userMsg, setUserMsg] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<{ user: string; bot: string }[]>([]);
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API!;
  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  const startChat = async () => {
    setUserMsg(message);
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const result = await chatSession.sendMessage(
      "you are a bot and your job is to tell me the prices of cryptocurrencies and you cant say anything other than price so now tell me the price of " + message + " in only one word and also must be in dollars and you must use dollar!"
    );

    const botResponse = await result.response.text();

    setResponse(botResponse);
    setChatHistory((prev) => [
      ...prev,
      { user: message, bot: botResponse },
    ]);
    setMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      startChat();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      <h1 className="text-4xl font-bold text-center my-4">Crypto AI</h1>
      <div className="flex-1 overflow-auto md:p-4">
        <div className="space-y-4">
          {chatHistory.map((chat, index) => (
            <div key={index}>
              <div className="flex items-start gap-3">
                <Avatar className="w-8 h-8 border">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>YS</AvatarFallback>
                </Avatar>
                <div className="bg-muted rounded-lg p-3 max-w-[70%]">
                  <p className="text-sm">{chat.user}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 mt-2 justify-end">
                <div className="rounded-lg">
                  <PriceCard price={chat.bot} name={chat.user}/>
                </div>
                <Avatar className="w-8 h-8 border">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-background fixed bottom-2 w-full pr-6 md:w-[500px] lg:w-[1200px] border-muted lg:px-4 lg:py-2 flex items-center gap-2">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Type in the name of cryptocurrency"
          className="flex-1 rounded-lg focus:ring-0 focus:outline-none"
        />
        <Button
          onClick={startChat}
          size="icon"
          className="rounded-lg flex items-center justify-center"
        >
          <SendIcon className="w-5 h-5" />
          <span className="sr-only">Send</span>
        </Button>
      </div>
    </div>
  );
}
