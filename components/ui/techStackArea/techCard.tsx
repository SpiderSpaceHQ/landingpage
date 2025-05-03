interface TechCard {
  title: string;
  items: string[];
}

export function TechCard({ title, items }: TechCard) {
  return (
    <div className="bg-purple-950/20 backdrop-blur-sm border border-purple-900/30 rounded-xl p-6">
      <h3 className="text-xl font-bold mb-4 text-purple-400">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-2">
            <span className="text-purple-500">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
