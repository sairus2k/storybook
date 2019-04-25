import { isMemo } from 'react-is';

export function getType(typeOrMemo: { type: any }) {
  return isMemo(typeOrMemo) ? typeOrMemo.type : typeOrMemo;
}

export function getDisplayName(typeOrMemo: { type: any }) {
  if (typeof typeOrMemo === 'string') {
    return typeOrMemo;
  }

  const type = getType(typeOrMemo);
  return type.displayName || type.name || 'Unknown';
}
