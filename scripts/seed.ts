import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function main(){
    try{
        await db.category.createMany({
            data: [
                { name: "IGCSE" },
                { name: "O Level" },
                { name: "A Level" },
                { name: "A2" },
                { name: "AS" },
            ]
        });

        console.log("Success");
    }
    catch(error){
        console.log("Error seeding the database categories", error)
    }
    finally{
        await db.$disconnect();
    }
}

main();