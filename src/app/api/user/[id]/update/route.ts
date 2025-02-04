import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const data = await request.json();

  try {
    const updatedUser = await prisma.user.update({
      where: { id },
      data, // Make sure to validate and filter allowed fields.
    });
    return NextResponse.json(updatedUser);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
        );
        console.error("Error updating user:", error);
  }
}
