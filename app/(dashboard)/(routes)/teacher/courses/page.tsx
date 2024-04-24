import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function CoursePage () {
  return (
    <Link href="/teacher/create">
      <Button className="p-6 m-6">New Course</Button>
    </Link>
  );
}
