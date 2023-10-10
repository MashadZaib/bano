import React, { useState } from "react";
import Head from "../layout/head/Head";
import Content from "../layout/content/Content";
import OrderOverview from "../components/partials/crypto/order-overview/OrderOverview";
import ActionCenter from "../components/partials/crypto/action-center/ActionCenter";
import CoinOrder from "../components/partials/crypto/coin-order/CoinOrder";
import UserActivity from "../components/partials/crypto/user-activity/UserActivity";
import OrderActivity from "../components/partials/order-activity/OrderActivity";
import { Card, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";
import {
  Block,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockBetween,
  BlockTitle,
  PreviewAltCard,
  Icon,
  Button,
  Row,
  PreviewCard,
  Col,
} from "../components/Component";

const StudentProfile = () => {
  const [sm, updateSm] = useState(false);
  return (
    <>
      <Head title="Profile" />
      <Content page="component">
       <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Student Profile</BlockTitle>
              <p>Update Info</p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <div className="card-head">
              <h5 className="card-title">Student Profile</h5>
            </div>
            <form>
              <Row className="g-4">
                <Col lg="6">
                  <div className="form-group">
                    <label className="form-label" htmlFor="full-name-1">
                      User Name
                    </label>
                    <div className="form-control-wrap">
                      <input type="text" id="full-name-1" className="form-control" />
                    </div>
                  </div>
                </Col>
                <Col lg="6">
                  <div className="form-group">
                    <label className="form-label" htmlFor="full-name-1">
                      First Name
                    </label>
                    <div className="form-control-wrap">
                      <input type="text" id="full-name-1" className="form-control" />
                    </div>
                  </div>
                </Col>
                <Col lg="6">
                  <div className="form-group">
                    <label className="form-label" htmlFor="full-name-1">
                      Last Name
                    </label>
                    <div className="form-control-wrap">
                      <input type="text" id="full-name-1" className="form-control" />
                    </div>
                  </div>
                </Col>
                <Col lg="6">
                  <div className="form-group">
                    <label className="form-label" htmlFor="email-address-1">
                      Email address
                    </label>
                    <div className="form-control-wrap">
                      <input type="text" id="email-address-1" className="form-control" />
                    </div>
                  </div>
                </Col>
                <Col lg="6">
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone-no-1">
                      Phone No
                    </label>
                    <div className="form-control-wrap">
                      <input type="number" id="phone-no-1" className="form-control" />
                    </div>
                  </div>
                </Col>
               
                <Col xl="12">
                  <Button color="primary" size="lg">
                    Save Information
                  </Button>
                </Col>
              </Row>
            </form>
          </PreviewCard>
        </Block>
        </Content>
    </>
  );
};

export default StudentProfile;
