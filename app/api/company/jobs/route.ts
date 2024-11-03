import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export const revalidate = 1;

export async function GET(request: NextRequest) {
  const data = await prisma.$queryRaw`
  SELECT 
    J.*, 
    C.name AS company_name, 
    C."ownerId" AS company_ownerId
  FROM 
    "Job" AS J
  INNER JOIN 
    "Company" AS C ON J."companyId" = C.id
  ORDER BY
    J."createdAt" DESC;`;

  const jobs = { jobs: data };

  return NextResponse.json(jobs, { status: 200 });
}