import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

interface Adventure {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  duration: string;
  difficulty: string;
  bestTime: string;
  included: string[];
  whatToBring: string[];
  details: string[];
}

const adventures: Record<string, Adventure> = {
  "river-float": {
    slug: "river-float",
    title: "River Float",
    description: "Experience the tranquility of Montana's pristine rivers as you float past stunning landscapes, wildlife, and the untouched beauty of Big Sky Country.",
    longDescription: "Drift along Montana's pristine rivers and immerse yourself in the untouched beauty of Big Sky Country. Our guided river float trips offer a peaceful way to experience Montana's stunning landscapes while keeping an eye out for wildlife along the banks. Whether you're looking for a relaxing family outing or a scenic adventure, our experienced guides will ensure a memorable experience on the water.",
    image: "/images/adventures/river-float.jpg",
    duration: "Half-day (4 hours) or Full-day (8 hours)",
    difficulty: "Easy - Suitable for all ages and skill levels",
    bestTime: "June through September",
    included: [
      "Professional river guide",
      "All safety equipment and life jackets",
      "Fishing equipment (if desired)",
      "Snacks and beverages",
      "Transportation to and from river access points",
    ],
    whatToBring: [
      "Sunscreen and sunglasses",
      "Hat and light jacket",
      "Camera (waterproof recommended)",
      "Comfortable clothing that can get wet",
      "Water shoes or sandals with straps",
    ],
    details: [
      "Perfect for families, couples, and groups",
      "Wildlife viewing opportunities including eagles, deer, and osprey",
      "Peaceful and relaxing experience",
      "No prior experience necessary",
      "Multiple river options available based on water levels and preferences",
    ],
  },
  "gold-panning": {
    slug: "gold-panning",
    title: "Gold Panning",
    description: "Try your luck panning for gold in historic Montana streams. Learn authentic prospecting techniques and maybe strike it rich in the same waters that fueled the gold rush.",
    longDescription: "Step back in time and experience the thrill of the Montana gold rush! Learn authentic gold panning techniques from experienced prospectors in the same streams where fortunes were made over a century ago. Our guides will teach you how to properly pan for gold and share fascinating stories of Montana's rich mining history. Take home any gold you find as a unique Montana souvenir!",
    image: "/images/adventures/gold-panning.jpg",
    duration: "3-4 hours",
    difficulty: "Easy - Great for all ages",
    bestTime: "May through October",
    included: [
      "Gold panning equipment and instruction",
      "Expert guide with historical knowledge",
      "Access to productive panning locations",
      "Small vial to keep your gold findings",
      "Historical stories and gold rush tales",
    ],
    whatToBring: [
      "Waterproof boots or old shoes",
      "Clothes that can get wet and dirty",
      "Sun protection (hat, sunscreen)",
      "Camera to capture your finds",
      "Sense of adventure!",
    ],
    details: [
      "Authentic Montana gold rush experience",
      "Learn techniques used by real prospectors",
      "Keep all the gold you find",
      "Great educational activity for kids",
      "Historic mining sites with proven gold deposits",
    ],
  },
  "fishing": {
    slug: "fishing",
    title: "Fishing",
    description: "Cast your line in world-class fishing waters. From trophy trout to guided fly fishing expeditions, Montana's rivers and lakes offer unforgettable angling experiences.",
    longDescription: "Montana is renowned worldwide for its exceptional trout fishing, and our guided fishing trips put you on the best waters in Big Sky Country. Whether you're an experienced angler or trying fly fishing for the first time, our expert guides know where the fish are biting and will help you land the catch of a lifetime. Fish pristine rivers and streams for native cutthroat, rainbow, brown, and brook trout in some of the most beautiful settings imaginable.",
    image: "/images/adventures/fishing.jpg",
    duration: "Half-day (4-5 hours) or Full-day (8+ hours)",
    difficulty: "All skill levels welcome",
    bestTime: "June through October (peak: July-September)",
    included: [
      "Professional fishing guide",
      "High-quality rods, reels, and flies",
      "Waders and boots (if needed)",
      "Fishing license for the day",
      "Lunch on full-day trips",
      "Photos of your catch",
    ],
    whatToBring: [
      "Polarized sunglasses",
      "Hat and sunscreen",
      "Layered clothing",
      "Camera",
      "Personal snacks and water",
    ],
    details: [
      "World-class trout fishing",
      "Fly fishing and spin casting options",
      "Wade fishing or float trips available",
      "Instruction for beginners",
      "Catch and release or keep your limit",
      "Multiple river and stream options",
    ],
  },
  "mountain-lake-trip": {
    slug: "mountain-lake-trip",
    title: "Mountain Lake Trip",
    description: "Journey to pristine alpine lakes nestled high in the Montana mountains. Enjoy breathtaking views, crystal-clear waters, and the serenity of untouched wilderness.",
    longDescription: "Escape to the high country and discover Montana's hidden alpine gems. Our mountain lake trips take you to pristine, crystal-clear lakes nestled among towering peaks where few people venture. These backcountry destinations offer incredible scenery, peaceful solitude, and opportunities for fishing, wildlife viewing, and photography. Experience the true wilderness of Montana's mountain lakes with experienced guides who know the best trails and secret spots.",
    image: "/images/adventures/mountain-lake-trip.jpg",
    duration: "Full-day (8-10 hours including travel)",
    difficulty: "Moderate - Some hiking required",
    bestTime: "July through September",
    included: [
      "Experienced wilderness guide",
      "Transportation to trailhead",
      "Packed gourmet lunch",
      "Fishing equipment (optional)",
      "Bear safety equipment",
      "First aid kit and emergency supplies",
    ],
    whatToBring: [
      "Sturdy hiking boots",
      "Layered clothing (weather can change quickly)",
      "Rain jacket",
      "Daypack",
      "Water bottle",
      "Camera and binoculars",
      "Sunscreen and hat",
    ],
    details: [
      "Stunning alpine scenery",
      "Pristine mountain lakes",
      "Wildlife viewing opportunities",
      "Alpine fishing for native trout",
      "Photography paradise",
      "Small group sizes for personalized experience",
      "Moderate hiking (2-4 miles round trip)",
    ],
  },
  "shed-hunting": {
    slug: "shed-hunting",
    title: "Shed Hunting",
    description: "Search for naturally shed elk and deer antlers in the Montana wilderness. A unique adventure that connects you with wildlife in their natural habitat.",
    longDescription: "Discover the ancient tradition of shed hunting in Montana's wilderness. Every spring, elk and deer naturally shed their antlers, leaving behind treasured finds for those who know where to look. Our experienced guides will take you to prime shed hunting areas and teach you how to spot these natural treasures while learning about wildlife behavior, habitat, and conservation. This unique adventure combines outdoor exploration with wildlife education and the thrill of the hunt - without harming any animals.",
    image: "/images/adventures/shed-hunting.jpg",
    duration: "Half-day (4 hours) or Full-day (8 hours)",
    difficulty: "Moderate - Involves hiking and searching",
    bestTime: "May through June (after shed season)",
    included: [
      "Expert shed hunting guide",
      "Transportation to hunting grounds",
      "Instruction on shed hunting techniques",
      "Wildlife tracking education",
      "Snacks and beverages",
      "You keep all sheds you find!",
    ],
    whatToBring: [
      "Comfortable hiking boots",
      "Layered outdoor clothing",
      "Daypack for carrying finds",
      "Camera",
      "Binoculars",
      "Water and personal snacks",
      "Gloves for handling antlers",
    ],
    details: [
      "Unique Montana wilderness experience",
      "Keep all antlers you discover",
      "Learn wildlife tracking skills",
      "Understand elk and deer behavior",
      "Great for collectors and nature enthusiasts",
      "Physical activity with rewarding finds",
      "Educational and exciting for all ages (10+)",
    ],
  },
  "cattle-drive": {
    slug: "cattle-drive",
    title: "Cattle Drive",
    description: "Live like a real cowboy on an authentic Montana cattle drive. Help move herds across open range while experiencing the cowboy way of life.",
    longDescription: "Experience the authentic Western lifestyle on a real Montana cattle drive! Work alongside experienced ranch hands as you help move cattle across open rangeland, just as cowboys have done for over a century. This isn't a staged show - it's real ranch work in beautiful Montana country. Learn horsemanship skills, cattle handling techniques, and what it takes to run a working ranch. End the day around the campfire with cowboy stories, good food, and the satisfaction of a hard day's work well done.",
    image: "/images/adventures/cattle-drive.jpg",
    duration: "Full-day (6-8 hours) or Multi-day options available",
    difficulty: "Moderate to Challenging - Riding experience recommended",
    bestTime: "May through September",
    included: [
      "Well-trained ranch horses matched to your skill level",
      "Experienced ranch hands and wranglers",
      "Authentic ranch-style meals",
      "Horsemanship instruction",
      "All tack and equipment",
      "Genuine working ranch experience",
    ],
    whatToBring: [
      "Long pants (jeans recommended)",
      "Boots with a heel",
      "Hat (cowboy hat or ball cap)",
      "Bandana",
      "Sunscreen",
      "Jacket for early morning",
      "Gloves (optional)",
    ],
    details: [
      "Authentic working cattle drive",
      "Real ranch experience, not a show",
      "Learn horsemanship and cattle handling",
      "Work alongside experienced cowboys",
      "Beautiful open rangeland",
      "Ranch-style meals included",
      "Some riding experience recommended",
      "Maximum group sizes for safety",
    ],
  },
  "trail-ride": {
    slug: "trail-ride",
    title: "Trail Ride",
    description: "Explore Montana's stunning backcountry on horseback. Guided trail rides for all skill levels through mountain meadows, forests, and scenic valleys.",
    longDescription: "Discover the beauty of Montana the way it was meant to be experienced - on horseback. Our guided trail rides take you through stunning mountain meadows, pristine forests, and scenic valleys that are inaccessible by vehicle. We have gentle, well-trained horses suitable for beginners as well as spirited mounts for experienced riders. Whether you want a peaceful one-hour ride or a full-day backcountry adventure, our wranglers will match you with the perfect horse and trail for an unforgettable Montana experience.",
    image: "/images/adventures/trail-ride.jpg",
    duration: "1 hour, 2 hours, Half-day, or Full-day options",
    difficulty: "Easy to Moderate - All skill levels welcome",
    bestTime: "May through October",
    included: [
      "Gentle, well-trained horses",
      "Experienced trail guides",
      "All tack and safety equipment",
      "Riding instruction for beginners",
      "Snacks on longer rides",
      "Stunning Montana scenery",
    ],
    whatToBring: [
      "Long pants",
      "Closed-toe shoes with a heel (boots preferred)",
      "Layers for changing weather",
      "Sunscreen and hat",
      "Camera",
      "Water bottle for longer rides",
    ],
    details: [
      "Suitable for all ages and skill levels",
      "No prior riding experience necessary",
      "Horses matched to rider ability",
      "Spectacular mountain and valley views",
      "Wildlife viewing opportunities",
      "Family-friendly",
      "Small group sizes",
      "Various trail options from easy to challenging",
    ],
  },
  "rifle-shooting": {
    slug: "rifle-shooting",
    title: "Rifle Shooting",
    description: "Hone your marksmanship skills with professional instruction and quality equipment. Safe, fun, and educational shooting experiences for all skill levels.",
    longDescription: "Whether you're a seasoned marksman or have never fired a rifle, our professional shooting instruction provides a safe, educational, and exciting experience. Learn proper rifle handling, shooting fundamentals, and marksmanship skills from certified instructors at our private shooting range. We provide quality firearms, ammunition, and safety equipment while teaching responsible gun ownership and shooting techniques. This is an excellent opportunity to improve your skills in preparation for hunting season or simply enjoy the sporting tradition of target shooting.",
    image: "/images/adventures/rifle-shooting.jpg",
    duration: "2-3 hours",
    difficulty: "All skill levels - Beginners welcome",
    bestTime: "Year-round (weather permitting)",
    included: [
      "Certified firearms instructor",
      "Quality rifles and ammunition",
      "All safety equipment (eye and ear protection)",
      "Target practice materials",
      "Safety instruction and range rules",
      "Personal coaching and tips",
    ],
    whatToBring: [
      "Long pants and closed-toe shoes",
      "Comfortable outdoor clothing",
      "Hat with brim (baseball cap style)",
      "Jacket for cooler weather",
      "Positive attitude and willingness to learn",
    ],
    details: [
      "Private shooting range",
      "Safety is our top priority",
      "Professional, certified instruction",
      "Multiple rifle options to try",
      "Learn proper shooting fundamentals",
      "Great preparation for hunting season",
      "Suitable for first-time shooters",
      "Small class sizes for personalized attention",
      "Minimum age: 12 years (with adult supervision)",
    ],
  },
  "wildlife-viewing": {
    slug: "wildlife-viewing",
    title: "Wildlife Viewing",
    description: "Discover Montana's incredible wildlife including elk, deer, bears, eagles, and more. Guided tours led by experienced naturalists who know where the animals roam.",
    longDescription: "Montana is home to an incredible diversity of wildlife, and our expert naturalist guides know exactly where to find them. From majestic elk and deer to black bears, bald eagles, and countless other species, our wildlife viewing tours offer exceptional opportunities to observe and photograph animals in their natural habitat. We travel to prime viewing locations at optimal times of day, using spotting scopes and binoculars to get close-up views while maintaining safe and respectful distances. Perfect for nature enthusiasts, photographers, and families who want to experience Montana's wild side.",
    image: "/images/adventures/wildlife-viewing.jpg",
    duration: "Half-day (4 hours) - Dawn or Dusk tours, or Full-day (8 hours)",
    difficulty: "Easy - Minimal walking required",
    bestTime: "Year-round (different species by season)",
    included: [
      "Expert naturalist guide",
      "Comfortable transportation",
      "Spotting scopes and binoculars",
      "Wildlife identification guides",
      "Snacks and beverages",
      "Photography tips and assistance",
    ],
    whatToBring: [
      "Camera with telephoto lens (if available)",
      "Binoculars (if you have them)",
      "Layered clothing for changing temperatures",
      "Quiet, earth-tone clothing",
      "Notebook for observations",
      "Field guide (optional)",
    ],
    details: [
      "Elk, deer, moose, black bears, and more",
      "Bald eagles, hawks, and diverse bird species",
      "Professional naturalist guides",
      "Prime viewing locations and timing",
      "Learn animal behavior and ecology",
      "Photography opportunities",
      "Suitable for all ages",
      "Dawn and dusk tours for best viewing",
      "Small groups for minimal impact",
      "Respect for wildlife and habitat",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(adventures).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const adventure = adventures[slug];

  if (!adventure) {
    return {
      title: "Adventure Not Found",
    };
  }

  return {
    title: `${adventure.title} | Montana Summer Adventures`,
    description: adventure.description,
    keywords: `Montana ${adventure.title}, ${adventure.title} Montana, Montana adventures, outdoor activities Montana`,
  };
}

export default async function AdventurePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const adventure = adventures[slug];

  if (!adventure) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${adventure.image})` }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            {adventure.title}
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto drop-shadow-md">
            {adventure.description}
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About This Adventure</h2>
          <p className="text-lg text-gray-800 leading-relaxed">{adventure.longDescription}</p>
        </div>
      </section>

      {/* Trip Details Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Trip Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-earth-50 to-earth-100 border-2 border-earth-200 p-8 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Duration</h3>
              <p className="text-gray-800">{adventure.duration}</p>
            </div>
            <div className="bg-gradient-to-br from-earth-50 to-earth-100 border-2 border-earth-200 p-8 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Difficulty</h3>
              <p className="text-gray-800">{adventure.difficulty}</p>
            </div>
            <div className="bg-gradient-to-br from-earth-50 to-earth-100 border-2 border-earth-200 p-8 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Best Time</h3>
              <p className="text-gray-800">{adventure.bestTime}</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What&apos;s Included</h2>
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {adventure.included.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl font-bold">✓</span>
                  <span className="text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What to Bring Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What to Bring</h2>
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {adventure.whatToBring.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-earth-600 mr-3 text-xl">•</span>
                  <span className="text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Adventure Highlights Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Adventure Highlights</h2>
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <ul className="space-y-4">
              {adventure.details.map((detail, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-yellow-600 mr-3 text-xl">★</span>
                  <span className="text-gray-800 text-lg">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-earth-600 to-earth-700 p-10 md:p-16 rounded-xl text-center shadow-2xl">
            <h2 className="text-4xl font-bold text-white mb-6">Ready for This Adventure?</h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Contact us today to book your {adventure.title} experience. We&apos;ll answer any questions
              and help you plan the perfect Montana adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="bg-white text-earth-700 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                Book This Adventure
              </Link>
              <Link
                href="/#activities"
                className="bg-earth-800 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-earth-900 transition-all transform hover:scale-105 shadow-lg"
              >
                View All Adventures
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
