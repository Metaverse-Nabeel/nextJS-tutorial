// Import necessary modules
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

// Connect to the Mongo Database
connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    console.log(reqBody);

    //check if the user exits
    const user = await User.findOne({ email });
    if (!user) {
      return new NextResponse({
        body: JSON.stringify({ error: "User does not exist" }),
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    // check if the password is correct
    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return new NextResponse({
        body: JSON.stringify({ error: "Invalid Password" }),
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    //craete tokenData

    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    //create token
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });

    const response = new NextResponse({
      body: JSON.stringify({ message: "Login Successful" }),
      success: true,
      headers: {
        "Content-Type": "application/json",
      },
    });
    response.cookies.set("token", token, { httpOnly: true });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
