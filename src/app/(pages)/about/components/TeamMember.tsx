'use client'

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export default function TeamMember({ name, role, bio, imageUrl }: TeamMemberProps) {
  return (
    <div className="text-center p-6">
      {/* Team member content */}
    </div>
  );
} 