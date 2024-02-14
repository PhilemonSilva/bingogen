import { z } from "zod";

const BingoElement = z.object({
  text: z.string(),
  selected: z.boolean(),
  isBeingEdited: z.boolean(),
});

// extract the inferred type
export type BingoElement = z.infer<typeof BingoElement>;
// { username: string }