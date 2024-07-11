import React from "react";

const BillingComponent = () => {
  return (
    <>
      <div class="container">
        <div class="sec-3">
          <h1>Subscription</h1>

          <div class="subscription">
            <div class="row feature-border">
              <div className="col-lg-8 my_subs_div_1">
                <div class="col-lg-4">
                  <div class="sub-method">
                    <h6>YOUR CURRENT PLAN</h6>
                  </div>
                </div>
                <div class="col-lg-8">
                  <div class="sub-method">
                    <p> CS Pro, $9 per month</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 my_subs_div_2">
                <div class="col-lg-12">
                  <div class="sub-method">
                    <h5>Change plan</h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="row feature-border">
              <div className="col-lg-8 my_subs_div_1">
                <div class="col-lg-4">
                  <div class="sub-method">
                    <h6>BILLING CYCLE</h6>
                  </div>
                </div>
                <div class="col-lg-8">
                  <div class="sub-method">
                    <p>your will be charge $9 on Feb 12 2022</p>
                    <div class="sub-check">
                      <input type="checkbox" id="check-5" />{" "}
                      <label for="check-5">Enable automatic renewel</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 my_subs_div_2">
                <div class="col-lg-12">
                  <div class="sub-method"></div>
                </div>
              </div>
            </div>
            <div class="row feature-border">
              <div className="col-lg-8 my_subs_div_1">
                <div class="col-lg-4">
                  <div class="sub-method">
                    <h6>PAYMENT INFORMATION</h6>
                  </div>
                </div>
                <div class="col-lg-8">
                  <div class="sub-method">
                    <span>
                      <i class="fab fa-cc-visa"></i> visa ending in 123
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 my_subs_div_2">
                <div class="col-lg-12">
                  <div class="sub-method">
                    <h5>Change Method</h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="row feature-border">
              <div className="col-lg-8 my_subs_div_1">
                <div class="col-lg-4">
                  <div class="sub-method">
                    <h6>CANCEL</h6>
                  </div>
                </div>
                <div class="col-lg-8">
                  <div class="sub-method">
                    <p>Cancel at the ending of billing period</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 my_subs_div_2">
                <div class="col-lg-12">
                  <div class="sub-method">
                    <h5>Cancel Subscription</h5>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="container">
        <div class="sec-4">
          <h1>History</h1>

          <div class="history">
            <table class="history-edit">
              <tr class="head-edit">
                <th>INVOICE</th>
                <th>AMOUNT</th>
                <th>STATUS</th>
                <th>DATE</th>
              </tr>
              <tr>
                <td>#1456</td>
                <td>9 USD$</td>
                <td>PAID</td>
                <td>JAN 22,2022</td>
              </tr>
              <tr>
                <td>#1456</td>
                <td>9 USD$</td>
                <td>PAID</td>
                <td>JAN 22,2022</td>
              </tr>
              <tr>
                <td>#1456</td>
                <td>10 rows</td>
                <td>PAID</td>
                <td>JAN 22,2022</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default BillingComponent;
