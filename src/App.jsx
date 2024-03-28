// App.js

import React, { useState } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Main from "./Notifications";
import Heading from "./Heading";
import StyledDiv from "./StyledDiv";
import NotificationNum from "./NotificationNum";
import GreyParagraphs from "./GreyParagraphs";
import StyledNotification from "./Notification";
import StyledImg from "./Img";
import Message from "./Message";
import Unread from "./UnreadNotification";

function App() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "unread",
      content: (
        <>
          <StyledImg src="/images/avatar-mark-webber.webp" alt="" />
          <span>
            <StyledDiv type="secondary">
              <Heading as="h2">Mark Webber</Heading>
              <GreyParagraphs as="p">
                reacted to your recent post
              </GreyParagraphs>
              <GreyParagraphs as="h2">
                My first tournament today!
              </GreyParagraphs>
            </StyledDiv>
            <GreyParagraphs>1m ago</GreyParagraphs>
          </span>
        </>
      ),
    },
    {
      id: 2,
      type: "unread",
      content: (
        <>
          <StyledImg src="/images/avatar-angela-gray.webp" alt="" />
          <span>
            <StyledDiv type="secondary">
              <Heading as="h2">Angela Gray</Heading>
              <GreyParagraphs as="p">followed you</GreyParagraphs>
            </StyledDiv>
            <GreyParagraphs>5m ago</GreyParagraphs>
          </span>
        </>
      ),
    },
    {
      id: 3,
      type: "unread",
      content: (
        <>
          <StyledImg src="/images/avatar-jacob-thompson.webp" alt="" />
          <span>
            <StyledDiv type="secondary">
              <Heading as="h2">Jacob Thompson</Heading>
              <GreyParagraphs as="p">has joined your group</GreyParagraphs>
              <Heading as="h3">Chess Club</Heading>
            </StyledDiv>
            <GreyParagraphs>1 day ago</GreyParagraphs>
          </span>
        </>
      ),
    },
    {
      id: 4,
      type: "read",
      content: (
        <div>
          <StyledNotification type="read">
            <StyledImg src="/images/avatar-rizky-hasanuddin.webp" alt="" />

            <span>
              <StyledDiv type="secondary">
                <Heading as="h2">Rizky Hasanuddin</Heading>
                <GreyParagraphs as="p">
                  sent you a private messag
                </GreyParagraphs>
              </StyledDiv>
              <GreyParagraphs>5 days ago</GreyParagraphs>
            </span>
          </StyledNotification>
          <Message>
            <GreyParagraphs>
              Hello thanks for setting up the Chess Club. I've been a member for
              a few weeks now and i;m already having lots of fun and improving
              my game
            </GreyParagraphs>
          </Message>
        </div>
      ),
    },
    {
      id: 5,
      type: "read",
      content: (
        <>
          <StyledImg src="/images/avatar-kimberly-smith.webp" alt="" />
          <span>
            <StyledDiv type="secondary">
              <Heading as="h2">Kimberly Smith</Heading>
              <GreyParagraphs as="p">commented on your picture</GreyParagraphs>
            </StyledDiv>
            <GreyParagraphs>1 week ago</GreyParagraphs>
          </span>
          <StyledImg src="/images/image-chess.webp" type="spaced" />
        </>
      ),
    },
    {
      id: 6,
      type: "read",
      content: (
        <>
          <StyledImg src="/images/avatar-nathan-peterson.webp" alt="" />
          <span>
            <StyledDiv type="secondary">
              <Heading as="h2">Nathan Peterson</Heading>
              <GreyParagraphs as="p">
                reacted to your recent post
              </GreyParagraphs>
              <GreyParagraphs as="h2">
                5 end-game strategies to increase your win rate
              </GreyParagraphs>
            </StyledDiv>
            <GreyParagraphs>1m ago</GreyParagraphs>
          </span>
        </>
      ),
    },
    {
      id: 7,
      type: "read",
      content: (
        <>
          <StyledImg src="/images/avatar-anna-kim.webp" alt="" />
          <span>
            <StyledDiv type="secondary">
              <Heading as="h2">Anna Kim</Heading>
              <GreyParagraphs as="p">left the group</GreyParagraphs>
              <Heading as="h3">Chess Club</Heading>
            </StyledDiv>
            <GreyParagraphs>2 weeks ago</GreyParagraphs>
          </span>
        </>
      ),
    },
  ]);

  const handleNotificationClick = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id && notification.type === "unread"
          ? { ...notification, type: "read" }
          : notification
      )
    );
  };

  const markAllAsUnread = () => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) => ({
        ...notification,
        type: "read",
      }))
    );
  };

  const numNotification = notifications.filter(
    (notification) => notification.type === "unread"
  ).length;

  return (
    <>
      <GlobalStyles />
      <Main>
        <StyledDiv type="primary">
          <StyledDiv type="secondary">
            <Heading>Notifications</Heading>
            {numNotification && (
              <NotificationNum>{numNotification}</NotificationNum>
            )}
          </StyledDiv>
          <GreyParagraphs as="button" onClick={markAllAsUnread}>
            Mark all as read
          </GreyParagraphs>
        </StyledDiv>

        {notifications.map((notification) => (
          <StyledNotification
            key={notification.id}
            type={notification.type}
            onClick={() => handleNotificationClick(notification.id)}
          >
            {/* Conditionally render Unread component only for "unread" notifications */}
            {notification.content}
            {notification.type === "unread" && <Unread />}
          </StyledNotification>
        ))}
      </Main>
    </>
  );
}

export default App;
