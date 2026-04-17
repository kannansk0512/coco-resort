import heroResort from "@/assets/hero-resort.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import roomCottage from "@/assets/room-cottage.jpg";
import pool from "@/assets/pool.jpg";
import spa from "@/assets/spa.jpg";
import restaurant from "@/assets/restaurant.jpg";
import natureView from "@/assets/nature-view.jpg";
import activities from "@/assets/activities.jpg";

import nut1 from "@/assets/nut-1.jpg";
import nut2 from "@/assets/nut-2.jpg";

import cocoSuite1 from "@/assets/coco-suite-1.png";
import cocoSuite2 from "@/assets/coco-suite-2.png";

import forestCottage1 from "@/assets/forest-cottage-1.jpg";
import forestCottage2 from "@/assets/forest-cottage-2.jpg";

export const HOTEL = {
  name: "UDS COCO Hotels & Resorts",
  shortName: "UDS COCO",
  tagline: "Where Nature Meets Luxury",
  description:
    "Nestled in Udumalpet, surrounded by the majestic Western Ghats on three sides, UDS COCO Hotels & Resorts offers a serene escape with world-class amenities and warm South Indian hospitality.",
  address: "113/1B, Dhali Rd, Bogigoundendasarapatti, Tamil Nadu 642112",
  phone: "+91 99406 60939",
  email: "info@udscocoresorts.com",
  website: "https://udscocoresorts.com",
  checkIn: "2:00 PM",
  checkOut: "12:00 PM",
  rating: 4.1,
  reviewCount: 998,
  whatsapp: "919940660939",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.7!2d77.3!3d10.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDMwJzAwLjAiTiA3N8KwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000",
};

export const IMAGES = {
  hero: heroResort,
  roomDeluxe,
  roomSuite,
  roomCottage,
  pool,
  spa,
  restaurant,
  natureView,
  activities,
};

export const ROOMS = [
  {
    id: "nut-shell",
    name: "Nut Shell",
    type: "Standard",
    price: 3021,
    guests: 2,
    description:
      "A cozy retreat designed for couples and solo travelers, featuring modern comforts amidst natural surroundings with panoramic views of the Western Ghats.",
    image: roomDeluxe,
    images: [roomDeluxe, nut1, nut2],
    amenities: ["King Bed", "Mountain View", "Coffee Maker", "Wi-Fi", "AC", "TV"],
    size: "280 sq ft",
  },
  {
    id: "coco-suite",
    name: "Coco Suite",
    type: "Suite",
    price: 4978,
    guests: 3,
    description:
      "Our premium suite offers a spacious living area with private balcony, luxury furnishings, and breathtaking views of the lush valley and distant peaks.",
    image: roomSuite,
     images: [roomSuite, cocoSuite1, cocoSuite2],
    amenities: ["King Bed", "Private Balcony", "Living Area", "Coffee Maker", "Wi-Fi", "AC", "Mini Bar", "TV"],
    size: "450 sq ft",
  },
  {
    id: "forest-cottage",
    name: "Forest Cottage",
    type: "Cottage",
    price: 5500,
    guests: 4,
    description:
      "A charming wooden cottage nestled among the trees, perfect for families seeking a rustic yet luxurious escape. Features two bedrooms and a private garden.",
    image: roomCottage,
    images: [ roomCottage, forestCottage1, forestCottage2],
    amenities: ["Two Bedrooms", "Private Garden", "Coffee Maker", "Wi-Fi", "AC", "TV", "Dining Area"],
    size: "600 sq ft",
  },
];

export const AMENITIES = [
  { icon: "pool", name: "Swimming Pool", description: "Outdoor infinity pool with mountain views" },
  { icon: "parking", name: "Free Parking", description: "Complimentary on-site parking" },
  { icon: "breakfast", name: "Free Breakfast", description: "Daily buffet with local and continental options" },
  { icon: "wifi", name: "Free Wi-Fi", description: "High-speed internet throughout the property" },
  { icon: "spa", name: "Spa & Wellness", description: "Traditional Ayurvedic and modern spa treatments" },
  { icon: "restaurant", name: "Restaurant", description: "Multi-cuisine dining with local specialties" },
  { icon: "garden", name: "Coco Park", description: "Landscaped gardens for morning walks" },
  { icon: "coffee", name: "Coffee Maker", description: "In-room coffee maker in every room" },
];

export const TESTIMONIALS = [
  {
    name: "Aravinth Kumar",
    text: "Beautiful location, neat arrangements, tasty food and very polite staff. A perfect getaway from city life!",
    rating: 5,
  },
  {
    name: "Unni X",
    text: "Wonderful atmosphere, friendly staffs, excellent services, value for the money. Will definitely visit again.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    text: "The views from the resort are absolutely breathtaking. Waking up to the Western Ghats every morning was magical.",
    rating: 4,
  },
  {
    name: "Rajesh Menon",
    text: "Perfect place for a family vacation. Kids loved the pool and the nature walks. Staff was incredibly helpful.",
    rating: 5,
  },
];

export const ATTRACTIONS = [
  { name: "Anamalai Tiger Reserve", distance: "Nearby", rating: 4.3, description: "Nature reserve with wildlife like elephants & tigers" },
  { name: "Amaravathi Dam", distance: "24 mins", rating: 4.4, description: "Picturesque reservoir with boating & swimming" },
  { name: "Thirumoorthy Dam", distance: "18 mins", rating: 4.5, description: "Scenic dam with temple nearby" },
  { name: "Thirumoorthy Waterfalls", distance: "23 mins", rating: 4.5, description: "Beautiful cascading waterfalls" },
  { name: "Thirumoorthy Temple", distance: "23 mins", rating: 4.5, description: "Ancient temple atop a hill" },
  { name: "Amaravathi Crocodile Farm", distance: "28 mins", rating: 3.9, description: "Crocodile conservation center" },
  { name: "Udumalai Tirupathi", distance: "5 mins", rating: 4.6, description: "Sacred temple nearby" },
  { name: "Topslip", distance: "Nearby", rating: 4.3, description: "Hilltop viewpoint inside the tiger reserve" },
];

export const ACTIVITIES = [
  { name: "Nature Trekking", description: "Guided treks through the Western Ghats with stunning viewpoints", image: activities },
  { name: "Wildlife Safari", description: "Explore the Anamalai Tiger Reserve and spot exotic wildlife", image: natureView },
  { name: "Boating", description: "Enjoy peaceful boating at Amaravathi Dam reservoir", image: pool },
  { name: "Ayurvedic Spa", description: "Rejuvenate with traditional Ayurvedic treatments", image: spa },
  { name: "Temple Visits", description: "Visit ancient temples including Thirumoorthy and Udumalai", image: restaurant },
  { name: "Photography Tours", description: "Capture the beauty of the Ghats with guided photo tours", image: natureView },
];

export const OFFERS = [
  {
    title: "Weekend Getaway Package",
    discount: "20% Off",
    description: "Book 2 nights on weekends and enjoy 20% off on room tariff with complimentary breakfast.",
    validUntil: "Valid until June 2026",
  },
  {
    title: "Honeymoon Special",
    discount: "25% Off",
    description: "Celebrate your love with our Coco Suite — includes candlelit dinner, spa session, and decorated room.",
    validUntil: "Valid year-round",
  },
  {
    title: "Family Fun Package",
    discount: "15% Off",
    description: "Book our Forest Cottage for 3+ nights and get complimentary activities for kids and a family dinner.",
    validUntil: "Valid until Dec 2026",
  },
  {
    title: "Carriage Ride Discount",
    discount: "5% Off",
    description: "Get 5% off on Carriage or Cart Ride when booking through our website. Plus ₹50 flat discount.",
    validUntil: "Limited time offer",
  },
];

export const GALLERY_IMAGES = [
  { src: heroResort, category: "outdoors", alt: "Resort aerial view" },
  { src: roomDeluxe, category: "rooms", alt: "Deluxe room" },
  { src: roomSuite, category: "rooms", alt: "Premium suite" },
  { src: pool, category: "outdoors", alt: "Swimming pool" },
  { src: spa, category: "dining", alt: "Spa treatment" },
  { src: restaurant, category: "dining", alt: "Restaurant" },
  { src: roomCottage, category: "rooms", alt: "Forest cottage" },
  { src: natureView, category: "outdoors", alt: "Mountain view" },
  { src: activities, category: "outdoors", alt: "Nature trekking" },
];
