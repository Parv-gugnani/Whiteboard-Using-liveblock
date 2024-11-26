const USER_INFO: Liveblocks["UserMeta"][] = [
  {
    id: "tiku.badmash@example.com",
    info: {
      name: "Tiku Badmash",
      color: "#D583F0",
      avatar: "https://liveblocks.io/avatars/avatar-1.png",
    },
  },
  {
    id: "coder.billa@example.com",
    info: {
      name: "Coder Billa",
      color: "#F08385",
      avatar: "https://liveblocks.io/avatars/avatar-2.png",
    },
  },
  {
    id: "mithu.don@example.com",
    info: {
      name: "Mithu don",
      color: "#F0D885",
      avatar: "https://liveblocks.io/avatars/avatar-3.png",
    },
  },
  {
    id: "kala.bhediya@example.com",
    info: {
      name: "Kala bhediya",
      color: "#85EED6",
      avatar: "https://liveblocks.io/avatars/avatar-4.png",
    },
  },
  {
    id: "jinga.guli@example.com",
    info: {
      name: "Jinga guli",
      color: "#85BBF0",
      avatar: "https://liveblocks.io/avatars/avatar-5.png",
    },
  },
  {
    id: "samsher.billa@example.com",
    info: {
      name: "Samsher billa",
      color: "#8594F0",
      avatar: "https://liveblocks.io/avatars/avatar-6.png",
    },
  },
  {
    id: "abhinav.arora@example.com",
    info: {
      name: "Abhinav arora",
      color: "#85DBF0",
      avatar: "https://liveblocks.io/avatars/avatar-7.png",
    },
  },
  {
    id: "asla.hum.bhi@example.com",
    info: {
      name: "Asla hum bhi",
      color: "#87EE85",
      avatar: "https://liveblocks.io/avatars/avatar-8.png",
    },
  },
];

export function getRandomUser() {
  return USER_INFO[Math.floor(Math.random() * 10) % USER_INFO.length];
}

export function getUser(id: string) {
  return USER_INFO.find((u) => u.id === id) || null;
}

export function getUsers() {
  return USER_INFO;
}
