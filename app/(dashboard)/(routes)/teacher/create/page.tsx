/* eslint-disable @typescript-eslint/no-misused-promises */
"use client";

import { z } from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const formSchema = z.object({
  title: z.string().min(3, { message: "Title is too short" })
});
const CreateCoursePage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: ""
    }
  });
  const router = useRouter();
  const { isSubmitting, isValid } = form.formState;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post("/api/courses", values);
      router.push(`/dashboard/courses/${response.data.id}/edit`);
      toast.success("Course created succesfully")
    } catch (error) {
      toast.error("oops something went wrong")
    }
  };
  return (
    <div className="max-w-5xl mx-auto w-[100%] flex md:items-center md:justify-center h-full p-6">
      <div>
        <h1 className="text-2xl">Name your Course</h1>
        <p className="">What would you like to name your course, don&apos;t worry</p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-8">
            <FormField control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor={field.name}>Course Title</FormLabel>
                  <FormControl>
                    <Input disabled={isSubmitting} placeholder="e.g 'Advanced Web Development'" {...field} />
                  </FormControl>
                  <FormDescription>What will you teach in this course</FormDescription>
                  <FormMessage>{form.formState.errors.title?.message}</FormMessage>
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Link href="/">
                <Button type="button" variant="ghost">Cancel</Button>
              </Link>
              <Button type="submit" disabled={!isValid || isSubmitting}>Continue</Button>
            </div>
          </form>
      </Form>
      </div>
    </div>
  );
};

export default CreateCoursePage;
