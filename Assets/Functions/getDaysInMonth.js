export default (getDaysInMonth => {
        let d = new Date()
        return new Date(d.getFullYear(), d.getMonth()+1, 0).getDate()
  })