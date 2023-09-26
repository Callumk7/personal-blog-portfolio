"use client";

import clsx from "clsx";
import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { Button } from "../ui/Button";
import { Label } from "../ui/Label";
import { useValidForm } from "@/hooks/useValidForm";

export function ContactForm() {
  const {
    handleSubmit,
    name,
    handleNameChange,
    email,
    handleEmailChange,
    message,
    handleMessageChange,
    errors,
    isPending,
    isError,
    isResolved,
  } = useValidForm();

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-lg mx-auto flex-col gap-y-3">
      <Label htmlFor="name">Your Name</Label>
      <Input placeholder="Your Name" value={name} id="name" onChange={handleNameChange} />
      {errors.name && (
        <Label htmlFor="name" className="font-sans text-sm text-red-300">
          {errors.name.message}
        </Label>
      )}

      <Label htmlFor="email">Your Email</Label>
      <Input
        placeholder="Your Email"
        value={email}
        id="email"
        onChange={handleEmailChange}
      />
      {errors.email && (
        <Label htmlFor="email" className="font-sans text-sm text-red-300">
          {errors.email.message}
        </Label>
      )}

      <Label htmlFor="message">Your Message</Label>
      <TextArea
        placeholder={isResolved ? "Message sent! Send another?" : "Your Message"}
        value={message}
        id="message"
        onChange={handleMessageChange}
      />
      {errors.message && (
        <Label htmlFor="message" className="font-sans text-sm text-red-300">
          {errors.message.message}
        </Label>
      )}
      <Button intent={isPending ? "secondary" : "primary"} disabled={isPending}>
        {isPending ? "sending.." : "Send"}
      </Button>
    </form>
  );
}

const Input = ({ className, type, ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      type={type ? type : "text"}
      className={clsx(
        className,
        "ring-offset-background focus-visible:ring-ring mb-2 bg-background-light px-4 py-2 font-mono text-dark focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-2"
      )}
      {...props}
    />
  );
};

const TextArea = ({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <textarea
      rows={15}
      className={clsx(
        className,
        "ring-offset-background  focus-visible:ring-ring bg-background-light px-4 py-2 font-mono text-dark focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-2"
      )}
      {...props}
    />
  );
};
