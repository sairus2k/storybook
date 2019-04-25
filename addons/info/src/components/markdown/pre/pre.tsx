import React, { ReactNode } from 'react';

import CopyButton from './copyButton';
import copy from './copy';

const TOGGLE_TIMEOUT = 1800;

interface Props {
  children: ReactNode;
  theme: {
    pre?: object;
  };
}

type State = typeof initialState;
const initialState = {
  copied: false,
};

class Pre extends React.Component<Props, State> {
  static defaultProps: Props = {
    children: null,
    theme: {},
  };
  state = initialState;
  pre: HTMLDivElement | null;
  timeout: number;

  setRef = (elem: HTMLDivElement | null) => {
    this.pre = elem;
  };

  handleClick = () => {
    const text = this.pre && this.pre.innerText;

    if (!text) {
      return;
    }

    copy(text);
    this.setState({ copied: true });

    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this.setState({ copied: false });
    }, TOGGLE_TIMEOUT);
  };

  render() {
    const { theme, children } = this.props;
    const { pre } = theme;
    const { copied } = this.state;

    return (
      <pre
        style={{
          ...{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '.88em',
            fontFamily: 'Menlo, Monaco, "Courier New", monospace',
            backgroundColor: '#fafafa',
            padding: '.5rem',
            lineHeight: 1.5,
            overflowX: 'scroll',
          },
          ...pre,
        }}
      >
        <div ref={this.setRef}>{children}</div>
        <CopyButton onClick={this.handleClick} toggled={copied} />
      </pre>
    );
  }
}

export default Pre;
