import DisplayProfile from "@/components/common/display-profile/DisplayProfile";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "@/types/Types";


export default function TopicCardDisplayProfileButton({
  authorData,
}: {
  authorData: User;
}) {
  if (!authorData || authorData.user_name === null) return null;
  const { user_name, avatar } = authorData;
  return (
    <DisplayProfile
      authorData={authorData}
      triggerButtonContent={
        <>
          <Avatar className="h-6 w-6">
            <AvatarImage
              src={avatar ?? ""}
              className="object-cover"
              alt={authorData.user_name}
            />
            <AvatarFallback>{user_name[0]}</AvatarFallback>
          </Avatar>
          <p className="font-medium hover:underline max-w-[120px] line-clamp-1 break-all">{user_name}</p>
        </>
      }
    />
  );
}
