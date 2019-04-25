import React from 'react';

interface Props {
  onClick?: () => void;
  toggled?: boolean;
}

function CopyButton({ onClick, toggled }: Props) {
  const toggleText = 'Copied!';
  const text = 'Copy';

  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        backgroundColor: 'rgb(255, 255, 255)',
        cursor: 'pointer',
        fontSize: '13px',
        alignSelf: 'flex-start',
        flexShrink: 0,
        overflow: 'hidden',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'rgb(238, 238, 238)',
        borderImage: 'initial',
        borderRadius: '3px',
        padding: '3px 10px',
      }}
    >
      {toggled ? toggleText : text}
    </button>
  );
}

CopyButton.defaultProps = {
  onClick: () => {},
  toggled: false,
};

export default CopyButton;
