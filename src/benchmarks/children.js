import React from 'react'

function FancyBorder(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
  }

  function WelcomeDialog() {
    return (
      <FancyBorder color="blue">
        <div className="Dialog-title">
          test
        </div>
      </FancyBorder>
    );
  }
  