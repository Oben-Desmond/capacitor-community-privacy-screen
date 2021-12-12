import { IonAvatar, IonBadge, IonButton, IonButtons, IonCol, IonGrid, IonIcon, IonImg, IonItem, IonMenuButton, IonRow, IonToolbar } from '@ionic/react'
import { cartOutline, mailOutline } from 'ionicons/icons'
import React from 'react'
import NavigationMenu from './NavigationMenu'

const WebToolbar: React.FC = function () {
    return (
        <IonToolbar className={`web`} style={{ borderBottom: `1px solid #e9e9e977` }}>
            <IonButtons>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonRow>
                                <IonCol>
                                    <IonButton color={`success`}>SHOP</IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton >Work Shops</IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton >Blog</IonButton>
                                </IonCol>
                            </IonRow>
                            <IonMenuButton></IonMenuButton>
                        </IonCol>
                        <IonCol>
                            <IonToolbar style={{ textAlign: `right` }}>
                                <IonButton >
                                    <IonIcon icon={cartOutline}></IonIcon>
                                    <IonBadge color={`success`} mode={`ios`}>4</IonBadge>
                                </IonButton>
                                <IonButton >
                                    <IonIcon icon={mailOutline}></IonIcon>
                                </IonButton>

                                <IonAvatar slot={`end`}>
                                    <IonImg src={`https://media.istockphoto.com/photos/learn-to-love-yourself-first-picture-id1291208214?b=1&k=20&m=1291208214&s=170667a&w=0&h=sAq9SonSuefj3d4WKy4KzJvUiLERXge9VgZO-oqKUOo=`}></IonImg>
                                </IonAvatar>

                            </IonToolbar>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonButtons>
        </IonToolbar>
    )
}

export default WebToolbar


export const MobileToolbar: React.FC = function () {
    return (
        <IonItem className={`mobile`} lines={`full`}>
            <IonMenuButton   slot={`start`}></IonMenuButton>
            <IonButtons slot={`end`}>
                <IonButton slot={`end`}>
                    <IonIcon icon={cartOutline}></IonIcon>
                    <IonBadge color={`success`} mode={`ios`}>4</IonBadge>
                </IonButton>
                <IonButton slot={`end`} >
                    <IonIcon icon={mailOutline}></IonIcon>
                </IonButton>
            </IonButtons>
            <IonAvatar slot={`end`}>
                <IonImg src={`https://media.istockphoto.com/photos/learn-to-love-yourself-first-picture-id1291208214?b=1&k=20&m=1291208214&s=170667a&w=0&h=sAq9SonSuefj3d4WKy4KzJvUiLERXge9VgZO-oqKUOo=`}></IonImg>
            </IonAvatar>
        </IonItem>

    )
}
