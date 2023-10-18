import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, query, where, getDocs, doc, setDoc, deleteDoc } from '@angular/fire/firestore';
import { IProducto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private firestore:Firestore) { }

  addProducto(producto:IProducto){
    const colRef = collection(this.firestore,'productos');
    addDoc(colRef, producto)
    .then(()=>{console.log('success');})
    .catch((err)=>{console.log(err);});
  }

  buscarProductoPorSerial(serial: string) {
    const productosCollection = collection(this.firestore, 'productos');
    const queryRef = query(productosCollection, where('serial', '==', serial));

    return getDocs(queryRef).then((querySnapshot) => {
      const resultados: any[] = [];
      querySnapshot.forEach((doc) => {
        resultados.push(doc.data());
      });
      return resultados;
    });
  }
 

  async borrarProductoPorSerial(serial: string) {
    try {
      const productosCollection = collection(this.firestore, 'productos');
      const queryRef = query(productosCollection, where('serial', '==', serial));
  
      const querySnapshot = await getDocs(queryRef);
  
      if (querySnapshot.size > 0) {
        const docToDelete = querySnapshot.docs[0]; // Suponiendo que solo debería haber uno con el mismo número de serie.
        await deleteDoc(docToDelete.ref);
      } else {
        console.error('Producto no encontrado');
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  async actualizarProducto(serial: string, nuevosDatos: any) {
    try {
        const productosCollection = collection(this.firestore, 'productos');
        const queryRef = query(productosCollection, where('serial', '==', serial));
        const querySnapshot = await getDocs(queryRef);

        if (querySnapshot.size > 0) {
            const docToUpdate = querySnapshot.docs[0];
            const productoId = docToUpdate.id;
            const productoRef = doc(productosCollection, productoId);

            await setDoc(productoRef, nuevosDatos, { merge: true });
        } else {
            console.error('Producto no encontrado');
        }
    } catch (error) {
        console.error(error);
    }
}

  

}
