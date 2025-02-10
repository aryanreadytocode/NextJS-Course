import { notFound } from "next/navigation";
import NotFound from "./not-found";

export default function DetailReview({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  if (parseInt(params.reviewId) > 1000) {
    console.log("not found")
    return NotFound();
  }
  return (
    <h1>
      Review {params.reviewId} for product {params.productId}
    </h1>
  );
}
