import mongoose from 'mongoose';

const QuoteSchema = new mongoose.Schema({
  shippingAddress: { type: String, required: true },
  quantity: { type: Number, required: true },
  leadTime: { type: String, required: true },
  targetPrice: { type: Number, required: true },
  fabricComposition: { type: String, required: true },
  gsm: { type: String, required: true },
  orderNotes: { type: String },
  orderSample: { type: Boolean, default: false },
  sampleCount: { type: Number, default: 0 },
  status: {
    type: String,
    enum: ["Pending", "Accepted", "Rejected"],
    default: "Pending"
  },

  // File URLs
  techpackFile: String,
  productImagesFiles: [String],
  colorSwatchFiles: [String],
  fabricFiles: [String],
  miscellaneousFiles: [String],

  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.Quote || mongoose.model("Quote", QuoteSchema);
