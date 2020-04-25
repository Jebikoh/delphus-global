import React from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonGrid, IonRow, IonCol, IonBackButton } from '@ionic/react';
import './Researcher.css';

const Researcher: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonGrid>
                    <IonRow className="header-row">
                        <IonCol>
                            <IonBackButton>Back</IonBackButton>
                        </IonCol>
                        <IonCol>
                            <IonToolbar>Delphus Global</IonToolbar>
                        </IonCol>
                        <IonCol>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonHeader>
            <IonContent>
                Researcher
            </IonContent>
        </IonPage>
    );
};

export default Researcher;
