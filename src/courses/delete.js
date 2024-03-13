import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    const courses = await prisma.courses.delete({
        where: {
            id: "b2238eb9-c9c5-44c3-afca-53dcac486436"
        }

    })

    console.log(courses)
}

main()
