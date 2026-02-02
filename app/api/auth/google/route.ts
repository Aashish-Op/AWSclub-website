import { NextResponse } from 'next/server';

// Google Auth Route

export async function GET(request: Request) {
	return NextResponse.json({ message: 'Google Auth Route' });
}