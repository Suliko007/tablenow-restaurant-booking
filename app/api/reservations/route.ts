import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

// This would be a database in a real application
let reservations: any[] = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['restaurantId', 'date', 'time', 'partySize', 'name', 'email', 'phone'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }
    
    // Create new reservation
    const newReservation = {
      id: uuidv4(),
      ...body,
      status: 'confirmed',
      createdAt: new Date().toISOString()
    };
    
    // In a real app, this would be saved to a database
    reservations.push(newReservation);
    
    // Return success response
    return NextResponse.json(
      { success: true, reservation: newReservation },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating reservation:', error);
    return NextResponse.json(
      { error: 'Failed to create reservation' },
      { status: 500 }
    );
  }
}

export async function GET() {
  // In a real app, this would fetch from a database with proper auth
  return NextResponse.json({ reservations });
}