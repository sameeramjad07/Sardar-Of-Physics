import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(
    req: Request,
    { params }: { params: { courseId: string}}
) {
    try{
        const { userId } = auth();
        const { courseId } = params;

        if(!userId){
            return new NextResponse("Unauthorized", {status: 401});
        }

        const course = await db.course.findUnique({
            where: {
                id: courseId,
                userId,
            },
            include: {
                chapters: {
                    include: {
                        muxData: true,
                    }
                }
            }
        });

        if(!course){
            return new NextResponse("Not Found", {status: 404});
        }

        const hasPublishedChapter = course.chapters.some((chapter) => chapter.isPublished);

        if(!course.title || !course.description || !course.imageUrl || !course.price || !course.categoryId || !hasPublishedChapter){
            return new NextResponse("Missin required filed", {status: 401});
        }
        
        const publisedCourse = await db.course.update({
            where: {
                id: courseId,
                userId
            },
            data: {
                isPublished: true
            }
        });

        return NextResponse.json(publisedCourse);
    }
    catch(error) {
        console.log("[COURSE_ID_PUBLISH]", error);
        return new NextResponse("Internal Error", {status: 500})
    }
}
