/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Booking {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  passportId: string;
  companyName?: string;
  desiredService: string;
  productOfInterest?: string;
  estimatedWeightKg: number;
  date: string;
  timeSlot: string;
  securityDisclaimerAccepted: boolean;
  notes?: string;
  bookingRef: string;
  createdAt: string;
  status: 'Pending Verification' | 'Approved' | 'Requires Security Screening';
}

export interface SEOMeta {
  title: string;
  metaDescription: string;
  keywords: string;
  focusKeyword: string;
  ogImage: string;
}

export interface GoldProduct {
  id: string;
  name: string;
  purity: string;
  form: string;
  origin: string;
  availability: string;
  description: string;
  longDescription: string;
  specifications: { label: string; value: string }[];
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  location: string;
  text: string;
  avatar: string;
  verified: boolean;
  purchaseDetails: string;
}

export interface GoldRates {
  spotUSDPerOz: number;
  spotUSDPerGram: number;
  spotUGXPerGram: number;
  ugandaDiscountedPerGram: number; // For Dore / unrefined
  lastUpdated: string;
}
