const validateName = (name) => {
    if (name) {
        if(name.length < 100) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

const validateNum = (num) => {
    const reg = new RegExp('^[0-9]+$')
    if (num) {
        if (reg.test(num)) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

module.exports.validateName = validateName
module.exports.validateNum = validateNum