import type { NextPage } from 'next';
import React from 'react';
import Background from '@/components/Background';
import { SimpleTag as Tag, TagGroup } from '@/components/Tag';

const DesignSystem: NextPage = () => {
  return (
    <div>
      <Background className="bg-white">
        <TagGroup>
          <Tag text="standard Tag" color="standard" />
          <Tag href="/a/standard" text="href:standard Tag" color="standard" />
          <Tag text="blue Tag" color="blue" />
          <Tag href="/a/blue" text="href:blue Tag" color="blue" />
          <Tag text="green Tag" color="green" />
          <Tag href="/a/green" text="href:green Tag" color="green" />
          <Tag text="teal Tag" color="teal" />
          <Tag href="/a/teal" text="href:teal Tag" color="teal" />
          <Tag text="purple Tag" color="purple" />
          <Tag href="/a/purple" text="href:purple Tag" color="purple" />
          <Tag text="red Tag" color="red" />
          <Tag href="/a/red" text="href:red Tag" color="red" />
          <Tag text="yellow Tag" color="yellow" />
          <Tag href="/a/yellow" text="href:yellow Tag" color="yellow" />
          <Tag text="grey Tag" color="grey" />
          <Tag href="/a/grey" text="href:grey Tag" color="grey" />
          <Tag text="greenLight Tag" color="greenLight" />
          <Tag
            href="/a/greenLight"
            text="href:greenLight Tag"
            color="greenLight"
          />
          <Tag text="tealLight Tag" color="tealLight" />
          <Tag
            href="/a/tealLight"
            text="href:tealLight Tag"
            color="tealLight"
          />
          <Tag text="blueLight Tag" color="blueLight" />
          <Tag
            href="/a/blueLight"
            text="href:blueLight Tag"
            color="blueLight"
          />
          <Tag text="purpleLight Tag" color="purpleLight" />
          <Tag
            href="/a/purpleLight"
            text="href:purpleLight Tag"
            color="purpleLight"
          />
          <Tag text="redLight Tag" color="redLight" />
          <Tag href="/a/redLight" text="href:redLight Tag" color="redLight" />
          <Tag text="yellowLight Tag" color="yellowLight" />
          <Tag
            href="/a/yellowLight"
            text="href:yellowLight Tag"
            color="yellowLight"
          />
          <Tag text="greyLight Tag" color="greyLight" />
          <Tag
            href="/a/greyLight"
            text="href:greyLight Tag"
            color="greyLight"
          />
        </TagGroup>
      </Background>
    </div>
  );
};

export default DesignSystem;
