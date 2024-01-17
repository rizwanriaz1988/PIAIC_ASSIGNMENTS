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
  
  username: z.string().min(1,{
    message: "Username required"}),

  password: z.string().min(4, {
    message: "Password is Required",
  }),

})


  ;

function Login() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
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

      <div className="items-center flex flex-col  bg-slate-950 rounded-md px-6 gap-4 py-4 border-slate-700 border">
        <h1 className="text-yellow-400 text-3xl">Login</h1>
        {/*====================== Main Div for working ====================*/}
        {/*============================= Start ============================*/}

        <div className="mx-auto w-full max-w-[550px] ">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Username"  {...field} />
                    </FormControl>
                    <FormMessage />
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
              
              <div className="flex justify-center pt-4">

                <Button type="submit" className="p-4 w-full hover:bg-slate-600">Login</Button>
              </div>
            </form>
          </Form>
          <div className=" mt-8 flex items-center gap-3 flex-col">
            <div>
              <h6 className="text-white text-xs">Don't have an account? &nbsp;<Link href="/contact-us" className="text-yellow-600 hover:text-yellow-400">Sign Up</Link></h6>
            </div>
            <div>
              <h6 className="text-white text-xs">Forgot Password? &nbsp;<Link href="/contact-us/forgot" className="text-yellow-600 hover:text-yellow-400">Click Here</Link></h6>
            </div>
          </div>
        </div>

        {/*============================== End =============================*/}
        {/*====================== Main Div for working ====================*/}
      </div>
    </div>
  );
}

export default Login;