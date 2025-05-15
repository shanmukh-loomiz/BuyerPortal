import mongoose from 'mongoose';

const STEP_STATUS = ["Not Started", "In Progress", "Completed"];

const QuoteSchema = new mongoose.Schema({
  shippingAddress: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  leadTime: {
    type: String,
    required: true
  },
  targetPrice: {
    type: Number,
    required: true
  },
  fabricComposition: {
    type: String,
    required: true
  },
  gsm: {
    type: String,
    required: true
  },
  orderNotes: {
    type: String
  },
  orderSample: {
    type: Boolean,
    default: false
  },
  sampleCount: {
    type: Number,
    default: 0
  },
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

  // Production steps
  productionSteps: {
    sampleConfirmation: {
      type: String,
      enum: STEP_STATUS,
      default: "Not Started"
    },
    fabricInhoused: {
      type: String,
      enum: STEP_STATUS,
      default: "Not Started"
    },
    fabricQualityCheck: {
      type: String,
      enum: STEP_STATUS,
      default: "Not Started"
    },
    production: {
      type: String,
      enum: STEP_STATUS,
      default: "Not Started"
    },
    packaging: {
      type: String,
      enum: STEP_STATUS,
      default: "Not Started"
    },
    qualityCheck: {
      type: String,
      enum: STEP_STATUS,
      default: "Not Started"
    },
    outForDelivery: {
      type: String,
      enum: STEP_STATUS,
      default: "Not Started"
    },
    confirmPaymentTerms: {
      type: String,
      enum: STEP_STATUS,
      default: "Not Started"
    }
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.Quote || mongoose.model("Quote", QuoteSchema);
