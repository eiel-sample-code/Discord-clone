import React, { useState, useEffect } from 'react'
import { onSnapshot, collection, DocumentData, query, CollectionReference, Query } from 'firebase/firestore';
import { db } from "../firebase.ts"

interface Channels {
    id:string;
    channel:DocumentData;
}

function useCollection(data: string) {
    const [ documents, setDocuments ] = useState<Channels[]>([]);

    const collectionRef: Query<DocumentData> = query(collection(db,"channels"));

    useEffect(()=>{
        onSnapshot(collectionRef, (querySnapshot)=>{
            const channelsResults: Channels[] = [];
            querySnapshot.docs.forEach((doc) => 
                channelsResults.push({
                    id: doc.id,
                    channel: doc.data(),
                })
            );
            setDocuments(channelsResults);
        });
    }, []);

  return { documents };
}

export default useCollection
