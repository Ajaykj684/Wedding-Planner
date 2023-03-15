import * as React from "react";



export default function RecipeReviewCard({ children }) {

  return (
    <div class="mt-8 ">
      <img
        alt="Placeholder"
        class="block h-full w-full"
        height="500"
        src={children}
      />
    </div>
  );
}
