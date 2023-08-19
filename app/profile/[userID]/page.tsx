import ProfileHeader from "@/components/profile/header/ProfileHeader";
import ProfileMain from "@/components/profile/main/ProfileMain";
import { BlogEntry, User } from "@/types/Types";
import {  supabaseClient } from "@/db/supabaseClient";

import React from "react";

export default async function page({ params }: { params: { userID: string } }) {
  const sessionUserID = "982ad381-1060-498d-8782-d78b26d4f979";
  const userParamID = params.userID;

  const { data } = await supabaseClient
    .from("users")
    .select()
    .eq("id", userParamID)
    .single();

  const { data : blogs } = await supabaseClient
    .from("topics")
    .select()
    .eq("author_id", userParamID);

  const user: User = data ?? [];
  const topicsByUser: BlogEntry[] = blogs ?? [];

  if (!user) return null;

  return (
    <div className="space-y-20">
      <ProfileHeader userData={user} sessionUserID={sessionUserID} />
      <ProfileMain blogsByUser={topicsByUser} savedBlogsByUser={[]} />
    </div>
  );
}
