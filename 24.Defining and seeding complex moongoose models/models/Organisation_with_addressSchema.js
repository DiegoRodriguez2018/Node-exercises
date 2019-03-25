const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const serviceSchema = new Schema({
    _id: Schema.Types.ObjectId,
    id: Number,
    Name: String,
    Description: String,
    ReferralInfo: String,
    ADHCEligible: Boolean,
    AssessmentCriteria: String,
    TargetGender: String,
    Availability: String,
    BillingMethod: String,
    Cost: String,
    CrisisKeywords: String,
    Details: String,
    EligibilityInfo: String,
    IneligibilityInfo: String,
    FundingBody: String,
    HealthcareCardHolders: Boolean,
    IntakeInfo: String,
    IntakePoint: String,
    IsBulkBilling: Boolean,
    NDISApproved: Boolean,
    PromotedService: Boolean,
    SpecialRequirements: String,
    Language: String,
    AgeGroupKeyword: String,
    AgeGroupDescription: String,
    ServiceTypes: String,
    IndigenousClassification: String,
    CapacityStatus: String,
    CapacityStatusText: String,
    CapacityFrequency: String,
    CapacityLastNotification: String,
    CapacityLastStatusUpdate: String,
    CapacityExpireDate: String,
    AccreditationName: String,
});

const addressSchema = new Schema({
    AddressBuilding: String,
    AddressLevel: String,
    AddressFlatUnit: String,
    AddressStreetNumber: String,
    AddressStreetName: String,
    AddressStreetType: String,
    AddressStreetSuffix: String,
    AddressSuburb: String,
    AddressState: String,
    AddressPostcode: String,
    AddressIsConfidential: Boolean,
})

const siteSchema = new Schema({
    _id: Schema.Types.ObjectId,
    id: Number,
    Name: String,
    Accessibility: String,
    LocationDetails: String,
    ParkingInfo: String,
    PublicTransportInfo: String,
    IsMobile: Boolean,
    EmailAddress: String,
    EmailIsConfidential: String,
    Website: String,
    PostalAdress: addressSchema,
    Address: addressSchema,
    PhoneNumber: String,
    PhoneKind: String,
    PhoneIsConfidential: Boolean,
    OpeningHours: [openHoursSchema],
    OpeningHoursNote: String,
    servicesInSite: [serviceSchema],
});


const organisationSchema = new Schema({
    _id: Schema.Types.ObjectId,
    id: Number,
    Name: String,
    Description: String,
    CreationTime: Date,
    LastModified: Date,
    LastUpdated: Date,
    Website: String,
    ABN: String,
    ProviderType: String,
    AlsoKnownAs: String,
    EmailAddress: String,
    EmailIsConfidential: Boolean,
    PostalAdress: addressSchema,
    Address: addressSchema,
    PhoneNumber: String,
    PhoneKind: String,
    PhoneIsConfidential: Boolean,
    CEO: String,
    sitesInOrganisation: [siteSchema],
});

module.exports = mongoose.model('Organisation', organisationSchema);