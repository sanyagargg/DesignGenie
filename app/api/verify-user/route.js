import { db } from "../../../config/db";
import { Users } from "../../../config/schema";
import { NextResponse } from "next/server";
import { eq } from "drizzle-orm"; 


export async function POST(req) {
    const { user } = await req.json();

    try {
        // Check if user exists
        const userInfo = await db.select().from(Users)
            .where(eq(Users.email, user?.primaryEmailAddress?.emailAddress));

        console.log("User:", userInfo);

        // If user does not exist, add new user to DB
        if (userInfo?.length === 0) {
            const SaveResult = await db.insert(Users)
                .values({
                    name: `${user?.firstName} ${user?.lastName}`, //  Fix: Use firstName + lastName
                    email: user?.primaryEmailAddress?.emailAddress, 
                    imageUrl: user?.imageUrl
                })
                .returning();

            return NextResponse.json({ result: SaveResult[0] });
        }

        return NextResponse.json({ result: userInfo[0] });
    } catch (e) {
        console.error("Error in user verification:", e);
        return NextResponse.json({ error: e.message }, { status: 500 }); //Fix: Proper error handling
    }
}
