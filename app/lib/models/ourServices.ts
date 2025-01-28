import mongoose from "mongoose";

const SubSubServiceSchema = new mongoose.Schema({
  img: { type: String },
  title: { type: String },
  titleDesc: { type: String },
  description: { type: String },
  subService: {
    type: mongoose.Schema.Types.String,
    ref: "SubService",
    required: true,
  },
  keyComponentImg: { type: String },
  keyComponents: [
    {
      keyComponentTitle: { type: String },
      keyComponentDescription: { type: String },
    },
  ],
  benefits: [
    {
      BenefitTitle: { type: String },
      BenefitDescription: { type: String },
    },
  ],
});

const SubServiceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
});

const ServiceSchema = new mongoose.Schema({
  img: { type: String },
  title: { type: String, required: true },
});

const service =
  mongoose.models.Service || mongoose.model("Service", ServiceSchema);
const subService =
  mongoose.models.SubService || mongoose.model("SubService", SubServiceSchema);
const subSubService =
  mongoose.models.SubSubService ||
  mongoose.model("SubSubService", SubSubServiceSchema);

export { service, subService, subSubService };
