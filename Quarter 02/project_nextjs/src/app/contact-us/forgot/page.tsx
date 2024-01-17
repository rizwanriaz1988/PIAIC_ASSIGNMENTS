"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

const FormSchema = z.object({
    pinCode: z.string().min(4, {
    message: "Code Incorrect",
  }),
  email: z.string().email("Email required"),

  password: z.string().min(4, {
    message: "Password is Required",
  }),
  confirm: z.string().min(4, {
    message: "Message is Required",
  }),
})
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"]
  })

  ;

function Forgot() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pinCode:"",
      email: "",
      password: "",
      confirm: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("🚀 ~ onSubmit ~ data:", data);

    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="  h-full w-screen justify-center flex my-10">

      <div className="items-center flex flex-col  bg-slate-950 rounded-md px-6 gap-4 py-4 shadow-md shadow-gray-600 ">
        <h1 className="text-yellow-400 text-2xl">Recover Password</h1>
        {/*====================== Main Div for working ====================*/}
        {/*============================= Start ============================*/}

        <div className="mx-auto w-full max-w-[550px] ">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              <FormField
                control={form.control}
                name="pinCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Pin Code</FormLabel>
                    <FormMessage />
                    <FormControl>
                      <Input placeholder="Enter 04 Letter Code" {...field} className="rounded-sm" />
                    </FormControl>
                  </FormItem>
                )}
              />
             
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Password</FormLabel>
                    <FormControl>
                      <Input placeholder="password" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirm"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Confirm Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Re-Enter Password" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-center pt-4">

                <Button type="submit" className="w-full hover:bg-slate-600">Change Password</Button>
              </div>
            </form>
          </Form>
        </div>

        {/*============================== End =============================*/}
        {/*====================== Main Div for working ====================*/}
      </div>
    </div>
  );
}

export default Forgot;