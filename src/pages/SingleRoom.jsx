import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import SingleRoomShowcase from "../components/SingleRoomShowcase";
import { SingleRoomDetails } from "../components/SingleRoomDetails";

const SingleRoom = ({ dispatch, isLoading, singleRoom }) => {
  const { slug } = useParams();

  useEffect(() => {
    dispatch({ type: "GET_SINGLE_ROOM", payload: slug });
  }, [slug, dispatch]);

  if (isLoading) {
    return <h1 className="loading-heading">Loading...</h1>;
  }

  return (
    <main id="singleRoom">
      <SingleRoomShowcase {...singleRoom[0].fields} />
      <SingleRoomDetails {...singleRoom[0].fields} />
    </main>
  );
};

const mapStateToProps = (state) => {
  const isLoading = state.rooms.isLoading;
  const singleRoom = state.rooms.single_room;
  return {
    isLoading,
    singleRoom,
  };
};

export default connect(mapStateToProps)(SingleRoom);
