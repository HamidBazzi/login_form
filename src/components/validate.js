const validate = (data, type) => {
    const errors = {}

    if(!data.email) errors.email = 'email is required'
    else if(!/\S+@\S+\.\S+/.test(data.email)) errors.email = 'email is invalid'
    else delete errors.email

    if(!data.password) errors.password = 'Password is required'
    else if(data.password.length < 6) errors.password = 'Password need to be 6 characters or more'
    else delete errors.password


    if(type === 'signup'){
        if(!data.name.trim()) errors.name = 'name is required'
        else delete errors.name

        if(!data.confirmPassword) errors.confirmPassword = 'Confirm the password'
        else if(data.password !== data.confirmPassword) errors.confirmPassword = 'Password do not match'

        if(data.isAccepted) delete errors.isAccepted
        else errors.isAccepted = 'Accept our regulations'
    }

    return errors
}

export default validate