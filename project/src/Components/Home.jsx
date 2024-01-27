import React from 'react';
import { Box ,Image} from '@chakra-ui/react';

function Home() {
  let Icons = [{ title: 1 }, { title: 1 }, { title: 1 }, { title: 1 }, { title: 1 }, { title: 1 }];

  return (
    <Box>
      {Icons.map((item, index) => {
        return <Box key={index}>
      <Image src="https://developer.android.com/static/distribute/google-play/resources/icon-design-specifications/images/full-space-dont.png" style={{width:"50px",height:"50px",border:'1px solid'}}></Image>
        </Box>;
      })}
    </Box>
  );
}

export default Home;
