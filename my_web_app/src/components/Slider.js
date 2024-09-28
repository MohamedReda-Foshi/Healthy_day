import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

function Slider() {
  return (
    <div>
      <Slide
        nextArrow={
          <button
            style={{
              background: 'none',
              border: '0px',
              width: '30px',
            }}
          >
            <svg
              fill="#fff"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
            </svg>
          </button>
        }
        prevArrow={
          <button
            style={{
              background: 'none',
              border: '0px',
              width: '30px',
            }}
          >
            <svg
              fill="#fff"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
            </svg>
          </button>
        }
      >
        <div className="each-slide-effect">
          <div
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)',
              height: '500px', // Change this value to adjust the height
              backgroundSize: 'cover', // Ensures image covers the whole div
              backgroundPosition: 'center', // Center the image
            }}
          ></div>
        </div>
        <div className="each-slide-effect">
          <div
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80)',
              height: '500px', // Change this value to adjust the height
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>
        <div className="each-slide-effect">
          <div
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)',
              height: '500px', // Change this value to adjust the height
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>
      </Slide>
    </div>
  );
}

export default Slider;
