import React, { useState } from "react";
import { Input, Row, Col, Card, Typography, Button, Form } from "antd";

// card
const { Title } = Typography;
function App() {
  const [input, setinput] = useState("");
  const [temp, settemp] = useState("");
  const [desc, setdesc] = useState("");
  const [icon, seticon] = useState("");
  const reset = () => {
   settemp("");
   setdesc("");
   seticon("");
   setinput("");
  };
  const getWeather = async () => {
    let ApiKey= "a84b8d238f6967e52ec001101154352a";
    try{
      const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=${ApiKey}&units=metric`);
      const data = await res.json();
      console.log(data);
      const tempp = data.list[0].main.temp+ "°C"; 
      const descc = data.list[0].weather[0].description;
      const iconn = data.list[0].weather[0].icon;
      const image = "http://openweathermap.org/img/wn/"+ iconn +"@2x.png";
      settemp(tempp);
      setdesc(descc);
      seticon(image); }
      catch(err){
        alert("city not found........Enter the correct city name ")
      }
       
   
   
  }
  return (
    <div className="App">
      <Row justify="center">
        <Col span={24}>
          <Card style={{ height: 100 }}>
            <Title level={1}>Weather App</Title>
          </Card>
        </Col>
      </Row>
      <br />
      <br />
      <Row justify="center">
      <Col><h1>Temperature:{temp}</h1>
      <h1>{desc}</h1>
      <img src={icon} alt="icon"/></Col>
      </Row>
      <Form>
        <Row justify="center" style={{ marginTop: 80 }}>
          <Col span={6}>
            <Input placeholder="Enter the city name......" size="large" onChange={(e)=>setinput(e.target.value)}/>
          </Col>
        </Row>
        <br />
        <br />
        <Row justify="center">
          <Col span={2}>
            <Button type="primary"  onClick={getWeather}>
              Search
            </Button>
            </Col>
            <Col span={1}>
            <Button type="primary"  onClick={reset}>
              reset
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
    
  );
}

export default App;
