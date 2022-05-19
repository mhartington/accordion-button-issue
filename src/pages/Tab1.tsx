import { useRef } from 'react';

import {
  IonContent,
  IonAccordionGroup,
  IonAccordion,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonButton,
  IonNote,
  IonIcon,
} from '@ionic/react';
import { arrowDownCircle, informationCircleOutline } from 'ionicons/icons';

const Tab1: React.FC = () => {
  const accordionGroupRef = useRef<any>();
  const logAccordionValue = () => {
    if (accordionGroupRef.current) {
      console.log(accordionGroupRef.current.value);
    }
  };
  const closeAccordion = () => {
    if (accordionGroupRef.current) {
      accordionGroupRef.current.value = undefined;
    }
  };

  return (
    <IonPage>
      <IonContent>
        <IonAccordionGroup>
          <IonAccordion value="colors">
            <IonItem slot="header">
              <IonLabel> CLick the header, then button </IonLabel>
              <IonButton slot="end"
                onClick={(e) => {
                  e.preventDefault();
                  console.log('calling stopProp');
                }}
              >
                <IonIcon icon={informationCircleOutline}  slot="icon-only"/>
              </IonButton>
            </IonItem>

            <IonList slot="content">
              <IonItem>
                <IonLabel>red</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Green</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Blue</IonLabel>
              </IonItem>
            </IonList>
          </IonAccordion>
          <IonAccordion value="shapes">
            <IonItem slot="header">
              <IonLabel>Shapes</IonLabel>
            </IonItem>

            <IonList slot="content">
              <IonItem>
                <IonLabel>Circle</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Triangle</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Square</IonLabel>
              </IonItem>
            </IonList>
          </IonAccordion>
          <IonAccordion value="numbers">
            <IonItem slot="header">
              <IonLabel>Numbers</IonLabel>
            </IonItem>

            <IonList slot="content">
              <IonItem>
                <IonLabel>1</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>2</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>3</IonLabel>
              </IonItem>
            </IonList>
          </IonAccordion>
        </IonAccordionGroup>





      </IonContent>
    </IonPage>
  );
};
export default Tab1;
