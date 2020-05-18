import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { myFirestore } from "../../../Config/MyFirebase";
import Logo from "../../../assets/img/logo_2x.png";
import WelcomeBoard from "../WelcomeBoard/WelcomeBoard";
import "./Main.css";
import ChatBoard from "./../ChatBoard/ChatBoard";
import { AppString } from "./../../../constant";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isOpenDialogConfirmLogout: false,
      currentPeerUser: null,
    };
    this.currentUserId = localStorage.getItem(AppString.ID);
    this.currentUserAvatar = localStorage.getItem(AppString.PHOTO_URL);
    this.currentUserNickname = localStorage.getItem(AppString.NICKNAME);
    this.listUser = [];
  }

  componentDidMount() {
    this.getListUser();
  }

  getListUser = async () => {
    try {
      const { id } = this.props.location.state;

      const result = await myFirestore
        .collection(AppString.NODE_USERS)
        .where("friends", "array-contains", id)
        .get();
      if (result.docs.length > 0) {
        this.listUser = [...result.docs];
        this.setState({ isLoading: false });
      }
    } catch (error) {
      console.log(error)
    }
  };

  onLogoutClick = () => {
    this.setState({
      isOpenDialogConfirmLogout: true,
    });
  };

  renderListUser = () => {
    if (this.listUser.length > 0) {
      let viewListUser = [];
      this.listUser.forEach((item, index) => {
        if (item.data().id !== this.currentUserId) {
          viewListUser.push(
            <button
              key={index}
              className={
                this.state.currentPeerUser &&
                this.state.currentPeerUser.id === item.data().id
                  ? "viewWrapItemFocused"
                  : "viewWrapItem"
              }
              onClick={() => {
                this.setState({ currentPeerUser: item.data() });
              }}
            >
              <img
                className="viewAvatarItem"
                src={item.data().photoUrl}
                alt="icon avatar"
              />
              <div className="viewWrapContentItem">
                <span className="textItem">{`${
                  item.data().nickname
                }`}</span>
                <span className="textItem">{`${
                  item.data().aboutMe ? item.data().aboutMe : "Not available"
                }`}</span>
              </div>
            </button>
          );
        }
      });
      return viewListUser;
    } else {
      return null;
    }
  };

  render() {
    return (
      <div className="chat__root">
        {/* Header */}
        <div className="chat__header">
          <img src={Logo} alt="logo" />
        </div>

        {/* Body */}
        <div className="chat__body">
          <div className="viewListUser"> {this.renderListUser()}</div>
          <div className="viewBoard">
            {this.state.currentPeerUser ? (
              <ChatBoard
                currentPeerUser={this.state.currentPeerUser}
                showToast={this.props.showToast}
              />
            ) : (
              <WelcomeBoard
                currentUserNickname={this.currentUserNickname}
                currentUserAvatar={this.currentUserAvatar}
              />
            )}
          </div>
        </div>

        {/* Loading */}
        {this.state.isLoading ? (
          <div className="viewLoading">
            <h3>Loading...</h3>
          </div>
        ) : null}
      </div>
    );
  }
}

export default withRouter(Main);
