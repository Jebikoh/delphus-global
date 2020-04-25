import React from 'react';
import { IonContent, IonHeader, IonPage, IonGrid, IonCol, IonRow, IonButton } from '@ionic/react';
import './Landing.css';

const Landing: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
            </IonHeader>
            <IonContent>
                <IonGrid className="container">

                    <IonRow>
                        <IonCol className="iam">I am a...</IonCol>
                    </IonRow>
                    <IonRow className="iam-button-container">
                        <IonCol>
                            <IonButton className="iam-button">Patient</IonButton>
                        </IonCol>
                    </IonRow>
                    <IonRow className="iam-button-container">
                        <IonCol>
                            <IonButton className="iam-button">Researcher</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Landing;
