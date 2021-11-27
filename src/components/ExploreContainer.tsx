import React from 'react';
import './ExploreContainer.css';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import * as privacy from '@capacitor-community/privacy-screen';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  function setPrivate(){
    privacy.PrivacyScreen.enable()
}
function setnonPrivate(){
  privacy.PrivacyScreen.disable()
}
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      <IonButton onClick={setPrivate}>
              private
            </IonButton>
            <IonButton onClick={setnonPrivate}>
              non private
            </IonButton>
    </div>
  );
};

export default ExploreContainer;
