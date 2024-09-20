"use client"

import { z } from "zod"


import { Button } from "../components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form"

import { Input } from "./ui/input"
import { useState } from "react"
import { ToastAction } from "../components/ui/toast"
import { useToast } from "@/hooks/use-toast"

const InitiateFormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

const InitiateForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mnqebqjq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          variant: "default",
          title: "Message sent!",
          description: "Thank you for your suggestion",
        });
        setFormData({
          name: "",
          subject: "",
          message: "",

        });
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "An unexpected error occurred. Please try again.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  };
  return (
    <div  className="">
      <form
        action="https://formspree.io/f/mnqebqjq"
        method="POST"
        onSubmit={handleSubmit}
        className="space-y-2 border border-muted  rounded-lg m-auto "
      >
        <div className="p-2 ">
          <label
            htmlFor="subjcet"
            className="block text-sm  text-tp"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            className="p-2 w-full mt-1 bg-muted border-green-300 focus:ring-4 file:ring-2 border border-secondary ring-muted rounded-md outline-0 outline-slate-300 text-ts active:ring-2"
          />
        </div>
        <div className="p-2 ">
          <label
            htmlFor="name"
            className="block text-sm  text-tp"
          >
            Name
          </label>
          <input
            type="name"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Email"
            required
            className="p-2 w-full mt-1  bg-muted border-green-300 focus:ring-4 file:ring-2 border border-secondary ring-muted rounded-md outline-0 outline-slate-300 text-ts active:ring-2"
          />
        </div>
        <div className="p-2 h-22">
          <label
            htmlFor="message"
            className="block text-sm text-tp"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            required
            rows={4}
            className="p-2 w-full mt-1  bg-muted border-green-300 focus:ring-4 file:ring-2 border border-secondary ring-muted rounded-md outline-0 outline-slate-300 text-ts active:ring-2"
          />
        </div>

        <div className="p-2 z-50">
          <Button
            type="submit"
            className="bg-accent hover:opacity-75 transition-all "
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default InitiateForm;