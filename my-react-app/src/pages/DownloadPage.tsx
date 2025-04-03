import React, { useState } from 'react';
import { Button, Card, CardContent, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

interface DownloadedContent {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  description: string;
}

export default function DownloadPage() {
  const [downloads, setDownloads] = useState<DownloadedContent[]>([
    {
      id: '1',
      title: 'Sid the Science Kid',
      thumbnail:
        'https://hips.hearstapps.com/hmg-prod/images/educational-tv-shows-for-kides-sid-the-science-kid-1586123902.jpg?crop=1xw:1xh;center,top&resize=980:*',
      duration: '22:45',
      description: 'Sid makes science fun with experiments and songs!',
    },
    {
      id: '2',
      title: 'Milo',
      thumbnail:
        'https://hips.hearstapps.com/hmg-prod/images/ml101-sh0460-comp-v001-00088-66e33152cf6a5.png?crop=0.84375xw:1xh;center,top&resize=980:*',
      duration: '18:30',
      description: 'Milo and friends explore fun jobs in this British animated series!',
    },
    {
      id: '3',
      title: 'Monkey Business',
      thumbnail:
        'https://images.unsplash.com/photo-1501286353178-1ec881214838',
      duration: '15:20',
      description: 'Enjoy the hilarious antics of mischievous monkeys!',
    },
  ]);

  const handlePlay = (id: string) => {
    alert(`Playing content with id: ${id}`);
  };

  const handleDelete = (id: string) => {
    setDownloads(downloads.filter((content) => content.id !== id));
    alert(`Deleted content with id: ${id}`);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#ffffff',
        p: 4,
        width: '100%',
        maxWidth: '1200px',
        mx: 'auto',
      }}
    >
      <Typography variant="h3" align="center" color="primary" gutterBottom>
        Downloads
      </Typography>
      <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
        {downloads.length > 0 ? (
          downloads.map((content) => (
            <Card key={content.id} sx={{ mb: 2 }}>
              <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  component="img"
                  src={content.thumbnail}
                  alt={content.title}
                  sx={{ width: 100, height: 100, objectFit: 'cover', mr: 2 }}
                />
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="h6">{content.title}</Typography>
                  <Typography variant="body2">
                    Duration: {content.duration}
                  </Typography>
                  <Typography variant="body2">
                    {content.description}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handlePlay(content.id)}
                  >
                    Play
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleDelete(content.id)}
                  >
                    Delete
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography variant="body1" align="center">
            No downloads available
          </Typography>
        )}
      </Box>
      
    </Box>
  );
}
