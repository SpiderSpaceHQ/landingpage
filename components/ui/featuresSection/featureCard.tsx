interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCard) {
  return (
    <div className="bg-purple-950/20 backdrop-blur-sm border border-purple-900/30 rounded-xl p-6 hover:bg-purple-900/30 transition-colors group">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}
