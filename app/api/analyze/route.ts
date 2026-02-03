import { NextResponse } from 'next/server';
import { analyzeCode } from '@/lib/groq';

export async function POST(request: Request) {
  try {
    const { code, language } = await request.json();

    if (!code || !language) {
      return NextResponse.json(
        { error: 'Code and language are required' },
        { status: 400 }
      );
    }

    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json(
        { error: 'GROQ_API_KEY not configured' },
        { status: 500 }
      );
    }

    const result = await analyzeCode(code, language);

    return NextResponse.json(result);
  } catch (error: any) {
    console.error('Error in analyze API:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to analyze code' },
      { status: 500 }
    );
  }
}
