import { atom, selector } from "recoil";

export const newtowrkAtom  = atom({
    key:"newtowrkAtom",
    default:102
})

export const jobsAtom  = atom({
    key:"jobsAtom",
    default:0
})

export const notificationAtom  = atom({
    key:"notificationAtom",
    default:0
})


export const MessagingAtom  = atom({
    key:"MessagingAtom",
    default:12
})


export const totalSelector = selector({
    key: "totalSelector",
    get:(props) => {

       const  newtowrkAtomCount = props.get(newtowrkAtom)
       const  jobsAtomCount = props.get(jobsAtom)
       const  notificationAtomCount = props.get(notificationAtom)
       const  MessagingAtomCount = props.get(MessagingAtom)
      
       return newtowrkAtomCount+jobsAtomCount+notificationAtomCount+MessagingAtomCount

    }
})