// app/order-details/page.js

import dbConnect from '@/lib/mongodb';
import Quote from '@/models/Quote';
import OrderTracking from "@/app/components/ordertrack/ordertracking";

export default async function OrderDetailsPage() {
  // Connect to MongoDB
  await dbConnect();
  
  // Fetch quotes with status='Accepted'
  const acceptedQuotes = await Quote.find({ status: 'Accepted' }).lean();

  // Convert _id and createdAt to string for serialization
  const Quotes = acceptedQuotes.map(quote => ({
    productionSteps:quote.productionSteps,
    desc:quote.orderNotes,
    _id: quote._id.toString(),
    createdAt: quote.createdAt?.toISOString() ?? null,
    prod_image: quote.productImagesFiles[0]
  }));

  // Pass the sanitized data to the client component
  return (
    <div>
      <OrderTracking acceptedQuotes={Quotes} />
    </div>
  );
}
