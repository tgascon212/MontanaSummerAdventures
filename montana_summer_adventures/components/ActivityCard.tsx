import Link from "next/link";

interface ActivityCardProps {
  title: string;
  description: string;
  image: string;
}

// Convert title to URL-friendly slug
function titleToSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

export default function ActivityCard({ title, description, image }: ActivityCardProps) {
  const slug = titleToSlug(title);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-earth-800 mb-3">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          {description}
        </p>
        <Link
          href={`/adventures/${slug}`}
          className="inline-block text-earth-600 font-semibold hover:text-earth-800 transition-colors"
        >
          Learn More →
        </Link>
      </div>
    </div>
  );
}
