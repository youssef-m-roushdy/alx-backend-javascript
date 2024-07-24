import singUpUser from './4-user-promise'
import uploadPhoto from './5-photo-reject'

export default async function handleProfileSignup(firstName, lastName, fileName) {
    return Promise
    .allSettled([singUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => (
        results.map((result) => ({
            status: result.status,
            value: result.status === 'fulfilled' ? result : String(result.reason)
        }))
    ));
}