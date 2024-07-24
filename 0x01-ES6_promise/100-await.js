import {uploadPhoto, createUser} from './utils'

export default async function(asyncUploadUser) {
    try{
        uploadPhoto()
        createUser()
    }catch(err) {
        return {photo: null, user: null}
    }

    return Promise.all([uploadPhoto(), createUser()]).then((results) => (
        {photo: results[0], user: results[1]}
    ))
}