
import { Row, Col, Modal, Button } from "antd";
import { useState } from "react";
import img1 from "../../images/userProfile.png";
import heartIcon from "../../images/heart icon.svg";
import globe from "../../images/globe.svg"
import "./overview.css";
import { HeartOutlined} from '@ant-design/icons';

function Overview() {
  const [open, setOpen] = useState(false);
  const [heartColor,setColor]=useState('red');

  const modalClick = () => {
    setOpen(true);
  };

  const handleOk=()=>{
    setOpen(false);
  };

  const handleCancel=()=>{
    setOpen(false);
  };
  
  const data = [
    {
      key: "1",
      eventDate: "12 sept 2022",
      eventName: "singing",
      description:
        "sing lrif eroferfi e hvjjjjjjjjjhdjjdhd jwhf wjwerf hdvaj oi  jdh sdcsdlivoi c diwd",
    },
    {
      key: "2",
      eventDate: "14 sept 2022",
      eventName: "danceing",
      description: "dance ladhcsdcds sdc ds shdhc sdc sdlaalla",
    },
    {
      key: "3",
      eventDate: "22 sept 2022",
      eventName: "standup",
      description: "stand up hhahahah ashas uh dckdjc ",
    },
    {
      key: "4",
      eventDate: "25 sept 2022",
      eventName: "poetry",
      description: "poem lalallala ds d ed ejhhc jdc d alla",
    },
  ];
  return (
    <>
      <Row>
        <Col span={4} style={{boxSizing: "border-box", width: "240px", height: "139px", backgroundColor: "#F8EECB",}}>
          <div
            className="vayu"
            style={{
              marginLeft: "20px",
              marginTop: "20px",
            }}
          >
            <h1
              style={{
                color: "#F0BC00",
                font: "normal normal bold 24px/35px Poppins",
              }}
            >
              VAYU
            </h1>
            <img src="./src/img/WindLogo.svg" alt=""></img>

            <image src={img1} width="120px" height="120px"></image>
            <p>
              Captain: <b>Brijesh S.</b>
            </p>
            <p>
              Team: <b>234</b>
            </p>
          </div>
        </Col>
        <Col
          span={4}
          offset={1}
          style={{
            boxSizing: "border-box",
            width: "240px",
            height: "139px",
            backgroundColor: "#CAE0D2",
          }}
        >
          <div
            className="prithvi"
            style={{
              marginLeft: "20px",
              marginTop: "20px",
            }}
          >
            <h1
              style={{
                font: "normal normal bold 24px/35px Poppins",
                color: "#447A57",
              }}
            >
              PRITHVI
            </h1>
            <image src="./WindLogo.svg" width="120px" height="120px"></image>
            <p>
              Captain: <b>Raghavendra.P</b>
            </p>
            <p>
              Team: <b>234</b>
            </p>
          </div>
        </Col>
​
        <Col
          span={4}
          offset={1}
          style={{
            boxSizing: "border-box",
            width: "240px",
            height: "139px",
            backgroundColor: "#ECB189",
          }}
        >
          <div
            className="agni"
            style={{
              marginLeft: "20px",
              marginTop: "20px",
            }}
          >
            <h1
              style={{
                font: "normal normal bold 24px/35px Poppins",
                color: "#CC5200",
              }}
            >
              AGNI
            </h1>
            <image src="./WindLogo.svg" width="120px" height="120px"></image>
            <p>
              Captain: <b>Gopal.J</b>
            </p>
            <p>
              Team: <b>234</b>
            </p>
          </div>
        </Col>
        <Col
          span={4}
          offset={1}
          style={{
            boxSizing: "border-box",
            width: "240px",
            height: "139px",
            backgroundColor: "#A3D6F0",
          }}
        >
          <div
            className="jal"
            style={{
              marginLeft: "20px",
              marginTop: "20px",
            }}
          >
            <h1
              style={{
                font: "normal normal bold 24px/35px Poppins",
                color: "#348FBD",
              }}
            >
              JAL
            </h1>
            <image src="./WindLogo.svg" width="120px" height="120px"></image>
            <p>
              Captain: <b>Shakira.B</b>
            </p>
            <p>
              Team: <b>234</b>
            </p>
          </div>
        </Col>
​
        <Col
          span={4}
          offset={1}
          style={{
            boxSizing: "border-box",
            width: "240px",
            height: "139px",
            backgroundColor: "#AA8FB5",
          }}
        >
          <div
            className="akash"
            style={{
              marginLeft: "20px",
              marginTop: "20px",
            }}
          >
            <h1
              style={{
                font: "normal normal bold 24px/35px Poppins",
                color: "#5D3382",
              }}
            >
              AKASH
            </h1>
            <image src="./WindLogo.svg" width="120px" height="120px"></image>
            <p>
              Captain: <b>Sudhir .K.S</b>
            </p>
            <p>
              Team: <b>234</b>
            </p>
          </div>
        </Col>
      </Row>
      <Row
        style={{
          marginTop: "20px",
        }}
      >
        <Col span={15}>
          <Row
            className="scroll"
            style={{
              overflowY: "auto",
              width: "100%",
              height: "516px",
              padding: "10px",
              webkitScrollbarDisplay: "none",
            }}
          >
            <Col
              span={7}
              offset={1}
              style={{
                border:'1px dashed black',
                width: "240px",
                height: "303px",
                background: "#FFFFFF 0% 0% no-repeat padding-box",
                marginTop: "20px",
              }}
            >
            <div style={{display:'flex', marginLeft:'20px', marginTop:'20px'}}>
            <img src={img1}  width='40px' height='40px' alt=""></img>
            <p style={{font:'normal normal normal 14px/21px Poppins',marginTop:'10px', marginBottom:'10px', marginLeft:'10px',}}>Employee name</p>
            </div>
            <div onClick={()=>{setOpen(true)}} style={{
              boxSizing:'border-box',
              width:'100%',
              height:'147px',
              backgroundColor: '#e1e5eb',
            }}>
            </div>
            <div style={{marginTop:'20px', marginLeft:'20px',display:'flex'}}>
            <Button type="text" onClick={(heartColor)=>{ heartColor==='white'?setColor('red'):setColor('white')}} > <HeartOutlined   style={{ color:'red' ,fontSize:'36px',}}></HeartOutlined></Button>
            <p>August 31 at 1:50 PM</p>
            <img src={globe} width="24px" height="24px" alt=""></img>
            </div>
                <Modal
                  open={open}
                  onOk={(e) => {setOpen(false)}}
                  onCancel={(e) => {setOpen(false)}}
                
                >
                  <Row>
                    <Col span={11} offset={1}>
                    <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
                    </Col>
                    <Col span={11} offset={1}>
​
                    <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
                    </Col>
                    </Row> 
                 
                </Modal>
              
            </Col>
            <Col
              span={7}
              offset={1}
              style={{
                width: "240px",
                height: "303px",
                background: "#FF0FFF 0% 0% no-repeat padding-box",
                marginTop: "20px",
              }}
            ></Col>
            <Col
              span={7}
              offset={1}
              style={{
                width: "240px",
                height: "303px",
                background: "#FF0FFF 0% 0% no-repeat padding-box",
                marginTop: "20px",
              }}
            ></Col>
            <Col
              span={7}
              offset={1}
              style={{
                width: "240px",
                height: "303px",
                background: "#FF0FFF 0% 0% no-repeat padding-box",
                marginTop: "20px",
              }}
            ></Col>
            <Col
              span={7}
              offset={1}
              style={{
                width: "240px",
                height: "303px",
                background: "#FF0FFF 0% 0% no-repeat padding-box",
                marginTop: "20px",
              }}
            ></Col>
            <Col
              span={7}
              offset={1}
              style={{
                width: "240px",
                height: "303px",
                background: "#FF0FFF 0% 0% no-repeat padding-box",
                marginTop: "20px",
              }}
            ></Col>
            <Col
              span={7}
              offset={1}
              style={{
                width: "240px",
                height: "303px",
                background: "#FF0FFF 0% 0% no-repeat padding-box",
                marginTop: "20px",
              }}
            ></Col>
          </Row>
        </Col>
        <Col span={8} offset={1}>
          <div
            className="event"
            style={{
              boxSizing: "border-box",
              width: "400px",
              height: "400px",
              justifyItems: "center",
              display: "flex",
              flexDirection: "column",
              fontSize: ".7vw",
              backgroundColor: "#E9F4F8",
              alignSelf: "end",
            }}
          >
            <div
              className="scroll"
              style={{
                overflowY: "scroll",
              }}
            >
              {data.map((val, index) => {
                return (
                  <div
                    style={{
                      boxSizing: "border-box",
                      width: "70%",
                      height: "30%",
                      display: "flex",
                      flexDirection: "row",
                      padding: "auto",
                      //   margin: "10px 10px 10px 10px",
                      justifyItems: "left",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        width: "8vw",
                        height: "7.5vw",
                        marginTop: "10%",
                        fontSize: "1.5vw",
                        backgroundColor: "white",
                        margin: "10px 10px 10px 10px ",
                      }}
                    >
                      {" "}
                      <h3 style={{ textAlign: "center" }}>{val.eventDate}</h3>
                    </div>
                    <div
                      style={{
                        boxSizing: "border-box",
                        width: "65%",
                        height: "90%",
                      }}
                    >
                      {" "}
                      <h1>{val.eventName}</h1>
                      <p> {val.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Overview;