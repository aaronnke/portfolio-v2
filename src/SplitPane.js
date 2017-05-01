import React from 'react';

const SplitPane = props => {
  return (
    <div className='split-pane'>
      <div className='split-pane__left'>
        {props.left}
      </div>
      <div className='split-pane__right'>
        {props.right}
      </div>
    </div>
  )
}

export default SplitPane;
