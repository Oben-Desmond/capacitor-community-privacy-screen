import { IonAvatar, IonBadge, IonButton, IonButtons, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import { cart, cartOutline, mail, mailOutline } from 'ionicons/icons';
import React from 'react';
import ItemCard from '../components/ItemCard';
import WebToolbar, { MobileToolbar } from '../components/WebToolbar';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage id={`main`}>
      < MobileToolbar></MobileToolbar>
      < WebToolbar></WebToolbar>
      <IonContent fullscreen>
        <IonGrid>  <IonToolbar>
          <IonToolbar>
            <IonRow>
              <IonCol size={`12`} sizeSm={`12`} sizeMd={`6`} sizeLg={`6`} sizeXl={`6`} style={{ padding: `30px`, }}>  <IonSearchbar style={{ innerHeight: `40px` }} mode={`ios`}></IonSearchbar> <br />
                <IonCardSubtitle>
                  Searching for ``
               </IonCardSubtitle>
              </IonCol>
              <IonCol></IonCol>
            </IonRow>
          </IonToolbar>
          <IonToolbar>
            <IonButtons>
              <IonRow>
                <IonCol>
                  <IonButton mode={`ios`} disabled>
                    <h6>Sort</h6>
                  </IonButton>
                </IonCol>
                <IonCol>
                  <IonButton shape={`round`} mode={`ios`} color={`success`} fill={`solid`}>Popular</IonButton>
                </IonCol>
                <IonCol>
                  <IonButton shape={`round`} mode={`ios`} color={`medium`} fill={`outline`}>Most New</IonButton>
                </IonCol>
                <IonCol>
                  <IonButton shape={`round`} mode={`ios`} color={`medium`} fill={`outline`}>Cheapest</IonButton>
                </IonCol>
              </IonRow>
            </IonButtons>
          </IonToolbar>
          <IonRow>
            {
              [1, 1, 1, 1, 1, 1, 1].map(res => {
                return (
                  <IonCol size={`12`} sizeSm={`6`} sizeMd={`6`} sizeLg={`4`} sizeXl={`4`}>
                    <ItemCard></ItemCard>
                  </IonCol>
                )
              })
            }
          </IonRow>
          <br />
          <br />
          <IonToolbar className={`ion-padding`}>
            <IonCardTitle>Recommended</IonCardTitle>
          </IonToolbar>
          <IonRow>
            {
              [1, 1, 1, 1, 1, 1, 1].map(res => {
                return (
                  <IonCol size={`12`} sizeSm={`6`} sizeMd={`6`} sizeLg={`4`} sizeXl={`4`}>
                    <ItemCard></ItemCard>
                  </IonCol>
                )
              })
            }
          </IonRow>
        </IonToolbar>
        </IonGrid>
        <IonToolbar className="ion-padding ion-margin">
          <IonCard mode={`ios`} >
            <IonCardContent>
              <h3>FDA Disclaimer</h3>
              <small>
                Our hemp derived products, including CBD and hemp, are not for use by or sale to persons under the age of 18. All CBD products contain less than 0.3% THC per the Controlled Substances Act. These products should be used only as directed on the label. They should not be used if you are pregnant or nursing. A Doctor’s advice should be sought before using these and any supplemental dietary products. These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure or prevent any disease. By using this site you agree to follow the Privacy Policy and all Terms & Conditions printed on this site. Void Where Prohibited By Law.
                Furthermore the content on this site is provided for informational and educational purposes only. You should always consult with your physician before making any decisions or changes to your healthcare regimen to determine what is best for you and if there are any contraindications or concerns regarding any current conditions, treatments, or medications you are taking.
                *Free Shipping on Orders over $19.99
                </small>
            </IonCardContent>
          </IonCard>
        </IonToolbar>
        <IonToolbar color={`dark`}>
          <IonToolbar color={`none`}>
            <IonButton mode={`ios`} color={`light`} fill={`clear`} disabled>
              <IonLabel>Plants online</IonLabel>
            </IonButton>
          </IonToolbar>
          <IonGrid>
            <IonRow>
              <IonCol>
                <h4>Quick Links</h4>
                <IonItem button color={`none`} lines={`none`}>
                  <small>About Us</small>
                </IonItem>
                <IonItem button color={`none`} lines={`none`}>
                  <small>Whole Sales</small>
                </IonItem>
                <IonItem button color={`none`} lines={`none`}>
                  <small>Lab Reports</small>
                </IonItem>
              </IonCol>

              <IonCol>
                <br />
                <br />
                <h4>Contact Us</h4>
                <IonItem button color={`none`} lines={`none`}>
                  <small>support@plantsonline.com</small>
                </IonItem>
                <IonItem button color={`none`} lines={`none`}>
                  <small>+1 23 458 123</small>
                </IonItem>
                <IonItem button color={`none`} lines={`none`}>
                  <small>Company</small>
                </IonItem>
                <IonItem button color={`none`} lines={`none`}>
                  <small>Team</small>
                </IonItem>
                <IonItem button color={`none`} lines={`none`}>
                  <small></small>
                </IonItem>
              </IonCol>
              <IonCol>

                <h4>SignUp to Our Special NewSletter</h4>
                <IonToolbar className={`ion-padding`} color={`medium`}>
                  <IonItem button color={`none`}  >
                    <IonLabel position={`floating`}>Enter Email</IonLabel>
                    <IonInput></IonInput>
                  </IonItem>
                  <IonToolbar color={`none`} style={{ textAlign: `center` }}>
                    <IonButton shape={`round`} >
                      Subscribe
                   </IonButton>
                  </IonToolbar>
                </IonToolbar>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
