// app/api/admin/backfill-production-steps/route.js

import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Quote from '@/models/Quote';

export async function GET() {
  await dbConnect();

  const result = await Quote.updateMany(
    { "productionSteps": { $exists: false } }, // check if the field is missing
    {
      $set: {
        productionSteps: {
          sampleConfirmation: "Not Started",
          fabricInhoused: "Not Started",
          fabricQualityCheck: "Not Started",
          production: "Not Started",
          packaging: "Not Started",
          qualityCheck: "Not Started",
          outForDelivery: "Not Started",
          confirmPaymentTerms: "Not Started",
        },
      },
    }
  );

  return NextResponse.json({
    message: "Backfill complete",
    modified: result.modifiedCount,
  });
}
