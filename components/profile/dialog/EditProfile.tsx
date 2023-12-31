import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import EditUserName from "./dialog-edit-sections/EditUserName";
import EditBio from "./dialog-edit-sections/EditBio";
import EditAvatar from "./dialog-edit-sections/EditAvatar";
import EditBanner from "./dialog-edit-sections/EditBanner";

export function EditProfile() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <EditBanner />
          <EditAvatar />
          <EditUserName />
          <EditBio />
        </div>
      </DialogContent>
    </Dialog>
  );
}
