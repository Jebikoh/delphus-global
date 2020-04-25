import React from 'react';
import { IonGrid, IonRow, IonCol, IonBackButton, IonToolbar } from '@ionic/react';
import './DGHeader.css';

interface ContainerProps {
  name: string;
}

const DGHeader: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <IonGrid>
        <IonRow>
          <IonCol className="temp">
            <IonBackButton className="header-back-button" color="primary" defaultHref="/landing">Back</IonBackButton>
          </IonCol>
          <IonCol>
            <IonToolbar className="header-toolbar">{name}</IonToolbar>
          </IonCol>
          <IonCol></IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default DGHeader;
