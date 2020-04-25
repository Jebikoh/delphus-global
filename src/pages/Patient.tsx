import React from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonBackButton, IonGrid, IonRow, IonCol } from '@ionic/react';
// import DGHeader from '../components/DGHeader';
import './Patient.css';
import './global.css';

const Patient: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonGrid>
                    <IonRow>
                        <IonCol className="temp">
                            <IonBackButton className="header-back-button" color="primary" defaultHref="/landing">Back</IonBackButton>
                        </IonCol>
                        <IonCol>
                            <IonToolbar className="header-toolbar">GLOBAL</IonToolbar>
                        </IonCol>
                        <IonCol></IonCol>
                    </IonRow>
                </IonGrid>
                {/* <DGHeader name="GLOBAL" /> */}
            </IonHeader>
            <IonContent>
            </IonContent>
        </IonPage>
    );
};

export default Patient;
