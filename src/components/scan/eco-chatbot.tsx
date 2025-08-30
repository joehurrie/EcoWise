'use client';

import { ecoChatbot } from '@/ai/flows/eco-chatbot';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/hooks/use-toast';
import type { EcoChatbotInput } from '@/types/eco-chatbot';
import { cn } from '@/lib/utils';
import { Leaf, Loader2, Send, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

type Message = {
  role: 'user' | 'bot';
  content: string;
};

export function EcoChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          role: 'bot',
          content: 'Hi! I can help you make environmentally friendly shopping choices. Ask me anything!',
        },
      ]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    // Scroll to bottom when new messages are added
    if (scrollAreaRef.current) {
        const viewport = scrollAreaRef.current.querySelector('div');
        if (viewport) {
            viewport.scrollTop = viewport.scrollHeight;
        }
    }
  }, [messages]);


  const handleSendMessage = async () => {
    const userMessage = inputValue.trim();
    if (!userMessage || isLoading) return;

    const newUserMessage: EcoChatbotInput = { message: userMessage };

    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setInputValue('');
    setIsLoading(true);

    try {
      const result = await ecoChatbot(newUserMessage);
      setMessages((prev) => [...prev, { role: 'bot', content: result.reply }]);
    } catch (error) {
      console.error('Error with chatbot:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Could not get a response from the chatbot.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <Button
        className="fixed bottom-6 right-6 h-16 w-16 rounded-full bg-primary shadow-lg hover:bg-primary/90"
        onClick={() => setIsOpen(true)}
        title="Chat with EcoBot"
      >
        <Leaf className="h-8 w-8" />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-6 right-6 w-80 h-[28rem] flex flex-col shadow-2xl z-50">
      <CardHeader className="flex flex-row items-center justify-between bg-muted/50">
        <div className="flex items-center gap-2">
            <div className="p-2 bg-primary/10 rounded-md">
                <Leaf className="w-5 h-5 text-primary" />
            </div>
            <CardTitle className="text-base font-headline">Eco Decision Chatbot</CardTitle>
        </div>
        <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => setIsOpen(false)}>
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="flex-1 p-4 overflow-hidden">
        <ScrollArea className="h-full" ref={scrollAreaRef}>
          <div className="space-y-4 pr-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  'flex items-end gap-2 text-sm',
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                )}
              >
                {message.role === 'bot' && (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0">
                    <Leaf className="h-5 w-5" />
                  </div>
                )}
                <div
                  className={cn(
                    'max-w-[80%] rounded-lg px-3 py-2',
                    message.role === 'user'
                      ? 'rounded-br-none bg-primary text-primary-foreground'
                      : 'rounded-bl-none bg-muted'
                  )}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-end gap-2 justify-start">
                 <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0">
                    <Leaf className="h-5 w-5" />
                  </div>
                <div className="max-w-[80%] rounded-lg px-3 py-2 rounded-bl-none bg-muted">
                    <Loader2 className="h-4 w-4 animate-spin" />
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter className="p-2 border-t">
        <div className="flex w-full items-center space-x-2">
            <Input
            id="message"
            placeholder="Ask about eco choices..."
            className="flex-1"
            autoComplete="off"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            disabled={isLoading}
            />
            <Button type="submit" size="icon" onClick={handleSendMessage} disabled={isLoading || !inputValue}>
                <Send className="h-4 w-4" />
                <span className="sr-only">Send</span>
            </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
