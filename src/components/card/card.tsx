import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { supabase } from '../../utils/supabase'; // Import your Supabase client

interface CardData {
  type: 'patientsAdded' | 'progress' | 'recordsVerified';
  value: number;
  total?: number;
}

const initialCardData: CardData[] = [
  {
    type: 'patientsAdded',
    value: 0,
    total: 7000,
  },
  {
    type: 'progress',
    value: 0,
  },
  {
    type: 'recordsVerified',
    value: 0,
  },
];

function CardBorder() {
  const [cardsData, setCardsData] = useState<CardData[]>(initialCardData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the total number of rows in the patients table
        const { count, error } = await supabase
          .from('patients')
          .select('count', { count: 'exact' });

        if (error) {
          console.error('Error fetching data:', error);
          return;
        }

        const patientsAdded = count ? count : 0;
        const progress = (patientsAdded / 7000) * 100;
        const recordsVerified = patientsAdded;

        // Update the state with the fetched data
        setCardsData([
          {
            type: 'patientsAdded',
            value: patientsAdded,
            total: 7000,
          },
          {
            type: 'progress',
            value: progress,
          },
          {
            type: 'recordsVerified',
            value: recordsVerified,
          },
        ]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {cardsData.map((card, index) => (
        <Card key={index} style={{ width: '18rem', marginBottom: '1rem' }}>
          <Card.Body>
            <Card.Title>{getTitleByType(card.type)}</Card.Title>
            {renderCardContent(card)}
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

function getTitleByType(type: string): string {
  switch (type) {
    case 'patientsAdded':
      return 'Patients Added';
    case 'progress':
      return 'Progress';
    case 'recordsVerified':
      return 'Records Verified';
    default:
      return '';
  }
}

function renderCardContent(card: CardData): React.ReactNode {
  switch (card.type) {
    case 'patientsAdded':
      return (
        <Card.Text>
          <span className='text-primary' style={{ fontWeight: 'bold', fontSize: 32 }}>{card.value} / {card.total}</span> patients added
        </Card.Text>
      );
    case 'progress':
      return (
        <>
          <ProgressBar now={card.value} label={<span className='text-warning' style={{ fontWeight: 'bold', fontSize: 32 }}>{`${card.value}%`}</span>} visuallyHidden />
          <Card.Text>{<span className='text-warning' style={{ fontWeight: 'bold', fontSize: 32 }}>{((card.value / 7000) * 100).toFixed(1)}%</span>} completed</Card.Text>
        </>
      );
    case 'recordsVerified':
      return <Card.Text><span className='text-success' style={{ fontWeight: 'bold', fontSize: 32 }}>{card.value}</span> records verified</Card.Text>;
    default:
      return null;
  }
}

export default CardBorder;
