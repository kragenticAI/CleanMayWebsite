import { Check } from 'lucide-react';

interface ChecklistSectionProps {
  title: string;
  items: string[];
}

export default function ChecklistSection({ title, items }: ChecklistSectionProps) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <Check
              aria-hidden="true"
              className="h-5 w-5 text-[#2937b1] mr-3 mt-1 flex-shrink-0"
            />
            <span className="text-lg text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
