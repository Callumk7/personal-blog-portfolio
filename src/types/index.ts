import { Category, Post } from "@prisma/client";

enum Color {
  RED,
  GREEN,
  YELLOW,
  PURPLE,
}

export type { Category, Color, Post };
