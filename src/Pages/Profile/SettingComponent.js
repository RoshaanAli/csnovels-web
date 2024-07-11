import React from "react";

const SettingComponent = () => {
  return (
    <>
      <div class="container">
        <div class="sec-1">
          <h1>Edit Profile</h1>
          <div class="profile-edit">
            <form action="">
              <div class="row profile-sec">
                <div class="col-lg-3 my-auto">
                  <div class="profile">
                    <h6>FULL NAME</h6>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="profile">
                    <input type="text" placeholder="First Name" />
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="profile">
                    <input type="text" placeholder="Last Name" />
                  </div>
                </div>
              </div>
              <div class="row profile-sec">
                <div class="col-lg-3 my-auto">
                  <div class="profile ">
                    <h6>USER NAME</h6>
                  </div>{" "}
                </div>
                <div class="col-lg-6">
                  <div class="profile input-icon">
                    <span class="input-font">
                      <i class="fas fa-user"></i>
                    </span>
                    <input type="text" placeholder="Username" />
                  </div>
                </div>
              </div>
              <div class="row profile-sec">
                <div class="col-lg-3 my-auto">
                  <div class="profile">
                    <h6>EMAIL ADDRESS</h6>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="profile input-icon">
                    <span class="input-font">
                      <i class="fas fa-envelope"></i>
                    </span>
                    <input type="email" placeholder="Email" />
                  </div>
                </div>
              </div>
              <div class="row profile-sec">
                <div class="col-lg-3 my-auto">
                  <div class="profile">
                    <h6>CHANGE PASSWORD</h6>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="profile input-icon">
                    <span class="input-font">
                      <i class="fas fa-lock-alt"></i>
                    </span>
                    <input type="password" placeholder="enter new password" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="profile-button">
                    <button>Save Changes</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="sec-2">
          <h1>Accounts Features </h1>

          <div class="accounts-features">
            <div class="row feature-border">
              <div class="col-lg-3">
                <div class="feature">
                  <h6>READING STYLE</h6>
                </div>
              </div>

              <div class="col-lg-8">
                <div class="feature">
                  <div class="check-lable">
                    <input type="checkbox" id="check-1" />
                    <span class="lock">
                      <i class="fas fa-lock-alt"></i>
                    </span>
                    <label for="check-1">
                      Enable infinite scroll on book pages
                    </label>
                  </div>

                  <p>
                    Checking this box will enable an infinite scroll reading
                    experience <br />
                    YOU MUST BE A CS PLUS MEMBER TO ENABLE THIS FEATURE{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="row feature-border">
              <div class="col-lg-3">
                <div class="feature">
                  <h6>ONSITE ADS</h6>
                </div>
              </div>

              <div class="col-lg-8">
                <div class="feature">
                  <div class="check-lable">
                    <input type="checkbox" id="check-2" />
                    <span class="lock">
                      <i class="fas fa-lock-alt"></i>
                    </span>
                    <label for="check-2">
                      Enable ad free reading experience
                    </label>
                  </div>

                  <p>
                    Checking this box will all ads from the website for you{" "}
                    <br />
                    YOU MUST BE A CS PLUS MEMBER TO ENABLE THIS FEATURE
                  </p>
                </div>
              </div>
            </div>
            <div class="row feature-border">
              <div class="col-lg-3">
                <div class="feature">
                  <h6> BETA CHAPTERS</h6>
                </div>
              </div>

              <div class="col-lg-8">
                <div class="feature">
                  <div class="check-lable">
                    <input type="checkbox" id="check-3" />
                    <span class="lock">
                      <i class="fas fa-lock-alt"></i>
                    </span>
                    <label for="check-3">Enable beta chapters for books</label>
                  </div>

                  <p>
                    Checking this box will allow you to see beta/stockpiled
                    chapters that are in the works
                    <br />
                    YOU MUST BE A CS PLUS MEMBER TO ENABLE THIS FEATURE{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="row feature-border">
              <div class="col-lg-3">
                <div class="feature">
                  <h6>EMAIL NOTIFICATIONS</h6>
                </div>
              </div>

              <div class="col-lg-8 check-col">
                <div class="feature">
                  <div class="check-lable">
                    <input type="checkbox" id="check-4" />
                    <span class="lock">
                      <i class="fas fa-lock-alt"></i>
                    </span>
                    <label for="check-4">
                      Enable email notifications for new chapters
                    </label>
                  </div>

                  <p>
                    Checking this box will send you emails when new chapters are
                    released on your favorites list{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12 button-feature">
              <div class="profile-button">
                <button>Save Changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingComponent;
