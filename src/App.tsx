import { Avatar, Col, Divider, Row, Typography } from 'antd';
import 'antd/dist/reset.css';
import './App.css';
import avatar from './assets/avatar.jpeg';

const { Text, Title, Paragraph } = Typography;

function App() {
  return (
    <Row className="container">
      <Col
        xs={{ span: 22, offset: 1 }}
        sm={{ span: 20, offset: 2 }}
        lg={{ span: 16, offset: 4 }}
        xl={{ span: 14, offset: 5 }}
        xxl={{ span: 12, offset: 6 }}
      >
        <Row gutter={[24, 24]}>
          <Col>
            <Avatar size={128} src={avatar}></Avatar>
          </Col>
          <Col>
            <Title>Mai Đức Thắng</Title>
            <Title level={4}>Software Developer</Title>
            <Text>
              <b>Date of birth:</b> Sep 27, 1997
            </Text>
            <br />
            <Text>
              <b>Gender:</b> Male
            </Text>
            <br />
            <Text>
              <b>Phone:</b> 0981874734
            </Text>
            <br />
            <Text>
              <b>Email:</b> maiducthang279@gmail.com
            </Text>
            <br />
            <Text>
              <b>Address:</b> 125 Đồng Văn Cống, District 2, Ho Chi Minh City,
              Vietnam
            </Text>
            <br />
            <Text>
              <b>Website:</b> www.linkedin.com/in/thangmd
            </Text>
          </Col>
          <Col span={24}>
            <Divider orientation="left">
              <Title level={3}>CAREER OBJECTIVE</Title>
            </Divider>
            <Paragraph>Short-term: Work as a front-end developer.</Paragraph>
            <Paragraph>
              Long-term: Become a technical leader at a software development
              company with a culture centered around people and using the latest
              technologies.
            </Paragraph>
          </Col>
          <Col span={24}>
            <Divider orientation="left">
              <Title level={3}>PERSONAL EXPERIENCE</Title>
            </Divider>
          </Col>
          <Col span={24}>
            <Divider orientation="left">
              <Title level={3}>WORK EXPERIENCE</Title>
            </Divider>
            <Row gutter={16}>
              <Col xs={24} sm={24} lg={6} xl={6} xxl={6}>
                <Text>Aug 2020 - Now</Text>
              </Col>
              <Col xs={24} sm={24} lg={18} xl={18} xxl={18}>
                <Title level={4}>FPT SOFTWARE</Title>
                <Paragraph>
                  The web application provides a 3D bearings model editor. Users
                  can design 3D bearing shafts and calculate the properties of
                  the model.
                </Paragraph>
                <Paragraph>Technology: Angular, Rxjs, Cypress</Paragraph>
                <Paragraph>Responsibilities:</Paragraph>
                <ul>
                  <li>
                    Work directly with customers for UI implementation, unit
                    tests, and end-to-end tests.
                  </li>
                  <li>Review the code of teammates.</li>
                </ul>
                <Paragraph>Gained skills:</Paragraph>
                <ul>
                  <li>Improve communication skills with clients.</li>
                  <li>Have experience in Rxjs, unit tests, and cypress.</li>
                </ul>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col xs={24} sm={24} lg={6} xl={6} xxl={6}>
                <Text>Jan 2020 - Aug 2020</Text>
              </Col>
              <Col xs={24} sm={24} lg={18} xl={18} xxl={18}>
                <Title level={4}>FPT SOFTWARE</Title>
                <Paragraph>
                  A tracking machines system that tracks the status of machines
                  in the production chain. It also tracks vehicles in factories
                  and draws real-time paths of vehicles.
                </Paragraph>
                <Paragraph>
                  Technology: Angular, Rxjs, WebSocket, Konva, Web Workers API
                </Paragraph>
                <Paragraph>Gained skills:</Paragraph>
                <ul>
                  <li>Have experience in Rxjs, Konva, and Web Workers API.</li>
                </ul>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col xs={24} sm={24} lg={6} xl={6} xxl={6}>
                <Text>Aug 2019 - Jan 2020</Text>
              </Col>
              <Col xs={24} sm={24} lg={18} xl={18} xxl={18}>
                <Title level={4}>FPT SOFTWARE</Title>
                <Paragraph>
                  A system tracks the position and status of healthcare device
                </Paragraph>
                <Paragraph>
                  Technology: ReactJS, Redux, Redux-Saga, Redux Form
                </Paragraph>
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Divider orientation="left">
              <Title level={3}>EDUCATION</Title>
            </Divider>
            <Row gutter={16}>
              <Col xs={24} sm={24} lg={6} xl={6} xxl={6}>
                <Text>Sep 2015 - May 2019</Text>
              </Col>
              <Col xs={24} sm={24} lg={18} xl={18} xxl={18}>
                <Title level={4}>FPT University</Title>
                <Paragraph>Major: Sofware Engineering</Paragraph>
                <Paragraph>GPA: 7.9/10</Paragraph>
                <Paragraph>
                  Having experience in ReactJS, Angular, Spring Boot,
                  PostgreSQL.
                </Paragraph>
                <Paragraph>Always be ready to study new knowledge.</Paragraph>
                <Title level={4}>Language</Title>
                <Paragraph>Vietnamese, English.</Paragraph>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default App;
