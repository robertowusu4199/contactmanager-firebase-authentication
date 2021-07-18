import { getFirestore } from "redux-firestore"

export function addContactAction(newContact) {
    return async (dispatch, state, { getFirestore }) => {
        const db = getFirestore()
        try {
            await db.collection('Contacts').add(newContact)
        }
        catch (error) {
            console.log(error)
        }

    }
}

export function getAllContactsAction() {
    return (dispatch, state, { getFirestore }) => {
        const db = getFirestore()
        db.collection('Contacts').onSnapshot(
            (results) => {
                let contactsindb = []
                results.forEach((doc) => {
                    let contact = doc.data()
                    contact.id = doc.id
                    contactsindb.push(contact)
                })

                dispatch({
                    type: "GET_ALL_CONTACTS",
                    payload: contactsindb
                })

            }, (error) => {
                console.log(error)
            }
        )

    }
}

export function editContactAction(id, updatedContact) {
    return async (dispatch, state, { getFirestore }) => {
        let db = getFirestore()
        try {
            await db.collection('Contacts').doc(id).update(updatedContact)
        }
        catch (error) {
            console.log(error)
        }
    }
}

export function deleteContactAction(id) {
    return async (dispatch, state, { getFirestore }) => {
        let db = getFirestore()

        try {
            await db.collection('Contacts').doc(id).delete()
        }
        catch (error) {
            console.log(error)
        }
    }
}






//Before the Authentication

/*export function addContactAction (newContact) {
    return {
        type: "ADD_NEW_CONTACT",
        payload: newContact
    }
}

export function deleteContactAction(id){
    return{
        type: 'DELETE_CONTACT',
        payload: id
    }
 }

export function editContactAction (id, updatedContact){
    console.log("nau",updatedContact)

     return{
     type: 'EDIT_CONTACT',
    payload: {
       id: id,
        updatedContactInfo : updatedContact
    }
  }
}*/


//Adding the Authentication

/*export function addContact(newContact) {
    return (dispatch, state, { getFirestore }) => {
        const db = getFirestore()
        db.collection('Contacts')
            .add(newContact)
            .then(() => {
                dispatch({
                    type: "ADD_CONTACT",
                    payload: newContact
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }
}


export function getAllContactsAction() {
    return (dispatch, state, { getFirestore }) => {
        const db = getFirestore()
        db.collection('Contacts')
            .get()
            //this gives you a snapshot of all the documents in the collection
            //you can give it any variable, which i have named results
            .then((results) => {
                let contactsindb = []//create an array to take all users from the database
                results.forEach((doc) => { //send each document to the users array
                    let contact = doc.data()
                    contact.id = doc.id
                    contactsindb.push(doc.data())
                })

                dispatch({ //now send the data to the reducer
                    type: "GET_ALL_CONTACTS",
                    payload: contactsindb
                })

            })
            .catch((error) => {
                console.log(error)
            })
    }


}*/