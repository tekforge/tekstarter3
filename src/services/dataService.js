import { 
  doc,
  getDoc, 
  getDocs, 
  collection, 
  query, 
  where,
  documentId,
} from "firebase/firestore";
import { db } from "../firebase"

export default {
  getAll: (model) => {
    console.log('dataService:getAll', model)
    return new Promise( async (resolve, reject) => {
      const modelData = await getDocs(collection(db, model));
      if (!modelData || modelData?.empty) {
        reject([]);
      }
      let items = [];
      modelData.forEach((doc) => {
        let item = doc.data()
        item.id = doc.id;
        items.push(item)
      });
      resolve(items);
    })
  },
  getAllInArray: (model, array) => {
    console.log('dataService:getAllInArray', model, array)
    const batches = []
    while (array.length) {
      const batch = array.splice(0, 10),
        q = query(collection(db, model), where(documentId(), "in", [...batch]))
      batches.push(
        getDocs(q)
        .then(results => results.docs.map(result => ({ id: result.id, ...result.data() }) ))
      )
    }
    return Promise.all(batches)
    .then(content => content.flat());
  },
  getAllRelation: (model, relation, relationId) => {
    console.log('dataService:getAllRelation', model, relation, relationId)
    return new Promise( async(resolve, reject) => {
      const q = query(collection(db, model), where(relation, "array-contains", relationId)),
        modelData = await getDocs(q);
      if (!modelData || modelData?.empty) {
        reject([]);
      }
      let items = [];
      modelData.forEach((doc) => {
        let item = doc.data()
        item.id = doc.id;
        items.push(item)
      });
      resolve(items);
    })
  },
  get: (model, identifier) => {
    console.log('dataService:get', model, identifier)
    return new Promise( async(resolve, reject) => {
      const modelData = await getDoc(doc(db, model, identifier));
      if (!modelData || !modelData?.exists) {
        reject({});
      }
      let item = modelData.data()
      item.id = modelData.id;
      resolve(item);
    })
  }
};

 
