// Import necessary modules
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { request } from "http";

// Connect to the Mongo Database 
connect();

export async function POST (request: NextRequest) {
    try {
        const reqBody = await request.json();
        const {email, password} = reqBody;
        console.log(reqBody);

        //check if the user exits
        const user = await User.findOne({email});
        if()

        
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}