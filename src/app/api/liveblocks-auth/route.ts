import { Liveblocks } from "@liveblocks/node";
import { NextRequest } from "next/server";
import { getRandomUser } from "@/database";


const liveblocks = new Liveblocks({
  secret: process.env.LIVEBLOCKS_SECRET_KEY as string,
});

export async function POST(request: NextRequest) {
  const user = getRandomUser();

  const session = liveblocks.prepareSession(`${user.id}`, {
    userInfo: user.info,
  });

  session.allow(`liveblocks:examples:*`, session.FULL_ACCESS);

  const { body, status } = await session.authorize();
  return new Response(body, { status });
}
