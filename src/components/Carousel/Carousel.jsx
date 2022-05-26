import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import photo1 from '../Image/photo1.jpg'
import photo2 from '../Image/photo2.jpg'
import photo3 from '../Image/photo3.jpg'
import photo4 from '../Image/photo4.jpg'
import photo5 from '../Image/photo5.jpg'
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: '',
    imgPath:
      photo1,
  },
  {
    label: '',
    imgPath:
      photo2,
  },
  {
    label: '',
    imgPath:
      photo3,
  },
  {
    label: '',
    imgPath:
      photo4,
  },
  {
    label: '',
    imgPath:
      photo5,
  },
];

function Carousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;



  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: '60%', flexGrow: 2, py: '50px'}}>
      {/* <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignSelf: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
          color: 'black'
        }}
      >
      </Paper> */}
        {/* <Typography>{images[activeStep].label}</Typography> */}
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: '25vw',
                  display: 'block',
                  maxWidth: '100%',
                  overflow: 'hidden',
                  width: '100%',
                  alignitems: 'center',
                  borderRadius: '10%'
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>

    </Box>
  );
}

export default Carousel;
