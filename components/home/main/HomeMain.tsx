import React from "react";
import { BlogCard } from "@/components/common/card/blog-card/BlogCard";

import { Topics } from "@/types/Types";
import { supabaseClient } from "@/db/supabaseClient";

export default async function HomeMain() {
  const { data, error } = await supabaseClient
    .from("topics")
    .select()
    .limit(30)
    .order('timestamp', { ascending: false })

  console.log(error?.message);
  const blogs: Topics[] = data ?? [];

  return (
    <div>
      <div className="grid grid-cols-1 items-start justify-center gap-6 rounded-lg md:grid-cols-2 xl:grid-cols-3">
        {blogs.map((item) => (
          <div key={item.id} className="py-5">
            <BlogCard
              key={item.id}
              title={item.title}
              desc={item.desc}
              category={item.category}
              timestamp={item.timestamp}
              id={item.id}
              author_id={item.author_id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
