import { Head, Link } from '@inertiajs/react'
import Profile from './Profile'
import { ProfileType } from './types'

interface ShowProps {
  profile: ProfileType
  flash: { notice?: string }
}

export default function Show({ profile, flash }: ShowProps) {
  return (
    <>
      <Head title={`Profile #${profile.id}`} />

      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        <div className="mx-auto">
          {flash.notice && (
            <p className="py-2 px-3 bg-green-50 mb-5 text-green-500 font-medium rounded-lg inline-block">
              {flash.notice}
            </p>
          )}

          <h1 className="font-bold text-4xl">Profile #{profile.id}</h1>

          <Profile profile={profile} />

          <Link
            href={`/profiles/${profile.id}/edit`}
            className="mt-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
          >
            Edit this profile
          </Link>
          <Link
            href="/profiles"
            className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
          >
            Back to profiles
          </Link>
          <div className="inline-block ml-2">
            <Link
              href={`/profiles/${profile.id}`}
              as="button"
              method="delete"
              className="mt-2 rounded-lg py-3 px-5 bg-gray-100 font-medium"
            >
              Destroy this profile
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
