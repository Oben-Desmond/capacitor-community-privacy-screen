import { IonContent, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle } from '@ionic/react'
import React from 'react'

function NavigationMenu() {
    return (
         
                <IonList>
                    <IonMenuToggle>
                        <IonItem button>
                            <IonLabel>Home</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                    <IonMenuToggle>
                        <IonItem button>
                            <IonLabel>Shop</IonLabel>
                        </IonItem> </IonMenuToggle>
                    <IonMenuToggle>
                        <IonItem button>
                            <IonLabel>Blog</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                    <IonMenuToggle>
                        <IonItem button>
                            <IonLabel>Cart</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                    <IonMenuToggle>
                        <IonItem button>
                            <IonLabel>Logout</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                </IonList>
            
    )
}

export default NavigationMenu
