// app/api/zillow/route.js (App Router)
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const address = searchParams.get('address');

  if (!address) {
    return NextResponse.json({ error: 'Address is required' }, { status: 400 });
  }

  const url = `https://zllw-working-api.p.rapidapi.com/pro/byaddress?propertyaddress=${encodeURIComponent(address)}`;
  
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': process.env.RAPIDAPI_KEY, // Use environment variable
      'x-rapidapi-host': 'zllw-working-api.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
   
    const result = await response.json();
     console.log('Zillow API Response Status:', result.propertyDetails.home);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}