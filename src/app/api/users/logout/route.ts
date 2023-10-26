import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = new NextResponse({
      body: JSON.stringify({ message: "Logout Successful" }),
      success: true,
      headers: {
        "Content-Type": "application/json",
      },
    });
    response.cookies.set("token", "", { httpOnly: true, expires: new Date(0) });
    return response;
  } catch (error: any) {
    return new NextResponse({
      body: JSON.stringify({ error: error.message }),
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
