import { auth } from "@clerk/nextjs/server"
import { isTeacher } from "@/lib/teacher"
import { redirect } from "next/navigation"

const TeacherLayout = ({
    children
}: {
    children: React.ReactNode; 
}) => {
    const { userId } = auth();
    if (!userId || !isTeacher(userId)) {
        return redirect("/dashboard");
    }

    return <>{children}</>
}

export default TeacherLayout;