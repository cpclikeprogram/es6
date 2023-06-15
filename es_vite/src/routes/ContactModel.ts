import { IContact } from "./Type";

let data:IContact[] = [

]

export async function loader() {
    const contacts = await getContacts();
    return { contacts };
}

export async function action(){
    const contact = await createContact();
    return {contact};
}

const createContact = ()=>{
    let contact:IContact = {
        id: "13",
        first: "13",
        last: "14",
        avatar: "",
        twitter: "@@@",
        notes: "some notes...",
        favorite: false
    }
    return contact;
}

const getContacts = () => {
    return fetch("/json/contact.json").then(data => data.json()).then(res => {
        return data.push(...res);
    }).catch(err => {
        console.error(err);
    })

}


export class ContactModel {
    data:IContact[] = []; 	//array of contact objects

}



export default data;