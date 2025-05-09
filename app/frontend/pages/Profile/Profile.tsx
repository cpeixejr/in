import { ProfileType } from './types'

interface ProfileProps {
  profile: ProfileType
}

export default function Profile({ profile }: ProfileProps) {
  return (
    <div>
      <p className="my-5">
        <strong className="block font-medium mb-1">Name:</strong>
        {profile.name?.toString()}
      </p>
      <p className="my-5">
        <strong className="block font-medium mb-1">Bio:</strong>
        {profile.bio?.toString()}
      </p>
    </div>
  )
}
