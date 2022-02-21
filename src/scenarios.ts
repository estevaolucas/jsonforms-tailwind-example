export interface BorrowerAssets {
  cashBalances: number;
  hasCashBalances: boolean;
  total: number;
}

export interface BorrowerInfo {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  annualIncome: string;
  ssn: string;
  partialSsn: string;
  authCreditCheck: boolean;
  hasCoBorrower: boolean;
  ownsBorrowerProperty: boolean;
  borrowerPropertyTitleHolding: string;
  hasMortgagesOnBorrowerProperty: boolean;
  ownershipInterestInProperty: boolean;
  borrowerAssets: BorrowerAssets;
}

export interface CoBorrowerInfo
  extends Omit<
    BorrowerInfo,
    | "password"
    | "hasCoBorrower"
    | "ownsBorrowerProperty"
    | "borrowerPropertyTitleHolding"
    | "hasMortgagesOnBorrowerProperty"
    | "ownershipInterestInProperty"
    | "borrowerAssets"
  > {
  livesWithBorrower: boolean;
  isMarriedToBorrower: boolean;
  streetAddress: string;
  city: string;
  zipCode: string;
  stateCode: string;
  ownsCoborrowerProperty: boolean;
  coborrowerOwnershipInterestInProperty: boolean;
  coborrowerAssets: BorrowerAssets;
}

export interface PropertyInfo {
  usage: string;
  price: string;
  streetAddress: string;
  city: string;
  zipCode: string;
  stateCode: string;
  propertyType: string;
  purchaseContractExists?: boolean;
  purchaseJourney?: string;
  transactionTimeline?: string;
  downPayment?: number;
  rawLocation?: string;
}

export interface CurrentAddress {
  streetAddress: string;
  city: string;
  zipCode: string;
  stateCode: string;
  ownership?: string;
  futureUsage?: string;
  sellCurrentHomeBeforeClose?: boolean;
}

export interface LeadAttribution {
  leadAttribution: string;
  leadAttributionOtherText: string;
}

export interface OccupancyInfo {
  ownership: string;
  futureUsage: string;
  ownsOtherProperty: boolean;
}

export interface HomeLoans {
  hasMortgagesOnProperty: boolean;
}

export interface RealEstateOwned {
  realEstateOwned?: null[] | null;
}

export interface ManuallyEnteredMortgage {
  creditorName: string;
  monthlyPaymentAmount: number;
  unpaidBalanceAmount: number;
  isSelected: boolean;
  isRelated: boolean;
  isUserAdded?: boolean;
  isRelatedToSubjectProperty?: boolean;
  isEscrow?: boolean;
  isPrimaryLien?: boolean;
  refinanceThisLoan?: boolean;
}

export interface CashOutInfo {
  desiredAmount: number;
}

export interface CombinedIncome {
  borrowerAnnualIncome: string;
  coborrowerAnnualIncome: string;
}

export interface ScenarioConfigFixtures {
  tenant: "Better" | "Ally";
  borrowerInfo: BorrowerInfo;
  propertyInfo: PropertyInfo;
  currentAddress: CurrentAddress;
  leadAttribution: LeadAttribution;
  occupancyInfo?: OccupancyInfo;
  homeLoans: HomeLoans;
  realEstateOwned?: RealEstateOwned;
  manuallyEnteredMortgage: ManuallyEnteredMortgage;
  cashOutInfo?: CashOutInfo;
  coborrowerInfo?: CoBorrowerInfo;
  combinedIncome?: CombinedIncome;
  selectedMortgages?: any;
}

export interface ScenarioConfig {
  refi?: boolean;
  purchase?: boolean;
  solo?: boolean;
  scenarioUser?: {
    email: string;
    phone?: string;
    password: string;
  };
  fixtures: ScenarioConfigFixtures;
}

export const soloPurchaseApproval: ScenarioConfig = {
  solo: true,
  purchase: true,
  fixtures: {
    tenant: "Better",
    borrowerInfo: {
      firstName: "Lucille",
      lastName: "Bluth",
      email: "testBorrower@better.com",
      password: "password1",
      phone: "212-555-5555",
      annualIncome: "999,999",
      ssn: "666403690",
      partialSsn: "6666",
      authCreditCheck: true,
      hasCoBorrower: false,
      ownsBorrowerProperty: true,
      borrowerPropertyTitleHolding: "By yourself",
      hasMortgagesOnBorrowerProperty: false,
      ownershipInterestInProperty: false,
      borrowerAssets: {
        cashBalances: 2222,
        hasCashBalances: true,
        total: 2222
      }
    },
    propertyInfo: {
      usage: "PrimaryResidence",
      price: "500,000",
      streetAddress: "2737 Ellison Dr",
      city: "Beverly Hills",
      zipCode: "90210",
      stateCode: "CA",
      propertyType: "Single Family",
      purchaseContractExists: true,
      purchaseJourney: "under-contract"
    },
    currentAddress: {
      streetAddress: "321 Even Faker Street",
      city: "Beverly Hills",
      zipCode: "90210",
      stateCode: "CA",
      ownership: "Own",
      futureUsage: "OwnWillSell",
      sellCurrentHomeBeforeClose: true
    },
    leadAttribution: {
      leadAttribution: "other",
      leadAttributionOtherText: "Captain Underpants"
    },
    occupancyInfo: {
      ownership: "Own",
      futureUsage: "OwnWillSell",
      ownsOtherProperty: false
    },
    homeLoans: { hasMortgagesOnProperty: true },
    realEstateOwned: { realEstateOwned: [] },
    manuallyEnteredMortgage: {
      creditorName: "Derp Co",
      monthlyPaymentAmount: 9999,
      unpaidBalanceAmount: 200000,
      isSelected: true,
      isRelated: true
    },
    cashOutInfo: { desiredAmount: 0 }
  }
};

export const soloPurchaseLetter: ScenarioConfig = {
  solo: true,
  refi: false,
  purchase: true,
  fixtures: {
    tenant: "Better",
    borrowerInfo: {
      firstName: "Lucille",
      lastName: "Bluth",
      email: "testBorrower@better.com",
      password: "password1",
      phone: "212-555-5555",
      annualIncome: "999,999",
      ssn: "666403690",
      partialSsn: "6666",
      authCreditCheck: true,
      hasCoBorrower: false,
      ownsBorrowerProperty: true,
      borrowerPropertyTitleHolding: "By yourself",
      hasMortgagesOnBorrowerProperty: false,
      ownershipInterestInProperty: false,
      borrowerAssets: {
        cashBalances: 2000,
        hasCashBalances: true,
        total: 2000
      }
    },
    propertyInfo: {
      usage: "PrimaryResidence",
      price: "500000",
      streetAddress: null,
      city: null,
      zipCode: null,
      stateCode: null,
      propertyType: "Single Family",
      purchaseContractExists: false,
      transactionTimeline: "zero-to-three-months",
      purchaseJourney: "researching",
      downPayment: 200000,
      rawLocation: "Beverly Hills, CA"
    },
    currentAddress: {
      streetAddress: "321 Even Faker Street",
      city: "Hoboken",
      zipCode: "07030",
      stateCode: "NJ",
      ownership: "Own",
      futureUsage: "OwnWillSell",
      sellCurrentHomeBeforeClose: true
    },
    leadAttribution: {
      leadAttribution: "other",
      leadAttributionOtherText: "Captain Underpants"
    },
    occupancyInfo: {
      ownership: "Own",
      futureUsage: "OwnWillSell",
      ownsOtherProperty: false
    },
    homeLoans: {
      hasMortgagesOnProperty: true
    },
    realEstateOwned: {
      realEstateOwned: []
    },
    manuallyEnteredMortgage: {
      creditorName: "Derp Co",
      monthlyPaymentAmount: 9999,
      unpaidBalanceAmount: 200000,
      isSelected: true,
      isRelated: true
    }
  }
};

export const soloPurchaseDenial: ScenarioConfig = {
  solo: true,
  purchase: true,
  fixtures: {
    tenant: "Better",
    borrowerInfo: {
      firstName: "Lucille",
      lastName: "Bluth",
      email: "testBorrower@better.com",
      password: "password1",
      phone: "212-555-5555",
      annualIncome: "300",
      ssn: "666403690",
      partialSsn: "6666",
      authCreditCheck: true,
      hasCoBorrower: false,
      ownsBorrowerProperty: true,
      borrowerPropertyTitleHolding: "By yourself",
      hasMortgagesOnBorrowerProperty: false,
      ownershipInterestInProperty: false,
      borrowerAssets: {
        cashBalances: 2000,
        hasCashBalances: true,
        total: 2000
      }
    },
    propertyInfo: {
      usage: "PrimaryResidence",
      price: "500,000",
      streetAddress: "2737 Ellison Dr",
      city: "Beverly Hills",
      zipCode: "90210",
      stateCode: "CA",
      propertyType: "Single Family",
      purchaseContractExists: true,
      purchaseJourney: "under-contract"
    },
    currentAddress: {
      streetAddress: "321 Even Faker Street",
      city: "Beverly Hills",
      zipCode: "90210",
      stateCode: "CA",
      ownership: "Own",
      futureUsage: "OwnWillSell",
      sellCurrentHomeBeforeClose: true
    },
    leadAttribution: {
      leadAttribution: "other",
      leadAttributionOtherText: "Captain Underpants"
    },
    occupancyInfo: {
      ownership: "Own",
      futureUsage: "OwnWillSell",
      ownsOtherProperty: false
    },
    homeLoans: {
      hasMortgagesOnProperty: true
    },
    realEstateOwned: {
      realEstateOwned: []
    },
    manuallyEnteredMortgage: {
      creditorName: "Derp Co",
      monthlyPaymentAmount: 9999,
      unpaidBalanceAmount: 200000,
      isSelected: true,
      isRelated: true
    },
    cashOutInfo: {
      desiredAmount: 0
    }
  }
};

export const soloPurchaseVerified: ScenarioConfig = {
  purchase: true,
  solo: true,
  fixtures: {
    tenant: "Better",
    borrowerInfo: {
      firstName: "Lucille",
      lastName: "Bluth",
      email: "testBorrower@better.com",
      password: "password1",
      phone: "212-555-5555",
      annualIncome: "999,999",
      ssn: "666403690",
      partialSsn: "6666",
      authCreditCheck: true,
      hasCoBorrower: false,
      ownsBorrowerProperty: true,
      borrowerPropertyTitleHolding: "By yourself",
      hasMortgagesOnBorrowerProperty: false,
      ownershipInterestInProperty: false,
      borrowerAssets: {
        cashBalances: 2000,
        hasCashBalances: true,
        total: 2000
      }
    },
    propertyInfo: {
      usage: "PrimaryResidence",
      price: "500000",
      streetAddress: null,
      city: null,
      zipCode: null,
      stateCode: null,
      propertyType: "Single Family",
      purchaseContractExists: false,
      transactionTimeline: "zero-to-three-months",
      purchaseJourney: "researching",
      downPayment: 200000,
      rawLocation: "Beverly Hills, CA"
    },
    currentAddress: {
      streetAddress: "321 Even Faker Street",
      city: "Hoboken",
      zipCode: "07030",
      stateCode: "NJ",
      ownership: "Own",
      futureUsage: "OwnWillSell",
      sellCurrentHomeBeforeClose: true
    },
    leadAttribution: {
      leadAttribution: "other",
      leadAttributionOtherText: "Captain Underpants"
    },
    occupancyInfo: {
      ownership: "Own",
      futureUsage: "OwnWillSell",
      ownsOtherProperty: false
    },
    homeLoans: {
      hasMortgagesOnProperty: true
    },
    realEstateOwned: {
      realEstateOwned: []
    },
    manuallyEnteredMortgage: {
      creditorName: "Derp Co",
      monthlyPaymentAmount: 9999,
      unpaidBalanceAmount: 200000,
      isSelected: true,
      isRelated: true
    }
  }
};

export const soloRefinanceDenial: ScenarioConfig = {
  solo: true,
  refi: true,
  fixtures: {
    tenant: "Better",
    borrowerInfo: {
      firstName: "Lucille",
      lastName: "Bluth",
      email: "testBorrower@better.com",
      password: "password1",
      phone: "212-555-5555",
      annualIncome: "300",
      ssn: "666403690",
      partialSsn: "6666",
      authCreditCheck: true,
      hasCoBorrower: false,
      ownsBorrowerProperty: true,
      borrowerPropertyTitleHolding: "By yourself",
      hasMortgagesOnBorrowerProperty: false,
      ownershipInterestInProperty: false,
      borrowerAssets: {
        cashBalances: 2000,
        hasCashBalances: true,
        total: 2000
      }
    },
    propertyInfo: {
      usage: "PrimaryResidence",
      price: "500,000",
      streetAddress: "2737 Ellison Dr",
      city: "Beverly Hills",
      zipCode: "90210",
      stateCode: "CA",
      propertyType: "Single Family"
    },
    currentAddress: {
      streetAddress: "982 Azure Street",
      city: "Beverly Hills",
      zipCode: "90210",
      stateCode: "CA"
    },
    leadAttribution: {
      leadAttribution: "other",
      leadAttributionOtherText: "Captain Underpants"
    },
    homeLoans: { hasMortgagesOnProperty: true },
    realEstateOwned: { realEstateOwned: [] },
    manuallyEnteredMortgage: {
      creditorName: "Derp Co",
      monthlyPaymentAmount: 9999,
      unpaidBalanceAmount: 200000,
      isSelected: true,
      isRelated: true
    },
    cashOutInfo: { desiredAmount: 0 }
  }
};

export const soloRefinanceApproval: ScenarioConfig = {
  solo: true,
  refi: true,
  fixtures: {
    tenant: "Better",
    borrowerInfo: {
      firstName: "Lucille",
      lastName: "Bluth",
      email: "testBorrower@better.com",
      password: "password1",
      phone: "212-555-5555",
      annualIncome: "999,999",
      ssn: "666403690",
      partialSsn: "6666",
      authCreditCheck: true,
      hasCoBorrower: false,
      ownsBorrowerProperty: true,
      borrowerPropertyTitleHolding: "By yourself",
      hasMortgagesOnBorrowerProperty: false,
      ownershipInterestInProperty: false,
      borrowerAssets: {
        cashBalances: 2000,
        hasCashBalances: true,
        total: 2000
      }
    },
    propertyInfo: {
      usage: "PrimaryResidence",
      price: "500,000",
      streetAddress: "2737 Ellison Dr",
      city: "Beverly Hills",
      zipCode: "90210",
      stateCode: "CA",
      propertyType: "Single Family"
    },
    currentAddress: {
      streetAddress: "982 Azure Street",
      city: "Beverly Hills",
      zipCode: "90210",
      stateCode: "CA"
    },
    leadAttribution: {
      leadAttribution: "other",
      leadAttributionOtherText: "Captain Underpants"
    },
    homeLoans: {
      hasMortgagesOnProperty: true
    },
    realEstateOwned: {
      realEstateOwned: []
    },
    manuallyEnteredMortgage: {
      creditorName: "Derp Co",
      monthlyPaymentAmount: 9999,
      unpaidBalanceAmount: 200000,
      isSelected: true,
      isRelated: true
    },
    cashOutInfo: {
      desiredAmount: 0
    }
  }
};

export const jointRefinanceDenial: ScenarioConfig = {
  solo: false,
  refi: true,
  fixtures: {
    tenant: "Better",
    borrowerInfo: {
      firstName: "Lucille",
      lastName: "Bluth",
      email: "testBorrower@better.com",
      password: "password1",
      phone: "212-555-5555",
      annualIncome: "300",
      ssn: "666403690",
      partialSsn: "6666",
      authCreditCheck: true,
      hasCoBorrower: true,
      ownsBorrowerProperty: true,
      borrowerPropertyTitleHolding: "By yourself",
      hasMortgagesOnBorrowerProperty: false,
      ownershipInterestInProperty: false,
      borrowerAssets: {
        cashBalances: 2000,
        hasCashBalances: true,
        total: 2000
      }
    },
    coborrowerInfo: {
      firstName: "George",
      lastName: "Bluth",
      email: "testCoBorrower@better.com",
      phone: "212-555-5555",
      annualIncome: "100",
      ssn: "666674232",
      partialSsn: "4232",
      authCreditCheck: true,
      livesWithBorrower: false,
      isMarriedToBorrower: true,
      streetAddress: "111 Even Faker Street",
      city: "Hoboken",
      zipCode: "07030",
      stateCode: "NJ",
      ownsCoborrowerProperty: false,
      coborrowerOwnershipInterestInProperty: false,
      coborrowerAssets: {
        cashBalances: 1500,
        hasCashBalances: true,
        total: 1500
      }
    },
    propertyInfo: {
      usage: "PrimaryResidence",
      price: "500,000",
      streetAddress: "2737 Ellison Dr",
      city: "Beverly Hills",
      zipCode: "90210",
      stateCode: "CA",
      propertyType: "Single Family"
    },
    currentAddress: {
      streetAddress: "982 Azure Street",
      city: "Beverly Hills",
      zipCode: "90210",
      stateCode: "CA"
    },
    leadAttribution: {
      leadAttribution: "other",
      leadAttributionOtherText: "Captain Underpants"
    },
    homeLoans: {
      hasMortgagesOnProperty: true
    },
    realEstateOwned: {
      realEstateOwned: []
    },
    manuallyEnteredMortgage: {
      creditorName: "Derp Co",
      monthlyPaymentAmount: 9999,
      unpaidBalanceAmount: 200000,
      isSelected: true,
      isRelated: true
    },
    combinedIncome: {
      borrowerAnnualIncome: "300",
      coborrowerAnnualIncome: "100"
    },
    cashOutInfo: {
      desiredAmount: 0
    }
  }
};

export const jointRefinanceApproval: ScenarioConfig = {
  refi: true,
  solo: false,
  fixtures: {
    tenant: "Better",
    borrowerInfo: {
      firstName: "Lucille",
      lastName: "Bluth",
      email: "testBorrower@better.com",
      password: "password1",
      phone: "212-555-5555",
      annualIncome: "999,999",
      ssn: "666403690",
      partialSsn: "6666",
      authCreditCheck: true,
      hasCoBorrower: true,
      ownsBorrowerProperty: true,
      borrowerPropertyTitleHolding: "By yourself",
      hasMortgagesOnBorrowerProperty: false,
      ownershipInterestInProperty: false,
      borrowerAssets: {
        cashBalances: 2000,
        hasCashBalances: true,
        total: 2000
      }
    },
    coborrowerInfo: {
      firstName: "George",
      lastName: "Bluth",
      email: "testCoBorrower@better.com",
      phone: "212-555-5555",
      annualIncome: "999,999",
      ssn: "666674232",
      partialSsn: "4232",
      authCreditCheck: true,
      livesWithBorrower: false,
      isMarriedToBorrower: true,
      streetAddress: "111 Even Faker Street",
      city: "Hoboken",
      zipCode: "07030",
      stateCode: "NJ",
      ownsCoborrowerProperty: false,
      coborrowerOwnershipInterestInProperty: false,
      coborrowerAssets: {
        cashBalances: 1500,
        hasCashBalances: true,
        total: 1500
      }
    },
    propertyInfo: {
      usage: "PrimaryResidence",
      price: "500,000",
      streetAddress: "2737 Ellison Dr",
      city: "Beverly Hills",
      zipCode: "90210",
      stateCode: "CA",
      propertyType: "Single Family"
    },
    currentAddress: {
      streetAddress: "982 Azure Street",
      city: "Beverly Hills",
      zipCode: "90210",
      stateCode: "CA"
    },
    leadAttribution: {
      leadAttribution: "other",
      leadAttributionOtherText: "Captain Underpants"
    },
    homeLoans: {
      hasMortgagesOnProperty: true
    },
    realEstateOwned: {
      realEstateOwned: []
    },
    manuallyEnteredMortgage: {
      creditorName: "Derp Co",
      monthlyPaymentAmount: 9999,
      unpaidBalanceAmount: 200000,
      isSelected: true,
      isRelated: true
    },
    combinedIncome: {
      borrowerAnnualIncome: "999,999",
      coborrowerAnnualIncome: "999,999"
    },
    cashOutInfo: {
      desiredAmount: 0
    }
  }
};

export const jointPurchaseDenial: ScenarioConfig = {
  solo: false,
  refi: false,
  purchase: true,
  fixtures: {
    tenant: "Better",
    borrowerInfo: {
      firstName: "Lucille",
      lastName: "Bluth",
      email: "testBorrower@better.com",
      password: "password1",
      phone: "212-555-5555",
      annualIncome: "300",
      ssn: "666403690",
      partialSsn: "6666",
      authCreditCheck: true,
      hasCoBorrower: true,
      ownsBorrowerProperty: true,
      borrowerPropertyTitleHolding: "By yourself",
      hasMortgagesOnBorrowerProperty: false,
      ownershipInterestInProperty: false,
      borrowerAssets: {
        cashBalances: 2000,
        hasCashBalances: true,
        total: 2000
      }
    },
    coborrowerInfo: {
      firstName: "George",
      lastName: "Bluth",
      email: "testCoBorrower@better.com",
      phone: "212-555-5555",
      annualIncome: "100",
      ssn: "666674232",
      partialSsn: "4232",
      authCreditCheck: true,
      livesWithBorrower: false,
      isMarriedToBorrower: true,
      streetAddress: "111 Even Faker Street",
      city: "Hoboken",
      zipCode: "07030",
      stateCode: "NJ",
      ownsCoborrowerProperty: false,
      coborrowerOwnershipInterestInProperty: false,
      coborrowerAssets: {
        cashBalances: 1500,
        hasCashBalances: true,
        total: 1500
      }
    },
    propertyInfo: {
      usage: "PrimaryResidence",
      price: "500,000",
      streetAddress: "2737 Ellison Dr",
      city: "Beverly Hills",
      zipCode: "90210",
      stateCode: "CA",
      propertyType: "Single Family",
      purchaseContractExists: true,
      purchaseJourney: "under-contract"
    },
    currentAddress: {
      streetAddress: "321 Even Faker Street",
      city: "Beverly Hills",
      zipCode: "90210",
      stateCode: "CA",
      ownership: "Own",
      futureUsage: "OwnWillSell",
      sellCurrentHomeBeforeClose: true
    },
    leadAttribution: {
      leadAttribution: "other",
      leadAttributionOtherText: "Captain Underpants"
    },
    occupancyInfo: {
      ownership: "Own",
      futureUsage: "OwnWillSell",
      ownsOtherProperty: false
    },
    homeLoans: {
      hasMortgagesOnProperty: true
    },
    realEstateOwned: {
      realEstateOwned: []
    },
    manuallyEnteredMortgage: {
      creditorName: "Derp Co",
      monthlyPaymentAmount: 9999,
      unpaidBalanceAmount: 200000,
      isSelected: true,
      isRelated: true
    },
    combinedIncome: {
      borrowerAnnualIncome: "300",
      coborrowerAnnualIncome: "100"
    },
    cashOutInfo: {
      desiredAmount: 0
    }
  }
};

export const jointPurchaseApproval: ScenarioConfig = {
  solo: false,
  purchase: true,
  fixtures: {
    tenant: "Better",
    borrowerInfo: {
      firstName: "Lucille",
      lastName: "Bluth",
      email: "testBorrower@better.com",
      password: "password1",
      phone: "212-555-5555",
      annualIncome: "999,999",
      ssn: "666403690",
      partialSsn: "6666",
      authCreditCheck: true,
      hasCoBorrower: true,
      ownsBorrowerProperty: true,
      borrowerPropertyTitleHolding: "By yourself",
      hasMortgagesOnBorrowerProperty: false,
      ownershipInterestInProperty: false,
      borrowerAssets: {
        cashBalances: 2000,
        hasCashBalances: true,
        total: 2000
      }
    },
    coborrowerInfo: {
      firstName: "George",
      lastName: "Bluth",
      email: "testCoBorrower@better.com",
      phone: "212-555-5555",
      annualIncome: "999,999",
      ssn: "666674232",
      partialSsn: "4232",
      authCreditCheck: true,
      livesWithBorrower: false,
      isMarriedToBorrower: true,
      streetAddress: "111 Even Faker Street",
      city: "Hoboken",
      zipCode: "07030",
      stateCode: "NJ",
      ownsCoborrowerProperty: false,
      coborrowerOwnershipInterestInProperty: false,
      coborrowerAssets: {
        cashBalances: 1500,
        hasCashBalances: true,
        total: 1500
      }
    },
    propertyInfo: {
      usage: "PrimaryResidence",
      price: "500,000",
      streetAddress: "2737 Ellison Dr",
      city: "Beverly Hills",
      zipCode: "90210",
      stateCode: "CA",
      propertyType: "Single Family",
      purchaseContractExists: true,
      purchaseJourney: "under-contract"
    },
    currentAddress: {
      streetAddress: "321 Even Faker Street",
      city: "Beverly Hills",
      zipCode: "90210",
      stateCode: "CA",
      ownership: "Own",
      futureUsage: "OwnWillSell",
      sellCurrentHomeBeforeClose: true
    },
    leadAttribution: {
      leadAttribution: "other",
      leadAttributionOtherText: "Captain Underpants"
    },
    occupancyInfo: {
      ownership: "Own",
      futureUsage: "OwnWillSell",
      ownsOtherProperty: false
    },
    homeLoans: {
      hasMortgagesOnProperty: true
    },
    realEstateOwned: {
      realEstateOwned: []
    },
    manuallyEnteredMortgage: {
      creditorName: "Derp Co",
      monthlyPaymentAmount: 9999,
      unpaidBalanceAmount: 200000,
      isSelected: true,
      isRelated: true
    },
    combinedIncome: {
      borrowerAnnualIncome: "999,999",
      coborrowerAnnualIncome: "999,999"
    },
    cashOutInfo: {
      desiredAmount: 0
    }
  }
};
