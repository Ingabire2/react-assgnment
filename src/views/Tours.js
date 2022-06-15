import React, { useState } from "react";
import { Card, Space, Image, Typography, Drawer, Button } from "antd";
import "./Tours.css";
import SingleTour from "../component/SingleTour";
import allTours from "../assets/data/tours.json";

const { Text, Title } = Typography;
const Tours = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [selectedTour, setSelectedTour] = useState({});
  return (
    <>
      <div style={{ width: "100%", heigth: "auto", padding: "30px 40px" }}>
        <Card>
          {allTours.map((tour) => (
            <Card.Grid className="tour-card-grid">
              <Space direction="vertical">
                <Image preview={true} src={tour.photo}></Image>
                <Title level={4} style={{ color: "#1976D1",textAlign:'center' }}>
                  {tour.title.toUpperCase()}
                </Title>
                <Text type="secondary" italic>
                  {tour.description}
                </Text>
                <Space>
                
                  <Text strong>Due Date:{tour.dueDate} 10AM</Text>
                </Space>

                <Button
                  onClick={() => {
                    setSelectedTour(tour);
                    setShowDrawer(true);
                  }}
                  type="primary"
                  style={{ paddingLeft: "30px",border: "none",borderRadius:'4rem',justifyItems:'center',marginLeft:'60px'}}>
                  {" "}
                  Book Now
                </Button>
              </Space>
            </Card.Grid>
          ))}
        </Card>
      </div>
      <Drawer
        title="Single Tour!"
        placement="right"
        onClose={() => { setShowDrawer(false); }}
        visible={showDrawer}
      >
        <SingleTour data={selectedTour} />
      </Drawer>
    </>
  );
};
export default Tours;
