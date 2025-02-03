'use client'

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export default function TeamMember({ name, role, bio, imageUrl }: TeamMemberProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-32 h-32 mb-4 overflow-hidden rounded-full">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 mb-2">{role}</p>
      <p className="text-gray-500 text-sm">{bio}</p>
    </div>
  );
} 