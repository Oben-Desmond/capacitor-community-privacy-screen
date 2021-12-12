import { IonButton, IonCardContent, IonCardSubtitle, IonCol, IonContent, IonGrid, IonIcon, IonInput, IonItem, IonItemDivider, IonLabel, IonMenu, IonRadio, IonRadioGroup, IonRow, IonSearchbar, IonToolbar } from '@ionic/react'
import { chevronDown, filter, leaf } from 'ionicons/icons'
import React from 'react'
import NavigationMenu from './NavigationMenu'

const Menu: React.FC = function () {
    return (
        <IonMenu contentId={`main`}>
            <IonContent>
                <IonToolbar className={`ion-padding-horizontal`}>
                    <IonButton color={`medium`} mode={`ios`} fill={`clear`}> <h5>Plants online</h5></IonButton>
                    <IonIcon slot={`start`} icon={leaf} color={`success`}></IonIcon>
                </IonToolbar><br />
                <div className="mobile">
                    <NavigationMenu></NavigationMenu>
                </div>

                <div className="web">
                    <FilterMenu></FilterMenu>
                </div>
            </IonContent>
        </IonMenu>
    )
}

export default Menu


function FilterMenu() {

    return (
        <>

            <IonToolbar>
                <IonCardContent>
                    <IonItemDivider>
                        <h2>Filter</h2>
                        <IonIcon slot={`end`} icon={filter}></IonIcon>
                    </IonItemDivider>
                    <IonToolbar color={`light`}>
                        <IonRadioGroup color={`none`}>
                            <IonItem lines={`none`} color={`none`}>
                                <IonRadio slot={`start`} ></IonRadio>
                                <IonLabel>All</IonLabel>
                            </IonItem>
                            <IonItem lines={`none`} color={`none`}>
                                <IonRadio slot={`start`} ></IonRadio>
                                <IonLabel>cat 2</IonLabel>
                            </IonItem>
                            <IonItem lines={`none`} color={`none`}>
                                <IonRadio slot={`start`} ></IonRadio>
                                <IonLabel>cat 3</IonLabel>
                            </IonItem>
                            <IonItem lines={`none`} color={`none`}>
                                <IonRadio slot={`start`} ></IonRadio>
                                <IonLabel> cat 4</IonLabel>
                            </IonItem>
                        </IonRadioGroup>
                        <IonItem button lines={`none`} color={`none`}>
                            <IonCardSubtitle>
                                Others
                            </IonCardSubtitle>
                            <IonIcon icon={chevronDown}></IonIcon>
                        </IonItem>
                    </IonToolbar>


                    <IonToolbar>
                        <h4>Price Range</h4>
                    </IonToolbar>
                    <IonToolbar color={`light`}>
                        <IonItem color={`none`} lines={`none`}>
                            <IonGrid>
                                <IonRow>
                                    <IonCol>
                                        <IonItem className={`input`} lines={`none`}>
                                            <IonInput placeholder={`min`}></IonInput>
                                        </IonItem>
                                    </IonCol>
                                    <IonCol>
                                        <IonItem className={`input`} lines={`none`}>
                                            <IonInput placeholder={`max`}></IonInput>
                                        </IonItem>
                                    </IonCol>
                                </IonRow>
                                <IonToolbar color={`none`} style={{ textAlign: `center` }}>
                                    <IonButton shape={`round`} color={`success`}>Set Price</IonButton>
                                </IonToolbar>
                            </IonGrid>
                        </IonItem>
                    </IonToolbar>

                </IonCardContent>
            </IonToolbar>
        </>
    )
}