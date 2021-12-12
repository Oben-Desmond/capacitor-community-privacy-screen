import { IonButton, IonButtons, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCol, IonFab, IonFabButton, IonGrid, IonIcon, IonImg, IonItem, IonRow, IonToolbar } from '@ionic/react'
import { heart, star } from 'ionicons/icons'
import React from 'react'
import './card.css'

const img = `https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1623959191-medium-plant-dieffenbachia-white-pot_2048x.jpg`

const ItemCard: React.FC = () => {
  return (
    <div >
      <IonCard mode={`ios`}>
        <IonFab className={`fav-fab`} horizontal={`end`} vertical={`top`}>
          <IonButton shape={`round`} fill={`clear`} >
            <IonIcon color={`medium`} icon={heart}></IonIcon>
          </IonButton>
        </IonFab>
        <IonImg src={img}></IonImg>
        <IonCardContent>
          <h2>Mostre</h2>
          <IonItem lines={`none`}>
            <IonButtons>{
              [1, 1, 1, 1, 1].map(res => <IonButton>
                <IonIcon size={`small`} icon={star} color={`warning`}></IonIcon>
              </IonButton>)}
            </IonButtons> <small>(85)</small>
          </IonItem>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonCardSubtitle><small>Price</small></IonCardSubtitle>
                <h2><b>$30</b></h2>
              </IonCol>
              <IonCol>
                <IonButton color={`medium`} fill={`outline`}> Add to Cart</IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCardContent>
      </IonCard>
    </div>
  )
}


export default ItemCard

