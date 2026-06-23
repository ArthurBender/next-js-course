export interface Meal {
  id: string;
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
  creator_email: string;
  instructions: string;
}

export type MealToSubmit = Omit<Meal, "image" | "slug" | "id"> & {
  image: File
};

export interface RequestResponse {
  success: boolean | null;
  message: string | null;
}