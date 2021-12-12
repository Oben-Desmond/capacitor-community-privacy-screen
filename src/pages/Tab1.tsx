import { IonButton, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';
import React from 'react';
import ItemCard from '../components/ItemCard';

const Tab1: React.FC = () => {


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonMenuButton menu={`navigate`}></IonMenuButton>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
           <ItemCard></ItemCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
