"use client"

import { zodResolver } from "@hookform/resolvers/zod"

import { z } from "zod"







import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { Button } from "@/components/ui/button"


const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

const FeedbackForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
          description: "Thank you for your feedback.",
        });
        setFormData({
          name: "",
          email: "",
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
    <main className="md:p-8  p-2 bg-primary ">
      <section className="pt-16 ">
        <div className="max-w-7xl  justify-center  m-auto rounded-xl border-rose-600 sm:flex sm:border-rose-600 md:border-blue-400 gap-2 lg:w-[70%] lg:flex-1 ">
          <div className="basis-1/2 backdrop-blur-sm flex flex-col justify-between border-four md:w-[40%] p-2 aspect-square  rounded-xl m-2">
            <h1 className="sm:text-4xl text-3xl font-medium tracking-tight lg:text-5xl text-tp font-bold ">
              I'd love to hear your thoughts on...
            </h1>
            <p className="z-10 rounded-xl h-14 text-sm text-tp p-2 backdrop-blur-sm">
              We're committed to providing the best possible experience. Your input is essential
            </p>
            <div className="rounded-xl backdrop-brightness-150 overflow-hidden bg-[url('https://plus.unsplash.com/premium_photo-1672046218038-e690de601156?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D')]  h-64 w-full bg-cover bg-no-repeat bg-bottom"></div>
          </div>
          <div className="basis-2/2 border border-accent md:w-[60%] aspect-square bg-gradient-to-r from-seven rounded-xl m-2 p-2 sm:w-[60%]">
            <h6 className="mb-1 p-2 text-tp text-xl font-semibold md:text-2xl md:font-medium tracking-tight">
              For Initiative
            </h6>

            <form
              action="https://formspree.io/f/mnqebqjq"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-4   m-auto max-w-4xl"
            >
              <div className="p-2">
                <label
                  htmlFor="name"
                  className="block text-sm  text-tp"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="p-2 w-full mt-1 border-green-300 focus:ring-4 file:ring-2 border border-secondary ring-muted rounded-md outline-0 outline-slate-300 text-ts active:ring-2"
                />
              </div>
              {/* <div className="p-2">
                  <label
                    htmlFor="mobile"
                    className="block text-sm  text-tp"
                  >
                    Mobile
                  </label>
                  <input
                    type="text"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter your mobile number"
                    required
                    className="p-2 w-full mt-1 border-green-300 focus:ring-4 file:ring-2 border border-secondary ring-muted text-sm rounded-md outline-0 outline-slate-300 text-ts active:ring-2"
                  />
                </div> */}

              <div className="p-2">
                <label
                  htmlFor="email"
                  className="block text-sm  text-tp"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="p-2 w-full mt-1  border-green-300 focus:ring-4 file:ring-2 border border-secondary ring-muted rounded-md outline-0 outline-slate-300 text-ts active:ring-2"
                />
              </div>
              <div className="p-2">
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
                  className="p-2 w-full mt-1  border-green-300 focus:ring-4 file:ring-2 border border-secondary ring-muted rounded-md outline-0 outline-slate-300 text-ts active:ring-2"
                />
              </div>

              <div className="p-2 z-50">

                <Button
                  type="submit"
                  className="bg-accent w-fit hover:opacity-75 p-3 rounded-md active:scale-95 transition-all "
                >
                  Send message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

    </main>
  );
};

export default FeedbackForm;