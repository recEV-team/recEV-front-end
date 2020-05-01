import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { IonContent } from '@ionic/react';
import map from 'lodash/map';

import ICharityItem from '../../models/business/charity';

import { FETCH_CHARITIES } from '../../graphql/queries/charities';

interface ICharityData {
  charities: ICharityItem[];
}

const CharityList = () => {
  const { loading, error, data } = useQuery<ICharityData>(FETCH_CHARITIES);
  if (loading) return <div>'Loading...'</div>;
  if (error) return <div>`Error: ${error.message}`</div>;
  return (
    <IonContent>
      {data &&
        map(data, (charity) => {
          console.log(charity);
        })}
    </IonContent>
  );
};

export default CharityList;
