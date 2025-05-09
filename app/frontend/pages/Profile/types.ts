export interface ProfileType {
  id: number
  name: string
  bio: string
}

export type ProfileFormType = Omit<ProfileType, 'id'>
