export class SessionStorage {
  static setItem (key, value) {
    try {
      sessionStorage.setItem(key, JSON.stringify(value))
      return true
    } catch (error) {
      console.log('SessionStorage setStorage error', error)
      return false
    }
  }
  static getItem (key) {
    try {
      return JSON.parse(sessionStorage.getItem(key))
    } catch (error) {
      console.log('SessionStorage getStorage error', error)
      return ''
    }
  }
}
