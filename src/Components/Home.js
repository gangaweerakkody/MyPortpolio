import React from 'react';
import { Typography, Box, Button, Container } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Explicit import for autoplay styles
import Profile from '../Images/Profile.jpg';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const slides = [
  {
    title: "I'm Isuru Ganga Weerakkody",
    subtitle: 'Freelance Web Designer & Developer',
    image: Profile,
    actions: [
      { label: 'Hire Me', link: '#' },
      { label: 'Download CV', link: '#' },
    ],
  },
  {
    title: 'Crafting Beautiful Websites',
    subtitle: 'Transforming ideas into digital experiences',
    image: 'https://via.placeholder.com/500',
    actions: [
      { label: 'View Portfolio', link: '#' },
    ],
  },
  {
    title: 'Building Scalable Solutions',
    subtitle: 'Creating efficient and robust applications',
    image: 'https://via.placeholder.com/500',
    actions: [
      { label: 'Learn More', link: '#' },
    ],
  },
];

const Home = () => {
  return (
    <Box id="home" sx={{ backgroundColor: '#BA55D3' }}>
      <Container maxWidth="lg">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          effect="fade"
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          style={{ padding: '30px 0' }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  textAlign: { xs: 'center', md: 'left' },
                  color: 'white',
                  padding: 3,
                }}
              >
                {/* Image Section */}
                <Box
                  sx={{
                    width: 250,
                    height: 250,
                    borderRadius: '50%',
                    overflow: 'hidden',
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    flexShrink: 0,
                    mb: { xs: 3, md: 0 },
                  }}
                />

                {/* Text Section */}
                <Box>
                  <Typography variant="h3" fontWeight="bold" mb={2}>
                    {slide.title}
                  </Typography>
                  <Typography variant="h5" color="textSecondary" mb={3}>
                    {slide.subtitle}
                  </Typography>

                  {/* Buttons */}
                  {slide.actions.map((action, i) => (
                    <Button
                      key={i}
                      variant="outlined"
                      sx={{
                        color: 'white',
                        borderColor: 'white',
                        mr: 2,
                        '&:hover': {
                          backgroundColor: 'white',
                          color: '#BA55D3',
                        },
                      }}
                      href={action.link}
                    >
                      {action.label}
                    </Button>
                  ))}
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default Home;
