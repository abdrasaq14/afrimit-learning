/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-misused-promises */
"use client";
import * as z from "zod";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { File, Loader2, Pencil, X, } from "lucide-react";
import type { Course, Attachment } from "@prisma/client";
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
  const [deleteingId, setDeleteingId] = useState<string | null>(null);
  const router = useRouter();
  const toggleEditing = () => {
    setIsEditing((prev) => !prev);
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.post(`/api/courses/${courseId}/attachments`, values);
      toast.success("Course title updated");
      toggleEditing();
      router.refresh();
    } catch (error) {
      toast.error("something went wrong");
      console.error(error);
    }
  };

  const onDelete = async (id: string) => { 
    try {
      setDeleteingId(id);
      await axios.delete(`/api/courses/${courseId}/attachments/${id}`);
      toast.success("Attachment deleted");
      router.refresh();
    } catch (error) {
      toast.error("something went wrong");
      console.error(error);
    } finally {
      setDeleteingId(null);
    }
  }
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
            endpoint="courseAttachment"
            onChange={(url) => {
              if (url) {
                onSubmit({ url });
              }
            }}
          />
          <div className="text-xs text-muted-foreground mt-4">
            Add anything your student might need to complete the course
          </div>
        </div>
      ) : !initialData.attachments.length && (
        <p className="text-sm mt-2 text-slate-500 italic">No attachments yet</p>
      )}
        {initialData.attachments.length > 0 && (
        <div className="space-y-2">
          {initialData.attachments.map((attachment) => (
            <div key={attachment.id} className="flex items-center p-3 w-full bg-sky-100 border-sky-200 border text-sky-700 rounded-md">
              <File className="h-4 w-4 mr-2 flex-shrink-0" />
              <p className="text-xs line-clamp-1">{attachment.name}</p>
              {deleteingId === attachment.id && (
                <div>
                  <Loader2 className="h-4 w-4 animate-spin"/>
                </div>
              )}
              {deleteingId !== attachment.id && (
                <button className="ml-auto hover:opacity-75 transition">
                  <X className="h-4 w-4"/>
                </button>
              )}
          </div>
        ))}
        </div>
        )}
    </div>
  );
};
