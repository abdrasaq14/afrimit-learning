/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-misused-promises */
"use client";
import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { ImageIcon, Pencil, PlusCircle } from "lucide-react";
import type { Course, Attachment } from "@prisma/client";
import Image from "next/image";
import { FileUpload } from "@/components/file-upload";

interface AttachmentFormProps {
  courseId: string;
  initialData: Course & { attachments: Attachment[] };
}
const formSchema = z.object({
  url: z.string().min(1)
});
export const CourseAttachmentForm = ({
  initialData,
  courseId
}: AttachmentFormProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();
  const toggleEditing = () => {
    setIsEditing((prev) => !prev);
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(`/api/courses/${courseId}`, values);
      toast.success("Course title updated");
      toggleEditing();
      router.refresh();
    } catch (error) {
      toast.error("something went wrong");
      console.error(error);
    }
  };
  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Course attachments
        <Button variant="ghost" onClick={toggleEditing}>
          {isEditing ? (
            "Cancel"
          ) : (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Add a file
            </>
          )}
        </Button>
      </div>
      {isEditing ? (
        <div className="">
          <FileUpload
            endpoint="courseImage"
            onChange={(url) => {
              if (url) {
                onSubmit({ url });
              }
            }}
          />
          <div className="text-xs text-muted-foreground mt-4">
            16:9 aspect ratio recommended
          </div>
        </div>
      ) : !initialData.attachments.length ? (
        <p className="text-sm mt-2 text-slate-500 italic">No attachments yet</p>
      ) : (
        <div className="relative aspect-video mt-12">
          <Image
            alt="Upload"
            fill
            className="object-cover rounded-md"
            src={initialData.imageUrl}
          />
        </div>
      )}
    </div>
  );
};
