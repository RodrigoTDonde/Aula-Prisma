import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    const courses = await prisma.courses.update({
        where: {
            id: "b2238eb9-c9c5-44c3-afca-53dcac486436"
        },
        data: {
            name: "Curso de prisma com fastyfy",
            duration: 200,
            description: "Curso de ORM prisma"

        }

    })

    console.log(courses)
}

main()