import React, { CSSProperties, ReactNode } from 'react';

type Props = typeof defaultProps;
const defaultProps = {
  children: null as ReactNode,
  id: null as string,
};

export function H1({ id, children }: Props) {
  const styles = {
    borderBottom: '1px solid #eee',
    fontWeight: 600,
    margin: 0,
    padding: 0,
    fontSize: '40px',
  };
  return (
    <h1 id={id} style={styles}>
      {children}
    </h1>
  );
}

H1.defaultProps = defaultProps;

export function H2({ id, children }: Props) {
  const styles = {
    fontWeight: 600,
    margin: 0,
    padding: 0,
    fontSize: '30px',
  };
  return (
    <h2 id={id} style={styles}>
      {children}
    </h2>
  );
}

H2.defaultProps = defaultProps;

export function H3({ id, children }: Props) {
  const styles: CSSProperties = {
    fontWeight: 600,
    margin: 0,
    padding: 0,
    fontSize: '22px',
    textTransform: 'uppercase',
  };
  return (
    <h3 id={id} style={styles}>
      {children}
    </h3>
  );
}

H3.defaultProps = defaultProps;

export function H4({ id, children }: Props) {
  const styles = {
    fontWeight: 600,
    margin: 0,
    padding: 0,
    fontSize: '20px',
  };
  return (
    <h4 id={id} style={styles}>
      {children}
    </h4>
  );
}

H4.defaultProps = defaultProps;

export function H5({ id, children }: Props) {
  const styles = {
    fontWeight: 600,
    margin: 0,
    padding: 0,
    fontSize: '18px',
  };
  return (
    <h5 id={id} style={styles}>
      {children}
    </h5>
  );
}

H5.defaultProps = defaultProps;

export function H6({ id, children }: Props) {
  const styles = {
    fontWeight: 400,
    margin: 0,
    padding: 0,
    fontSize: '18px',
  };
  return (
    <h6 id={id} style={styles}>
      {children}
    </h6>
  );
}

H6.defaultProps = defaultProps;
