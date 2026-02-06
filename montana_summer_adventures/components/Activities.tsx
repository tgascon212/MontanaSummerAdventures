import ActivityCard from "./ActivityCard";

const activities = [
  {
    title: "River Float",
    description: "Experience the tranquility of Montana's pristine rivers as you float past stunning landscapes, wildlife, and the untouched beauty of Big Sky Country.",
    image: "/images/adventures/river-float.jpg",
  },
  {
    title: "Gold Panning",
    description: "Try your luck panning for gold in historic Montana streams. Learn authentic prospecting techniques and maybe strike it rich in the same waters that fueled the gold rush.",
    image: "/images/adventures/gold-panning.jpg",
  },
  {
    title: "Fishing",
    description: "Cast your line in world-class fishing waters. From trophy trout to guided fly fishing expeditions, Montana's rivers and lakes offer unforgettable angling experiences.",
    image: "/images/adventures/fishing.jpg",
  },
  {
    title: "Mountain Lake Trip",
    description: "Journey to pristine alpine lakes nestled high in the Montana mountains. Enjoy breathtaking views, crystal-clear waters, and the serenity of untouched wilderness.",
    image: "/images/adventures/mountain-lake-trip.jpg",
  },
  {
    title: "Shed Hunting",
    description: "Search for naturally shed elk and deer antlers in the Montana wilderness. A unique adventure that connects you with wildlife in their natural habitat.",
    image: "/images/adventures/shed-hunting.jpg",
  },
  {
    title: "Cattle Drive",
    description: "Live like a real cowboy on an authentic Montana cattle drive. Help move herds across open range while experiencing the cowboy way of life.",
    image: "/images/adventures/cattle-drive.jpg",
  },
  {
    title: "Trail Ride",
    description: "Explore Montana's stunning backcountry on horseback. Guided trail rides for all skill levels through mountain meadows, forests, and scenic valleys.",
    image: "/images/adventures/trail-ride.jpg",
  },
  {
    title: "Rifle Shooting",
    description: "Hone your marksmanship skills with professional instruction and quality equipment. Safe, fun, and educational shooting experiences for all skill levels.",
    image: "/images/adventures/rifle-shooting.jpg",
  },
  {
    title: "Wildlife Viewing",
    description: "Discover Montana's incredible wildlife including elk, deer, bears, eagles, and more. Guided tours led by experienced naturalists who know where the animals roam.",
    image: "/images/adventures/wildlife-viewing.jpg",
  },
];

export default function Activities() {
  return (
    <section id="activities" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-earth-800 mb-4">
            Summer Adventures
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our authentic Montana experiences. Each adventure is guided by experienced locals
            who know and love this land.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <ActivityCard key={index} {...activity} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-700 mb-6">
            Ready to experience the adventure of a lifetime?
          </p>
          <a
            href="#contact"
            className="inline-block bg-earth-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-earth-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Book Your Adventure Today
          </a>
        </div>
      </div>
    </section>
  );
}
