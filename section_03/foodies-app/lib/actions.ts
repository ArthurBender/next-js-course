'use server';

import { saveMeal } from "./meals";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import type { MealToSubmit, RequestResponse } from "@/types";

const isValidField = (key: string, value: string | File) => {
  if (key === 'image') {
    return value instanceof File && value.size > 0;
  } else if (key === 'creator_email') {
    return value !== '' && (value as string).trim() !== '' && (value as string).includes('@');
  } else {
    return value !== '' && (value as string).trim() !== '';
  }
}

export const handleShareMeal = async (prevState: RequestResponse, formData: FormData): Promise<RequestResponse> => {
  const meal: MealToSubmit = {
    title: formData.get('title') as string,
    summary: formData.get('summary') as string,
    image: formData.get('image') as File,
    instructions: formData.get('instructions') as string,
    creator: formData.get('name') as string,
    creator_email: formData.get('email') as string,
  };

  for (const key of Object.keys(meal)) {
    if(!isValidField(key, meal[key as keyof MealToSubmit])) {
      return {
        success: false,
        message: `Error saving meal: invalid input for ${key}`
      }
    };
  };

  await saveMeal(meal);
  revalidatePath('/meals');
  redirect('/meals');
}