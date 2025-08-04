import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { Plus, Send, ArrowRightLeft } from "lucide-react";
import NumberFlow from '@number-flow/react'

function Account() {
  const [saldo, setSaldo] = useState(0);

  return (
    <div className="relative flex justify-center items-center h-screen bg-neutral-950">
      <Card className="w-[320px] rounded-[20px] shadow-2xl">
        <CardHeader>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="https://avatars.githubusercontent.com/u/222522061?v=4&size=64" />
                <AvatarFallback>GB</AvatarFallback>
              </Avatar>
              <CardTitle>Gabriel Barbosa</CardTitle>
            </div>
            <ModeToggle />
          </div>
        </CardHeader>

        <CardContent>
          <CardDescription className="text-[12px]">
            Saldo Disponível
          </CardDescription>
          <NumberFlow 
            value={saldo}
            format={{
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 2,
            }} 
            locales="pt-BR"
            className="text-2xl font-bold"
            />
        </CardContent>

        <CardFooter className="flex justify-center gap-1">
          <Button
            variant="default"
            className="w-22 rounded-3xl"
            onClick={() => setSaldo(saldo + 0.01)}
          >
            <Plus />
            add
          </Button>
          <Button className="w-22 rounded-3xl">
            <Send />
            Send
          </Button>
          <Button variant="destructive" className="w-22 rounded-3xl" onClick={() => setSaldo(0)}>
            <ArrowRightLeft />
            Reset
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Account;
