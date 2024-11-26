"use client";

import "tldraw/tldraw.css";
import { Tldraw, DefaultStylePanel, DefaultStylePanelContent } from "tldraw";
import { useStorageStore } from "./useStorageStore";
import { useSelf } from "@liveblocks/react/suspense";
import { Avatars } from "@/components/Avatars";
import { Badge } from "@/components/Badge";

export function StorageTldraw() {
  const id = useSelf((me) => me.id);
  const info = useSelf((me) => me.info);

  const store = useStorageStore({
    user: { id, color: info.color, name: info.name },
  });

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Tldraw
        store={store}
        components={{
          StylePanel: () => (
            <div
              style={{
                display: "flex-column",
                marginTop: 4,
              }}
            >
              <Avatars />
              <DefaultStylePanel />
              <Badge />
            </div>
          ),
        }}
        autoFocus
      />
    </div>
  );
}
