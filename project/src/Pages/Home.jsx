import React from 'react';
import { Box ,Image,Text} from '@chakra-ui/react';
import { Link } from 'react-router-dom';


function Home() {
  let Icons = [{ title: "MyFiles" ,path:"/myfiles","src":"./Assests/myfiles.png" },{ title: "Expenses" ,path:"/expense","src":"./Assests/expense.jpg" },{ title: "MyFiles" ,path:"/myfiles","src":"./Assests/myfiles.png" },{ title: "Expenses" ,path:"/expense","src":"./Assests/expense.jpg" }];

  return (
    <Box display={'flex'} flexDirection={'row'} justifyContent={'space-around'}>
      {Icons.map((item, index) => {
        return <Box key={index}>
        <Link to={`${item.path}`}>
      <Image src={item.src} style={{width:"50px",height:"50px"}}>
      </Image>    
      </Link> 
      <Text>{item.title}</Text>             
        </Box>;
      })}
    </Box>
  );
}

export default Home;
