import React from 'react';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';

interface CardData {
  type: 'patientsAdded' | 'progress' | 'recordsVerified';
  value: number;
  total?: number;
}

const cardsData: CardData[] = [
  {
    type: 'patientsAdded',
    value: 1200, // You can replace this with the actual number of patients added
    total: 1700,
  },
  {
    type: 'progress',
    value: 75, // You can replace this with the actual progress percentage
  },
  {
    type: 'recordsVerified',
    value: 950, // You can replace this with the actual number of records verified
  },
];

function CardBorder() {
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
          <span className='text-primary' style={{ fontWeight: 'bold', fontSize:32 }}>{card.value} / {card.total}</span> patients added (
          <span className='text-primary' style={{ fontWeight: 'bold', color: 'warning' }}>{((card.value / card.total!) * 100).toFixed(2)}%</span>)
        </Card.Text>
      );
    case 'progress':
      return (
        <>
          <ProgressBar now={card.value} label={<span className='text-warning'  style={{ fontWeight: 'bold',fontSize:32 }}>{`${card.value}%`}</span>} visuallyHidden />
          <Card.Text>{<span className='text-warning' style={{ fontWeight: 'bold',fontSize:32 }}>{`${card.value}%`}</span>} completed</Card.Text>
        </>
      );
    case 'recordsVerified':
      return <Card.Text><span className='text-success' style={{ fontWeight: 'bold',fontSize:32}}>{card.value}</span> records verified</Card.Text>;
    default:
      return null;
  }
}

export default CardBorder;
