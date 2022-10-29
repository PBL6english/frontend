import React, { useState } from "react";
import { Box ,Button,Center,Checkbox,Flex,Heading,Image,Input,Spacer, Stack, Text} from "@chakra-ui/react";
import Footer from "../Footer";
import { Link } from "react-router-dom";
function SignUp(){
    const [typeP,setTypeP]=useState("password");
    const handleToggle=()=>{
        if(typeP==='password'){
          setTypeP('text');
        }
        else{
          setTypeP('password');
        }
      }
    return(
        <Stack  w='100vw' minH='100vh'>
         <Spacer/>

         <Box bg='white' w={'500px'} h='530px' left='10%' bottom='15px' pos={'relative'}
         borderRadius='10px' boxShadow=' 10px 10px #888888' pt='25px'>
            <Center>
            <Box fontWeight='bold'>
                <Flex alignItems='center' mb='15px'>
                   <Image src={require('../../imgs/logo.png')} mr='5px' />
                    <Text color={'#08D9D6'} fontSize='30px'>ENGLISH <span style={{color:'#FF2E63'}}>
                        ACADEMY</span></Text>
                </Flex>
                <Text color={'#FF2E63'} fontSize='30px'>Đăng ký tài khoản mới</Text>
                <Box mb='15px' mt='25px'>
                <Input
                 type='text'
                 placeholder='Nhập tên tài khoản'
                 color="#FF2E63"
                 border='4px'
                 borderColor={'#FF2E63'}
                 focusBorderColor='#08D9D6'
                 w="350px"
                 h="50px"
                /></Box>

                <Box mb='15px'>
                <Input
                 type='email'
                 placeholder='Nhập Email'
                 color="#FF2E63"
                 border='4px'
                 borderColor={'#FF2E63'}
                 focusBorderColor='#08D9D6'
                 w="350px"
                 h="50px"
                /></Box>

                <Box mb='15px'>
                <Input
                 type={typeP}
                 placeholder='Nhập mật khẩu'
                 color="#FF2E63"
                 border='4px'
                 borderColor={'#FF2E63'}
                 focusBorderColor='#08D9D6'
                 w="350px"
                 h="50px"
                /></Box>

                <Box mb='10px'>
                <Input
                 type={typeP}
                 placeholder='Nhập mật khẩu xác nhận'
                 color="#FF2E63"
                 border='4px'
                 borderColor={'#FF2E63'}
                 focusBorderColor='#08D9D6'
                 w="350px"
                 h="50px"
                /></Box>

                <Box mb='10px'><Checkbox fontWeight='normal' size='sm' onChange={handleToggle} 
                colorScheme='red' borderColor={'#FF2E63'} color='#FF2E63'>Hiện mật khẩu</Checkbox></Box>

                <Button color='white' colorScheme='red' w='350px'  fontWeight='bold'
                bgColor='#FF2E63' borderRadius="10px">Đăng ký</Button>
            </Box>
            </Center>
         </Box>


         <Box color={'white'} pos='absolute' zIndex={'10'} right='100px' top='200px'>
            <Heading fontSize='40px' textShadow={'3px 3px gray'}>MUỐN GIỎI TIẾNG ANH?</Heading>
            <Heading fontSize='40px' textShadow={'3px 3px gray'}>Hãy đến với ENGLISH ACADEMY</Heading>
            <Text color={'#08D9D6'}>Đã có tài khoản? <span>
                <Link to='/login'><Button  color='#FF2E63' variant='link'> Click tại đây!
                </Button></Link></span></Text>
         </Box>
        <Footer/>
        </Stack>
    )
}

export default SignUp