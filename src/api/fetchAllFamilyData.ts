import { familyMembers } from './data'
import { RawFamilyMember } from 'src/types/family_member'

async function fetchData(member: RawFamilyMember) {
  try {
    const response = await fetch(member.datasource)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const json = await response.json()
    return {
      id: member.id,
      name: member.name,
      photo: member.photo,
      data: json
    }
  } catch (error) {
    console.error('Error fetching data: ', error)
  }
}

async function fetchAllFamilyData() {
  const fetchPromises = familyMembers.map(member => fetchData(member))

  try {
    const results = await Promise.all(fetchPromises)
    return results
  } catch (error) {
    console.error('Error in fetching data for family members: ', error)
  }
}

export {
  fetchAllFamilyData
}