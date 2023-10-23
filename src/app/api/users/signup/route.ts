// Import necessary modules
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

// Establish database connection
connect();

// Define the POST request handler
export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const reqBody = await request.json();
    const { username, email, password } = reqBody;

    // Check if the user already exists
    const user = await User.findOne({ email });

    // If the user exists, return an error response
    if (user) {
      return new NextResponse({
        body: JSON.stringify({ error: "User already exists" }),
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    // Hash the password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save the new user to the database
    const savedUser = await newUser.save();

    // Log the saved user
    console.log(savedUser);

    // Return a success response
    return new NextResponse({
      body: JSON.stringify({
        message: "User created successfully",
        success: true,
        savedUser,
      }),
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error: any) {
    // Return an error response
    return new NextResponse({
      body: JSON.stringify({ error: error.message }),
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
