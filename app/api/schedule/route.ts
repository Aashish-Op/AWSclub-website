import { NextResponse } from 'next/server';

// Schedule API route | It will return the schedule data for the active event

export async function GET(request: Request) {
	return NextResponse.json({ message: 'Schedule API Route' });
}