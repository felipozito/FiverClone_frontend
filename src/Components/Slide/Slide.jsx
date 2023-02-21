import React from "react";
import Slider from "infinite-react-carousel";
import CatCard from "../CatCard/CatCard";
import { cards } from "../../Data/data";

const Slide = ({ slidesToShow = 4, arrowsScroll = 4 }) => {
      return (
            <div className="slide">
                  <div className="container">
                        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll} autoplay={true} dots={true}>
                              {cards.map((item) => (
                                    <CatCard item={item} key={item.id} />
                              ))}
                        </Slider>
                  </div>
            </div>
      );
};

export default Slide;
