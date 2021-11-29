import Button from '@mui/material/Button';

export default function PrimaryButton({ text }) {
    return (
        <Button 
            sx={{
            backgroundColor: 'var(--light-gray)',
            color: 'black',
            width: '327px',
            padding: '10px',
            margin: '10px'
        }}>
            {text}
        </Button>        
    );
  }