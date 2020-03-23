import { createSelector } from 'reselect'

const getEmployees = (state) => state.employees.data
const getSearchTerm = (state) => state.employees.searchTerm

export const getVisibleEmployees = createSelector(
  [ getSearchTerm, getEmployees ],
  (searchTerm, employees) => {
    return employees.reduce((acc, obj) => {
      console.log(acc)
      if(obj.DisplayName !== undefined && obj.DisplayName !== null) {
        console.log(obj.DisplayName)
        if (obj.DisplayName.toLowerCase().includes(searchTerm) ||
            obj.JobTitle.toLowerCase().includes(searchTerm) ||
            obj.Company.toLowerCase().includes(searchTerm) ||
            obj.Email.toLowerCase().includes(searchTerm) ||
            obj.telephoneNumber.replace(/-/gi,'').includes(searchTerm) ||
            obj.gcCityEnglish.toLowerCase().includes(searchTerm) ||
            obj.gcProvinceEnglish.toLowerCase().includes(searchTerm)) {
          acc.push(obj)
        }
      }
      return acc
    }, [])
  }
)