import React from 'react';

// @ts-ignore todo: migrate PrettyPropType to TypeScript
import PrettyPropType from '../types/PrettyPropType';
// @ts-ignore todo: migrate PropVal to TypeScript
import PropVal from '../PropVal';
// @ts-ignore todo: migrate PropTable components to TypeScript
import { Table, Tbody, Td, Th, Thead, Tr } from './components';

export const multiLineText = (input: any) => {
  if (!input) {
    return input;
  }
  const text = String(input);
  const arrayOfText = text.split(/\r?\n|\r/g);
  const isSingleLine = arrayOfText.length < 2;
  return isSingleLine
    ? text
    : arrayOfText.map((lineOfText, i) => (
        <span key={`${lineOfText}.${i}`}>
          {i > 0 && <br />} {lineOfText}
        </span>
      ));
};

const determineIncludedPropTypes = (
  propDefinitions: PropsDefinition[],
  excludedPropTypes: string[]
) => {
  if (excludedPropTypes.length === 0) {
    return propDefinitions;
  }

  return propDefinitions.filter(
    propDefinition => !excludedPropTypes.includes(propDefinition.property)
  );
};

interface PropsDefinition {
  property: string;
  propType?: string | object;
  required?: boolean;
  description?: string;
  defaultValue?: any;
}

interface Props {
  type?: () => void;
  maxPropObjectKeys: number;
  maxPropArrayLength: number;
  maxPropStringLength: number;
  excludedPropTypes: string[];
  propDefinitions: PropsDefinition[];
}

export default function PropTable(props: Props) {
  const {
    type,
    maxPropObjectKeys,
    maxPropArrayLength,
    maxPropStringLength,
    propDefinitions,
    excludedPropTypes,
  } = props;

  if (!type) {
    return null;
  }

  const includedPropDefinitions = determineIncludedPropTypes(propDefinitions, excludedPropTypes);

  if (!includedPropDefinitions.length) {
    return <small>No propTypes defined!</small>;
  }

  const propValProps = {
    maxPropObjectKeys,
    maxPropArrayLength,
    maxPropStringLength,
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>property</Th>
          <Th>propType</Th>
          <Th>required</Th>
          <Th>default</Th>
          <Th>description</Th>
        </Tr>
      </Thead>
      <Tbody>
        {includedPropDefinitions.map(row => (
          <Tr key={row.property}>
            <Td isMonospace>{row.property}</Td>
            <Td isMonospace>
              <PrettyPropType propType={row.propType} />
            </Td>
            <Td>{row.required ? 'yes' : '-'}</Td>
            <Td>
              {row.defaultValue === undefined ? (
                '-'
              ) : (
                <PropVal val={row.defaultValue} {...propValProps} valueStyles={{}} />
              )}
            </Td>
            <Td>{multiLineText(row.description)}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}

PropTable.displayName = 'PropTable';
PropTable.defaultProps = {
  type: null,
  propDefinitions: [],
  excludedPropTypes: [],
};
