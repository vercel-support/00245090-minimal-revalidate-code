import { revalidateTag } from "next/cache";

export async function GET(request) {
	const dummyArray = Array.from({ length: 3000 }, (_, index) => index);

	for (let i = 0; i < dummyArray.length; i++) {
		revalidateTag(`userAnalytics:${i}`);
	}

	return new Response("Revalidation complete");
}

export const maxDuration = 180;
export const dynamic = "force-dynamic";
export const revalidate = 0;
