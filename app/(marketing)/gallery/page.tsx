import { redirect } from "next/navigation";

// Gallery is currently disabled — redirect to home
export default function GalleryPage() {
  redirect("/");
}
