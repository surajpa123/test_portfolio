import { EmailIcon } from "@chakra-ui/icons";
import { Box, Card, CardBody, Text, Icon, Grid, GridItem, Heading } from "@chakra-ui/react";
import { TiLocation } from "react-icons/ti"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { useSelector } from "react-redux";
const About = () => {
    const theme = useSelector(store => store.theme);
    return <Box w={"100%"} backgroundColor={theme === "dark" ? "black" : "white"} color={theme === "dark" ? "white" : "black"} id="about" className="about section" >
        <Box w={"90%"} m={"auto"} padding={"1rem"} borderBottom={"1px"} borderBottomColor={theme === "dark" ? "white" : "black"}>
            <Card m={"auto"} bg={theme === "dark" ? "black" : "white"} color={theme === "dark" ? "white" : "black"} border={"none"}>
                <Heading color={"#4A90E2"} textAlign={"center"} textDecoration={"underline"} textDecorationColor={"#4A90E2"}>About Me</Heading>
                <CardBody >
                    <Text fontSize={["1rem", "1rem", "1.5rem", "1.5rem", "1.5rem"]} w={["100%", "100%", "80%", "80%", "80%"]} m={"auto"} id="user-detail-intro">Hello, I'm <span style={{ color: "#4A90E2" }}>Ashish Roul</span>, a web development enthusiast from Bhubneswar, Odisha. My passion lies in mastering the <span style={{ color: "#4A90E2" }}>MERN stack</span>. While I'm new to the field, I've gained <span style={{ color: "#4A90E2" }}>hands-on experience</span> with React, Node.js, Express, and MongoDB during my studies. I'm dedicated to crafting user-friendly interfaces and scalable backends and constantly expanding my skillset. If you have opportunities for someone starting out like me, please connect. Thank you for considering my profile.</Text>
                    <br />
                    <Grid w={"80%"} m={"auto"} display={"grid"} templateColumns={["repeat(1,1fr)", "repeat(1,1fr)", "repeat(2,1fr)", "repeat(4,1fr)", "repeat(4,1fr)"]} templateRows={["repeat(4,1fr)", "repeat(4,1fr)", "repeat(2,1fr)", "repeat(1,1fr)", "repeat(1,1fr)"]} >
                        <GridItem fontSize={["1rem", "1rem", "1.5rem", "1.5rem", "1.5rem"]} m="auto" textAlign={"center"} >
                            <Icon as={TiLocation} fontSize={["1rem", "1rem", "1.5rem", "1.5rem", "1.5rem"]} />{" "}
                            <a href="https://maps.app.goo.gl/EvkNWhR4jAuUGEY26" target="_blank" rel="noreferrer noopener">Bhubneswar,Odisha</a>
                        </GridItem>
                        <GridItem fontSize={["1rem", "1rem", "1.5rem", "1.5rem", "1.5rem"]} m="auto" textAlign={"center"} >
                            <Icon as={EmailIcon} fontSize={["1rem", "1rem", "1.5rem", "1.5rem", "1.5rem"]} />{" "}
                            <a href="mailto:officialashishroul@gmail.com" target="_blank" rel="noreferrer noopener">officialashishroul<br />@gmail.com</a>
                        </GridItem>
                        <GridItem fontSize={["1rem", "1rem", "1.5rem", "1.5rem", "1.5rem"]} m="auto" textAlign={"center"} >
                            <Icon as={AiFillGithub} fontSize={["1rem", "1rem", "1.5rem", "1.5rem", "1.5rem"]} />{" "}
                            <a href="https://github.com/Ashishroul" target="_blank" rel="noreferrer noopener">GitHub</a>
                        </GridItem>
                        <GridItem fontSize={["1rem", "1rem", "1.5rem", "1.5rem", "1.5rem"]} m="auto" textAlign={"center"} >
                            <Icon as={AiFillLinkedin} fontSize={["1rem", "1rem", "1.5rem", "1.5rem", "1.5rem"]} />{" "}
                            <a href="https://www.linkedin.com/in/ashish-roul-77581815b/" target="_blank" rel="noreferrer noopener">LinkedIn</a>
                        </GridItem>
                    </Grid>
                </CardBody>
            </Card>
        </Box>
    </Box>
}
export default About;