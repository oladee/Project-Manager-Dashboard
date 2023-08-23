import React from 'react';
import { Button, Col, Row, Statistic } from 'antd';


const buttonStyle = {
    marginTop: 16,
    color: 'black',
    border: '1px solid blue'
        
}
const StatusApp = () => (


  <Row gutter={24} style={{
    width: '60vw'
    
  }}>

    <Col span={12}>
      <Statistic title="Pending Applicants" value={110200} />
      <Button
        style={buttonStyle}
        type="primary"
      >
        Approve
      </Button>
    </Col>

    <Col span={12}>
      <Statistic title="Active Students" value={400} />
      
      <Button
        style={buttonStyle}
        type="primary"
      >
        Attendance Checker
      </Button>
    </Col>

    <Col span={12} >
      <Statistic title="Enrolled Students" value={400} style={{
        marginTop: '2rem'
      }} />
      
      <Button
        style={buttonStyle}
        type="primary"
      >
        Activate / Deactivate
      </Button>


    </Col>

    <Col span={12}>
      <Statistic title="Active Instructors" value={5} style={{
        marginTop: '2rem'
      }} />
      
      <Button
        style={buttonStyle}
        type="primary"
      >
        Activate / Deactivate
      </Button>


    </Col>


  </Row>
);
export default StatusApp;