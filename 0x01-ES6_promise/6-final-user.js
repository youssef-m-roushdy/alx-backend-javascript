import singUpUser from './4-user-promise'
import uploadPhoto from './5-photo-reject'

export default function handleProfileSignup(firstName, lastName, fileName) {
    const promises = [singUpUser(firstName, lastName), uploadPhoto(fileName)];

    return Promise.allSettled(promises).then((results) =>
        results
    );
}