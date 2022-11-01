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

const validateUrl = (url) => {
    const reg = new RegExp('[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)')
    if (url) {
        if (reg.test(url)) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

const validateRecord = (record) => {
    if (validateName(record.artist) 
        && validateName(record.title)
        && validateNum(record.year)) {
            return true
        } else {
            return false
        }
}

module.exports.validateRecord = validateRecord